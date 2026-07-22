import { NextRequest, NextResponse } from 'next/server';

// Feishu API configuration - stored in environment variables for security
const FEISHU_APP_ID = process.env.FEISHU_APP_ID;
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET;
const FEISHU_BASE_TOKEN = 'Fpp7bc8PgaFd6KsqtsnckGzonod';
const FEISHU_TABLE_ID = 'tblmL0Bko5x4J7UQ';

interface FeishuTokenResponse {
  code: number;
  msg: string;
  tenant_access_token: string;
  expire: number;
}

interface FeishuRecordResponse {
  code: number;
  msg: string;
  data: {
    record: {
      record_id: string;
    };
  };
}

// Get tenant access token
async function getTenantAccessToken(): Promise<string | null> {
  if (!FEISHU_APP_ID || !FEISHU_APP_SECRET) {
    console.error('Feishu credentials not configured');
    return null;
  }

  try {
    const response = await fetch(
      'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          app_id: FEISHU_APP_ID,
          app_secret: FEISHU_APP_SECRET,
        }),
      }
    );

    const data: FeishuTokenResponse = await response.json();

    if (data.code !== 0) {
      console.error('Failed to get tenant access token:', data.msg);
      return null;
    }

    return data.tenant_access_token;
  } catch (error) {
    console.error('Error getting tenant access token:', error);
    return null;
  }
}

// Submit record to Feishu Bitable
async function submitToBitable(
  accessToken: string,
  fields: Record<string, unknown>
): Promise<boolean> {
  try {
    const response = await fetch(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_BASE_TOKEN}/tables/${FEISHU_TABLE_ID}/records`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          fields,
        }),
      }
    );

    const data: FeishuRecordResponse = await response.json();

    if (data.code !== 0) {
      console.error('Failed to submit to Bitable:', data.msg);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Bitable:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, grade, subject, classType, remark } = body;

    // Validate required fields
    if (!name || !phone || !grade) {
      return NextResponse.json(
        { error: '请填写必填字段：姓名、电话、年级' },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: '请输入正确的手机号码' },
        { status: 400 }
      );
    }

    // Prepare fields for Feishu Bitable
    const fields: Record<string, unknown> = {
      '姓名': name,
      '电话': phone,
      '年级': grade,
      '科目': subject || '未选择',
      '来源': '官网',
      '意向班型': classType || '未选择',
      '备注': remark || '',
      '提交时间': new Date().toISOString(),
    };

    // Get tenant access token
    const accessToken = await getTenantAccessToken();
    if (!accessToken) {
      return NextResponse.json(
        { error: '服务暂时不可用，请稍后重试或直接联系小灰老师' },
        { status: 500 }
      );
    }

    // Submit to Bitable
    const success = await submitToBitable(accessToken, fields);
    if (!success) {
      return NextResponse.json(
        { error: '提交失败，请稍后重试或直接联系小灰老师' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '报名信息已提交，小灰老师会尽快与您联系',
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}
