import { NextRequest, NextResponse } from 'next/server';

// Feishu API configuration
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
  data?: {
    record: {
      record_id: string;
    };
  };
}

// Get tenant access token
async function getTenantAccessToken(): Promise<{ token: string | null; error?: string }> {
  if (!FEISHU_APP_ID || !FEISHU_APP_SECRET) {
    const missingVars = [];
    if (!FEISHU_APP_ID) missingVars.push('FEISHU_APP_ID');
    if (!FEISHU_APP_SECRET) missingVars.push('FEISHU_APP_SECRET');
    
    console.error(`[Feishu API] Missing environment variables: ${missingVars.join(', ')}`);
    return { 
      token: null, 
      error: `飞书应用凭证未配置，请联系管理员配置环境变量: ${missingVars.join(', ')}` 
    };
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

    if (!response.ok) {
      console.error(`[Feishu API] Token request failed with status: ${response.status}`);
      return { token: null, error: `飞书认证服务请求失败 (HTTP ${response.status})` };
    }

    const data: FeishuTokenResponse = await response.json();

    if (data.code !== 0) {
      console.error(`[Feishu API] Token request failed: code=${data.code}, msg=${data.msg}`);
      return { token: null, error: `飞书认证失败: ${data.msg}` };
    }

    if (!data.tenant_access_token) {
      console.error('[Feishu API] Token response missing tenant_access_token');
      return { token: null, error: '飞书认证响应缺少 token' };
    }

    return { token: data.tenant_access_token };
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error(`[Feishu API] Token request error: ${errMsg}`);
    return { token: null, error: `飞书认证请求异常: ${errMsg}` };
  }
}

// Submit record to Feishu Bitable
async function submitToBitable(
  accessToken: string,
  fields: Record<string, unknown>
): Promise<{ success: boolean; error?: string; recordId?: string }> {
  const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_BASE_TOKEN}/tables/${FEISHU_TABLE_ID}/records`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ fields }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`[Feishu API] Bitable request failed: status=${response.status}, body=${text}`);
      return { success: false, error: `飞书多维表格请求失败 (HTTP ${response.status})` };
    }

    const data: FeishuRecordResponse = await response.json();

    if (data.code !== 0) {
      console.error(`[Feishu API] Bitable request failed: code=${data.code}, msg=${data.msg}`);
      return { success: false, error: `飞书多维表格写入失败: ${data.msg}` };
    }

    const recordId = data.data?.record?.record_id;
    console.log(`[Feishu API] Record created successfully: ${recordId}`);
    return { success: true, recordId };
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error(`[Feishu API] Bitable request error: ${errMsg}`);
    return { success: false, error: `飞书多维表格请求异常: ${errMsg}` };
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body = await request.json();
    const { name, phone, grade, subject, source, classType, remark } = body;

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
      '科目': subject || '',
      '来源': source || '官网',
      '意向班型': classType || '',
      '备注': remark || '',
      '提交时间': new Date().toISOString(),
    };

    console.log(`[Feishu API] Processing submission for: ${name}, ${phone}, ${grade}`);

    // Get tenant access token
    const tokenResult = await getTenantAccessToken();
    if (!tokenResult.token) {
      console.error(`[Feishu API] Failed to get token: ${tokenResult.error}`);
      return NextResponse.json(
        { error: tokenResult.error || '服务暂时不可用，请稍后重试或直接联系小灰老师（18559689449）' },
        { status: 500 }
      );
    }

    // Submit to Bitable
    const submitResult = await submitToBitable(tokenResult.token, fields);
    if (!submitResult.success) {
      console.error(`[Feishu API] Failed to submit: ${submitResult.error}`);
      return NextResponse.json(
        { error: submitResult.error || '提交失败，请稍后重试或直接联系小灰老师（18559689449）' },
        { status: 500 }
      );
    }

    const duration = Date.now() - startTime;
    console.log(`[Feishu API] Submission successful in ${duration}ms, recordId: ${submitResult.recordId}`);

    return NextResponse.json({
      success: true,
      message: '报名信息已提交，小灰老师会尽快与您联系',
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error(`[Feishu API] Unexpected error: ${errMsg}`);
    return NextResponse.json(
      { error: '服务器错误，请稍后重试或直接联系小灰老师（18559689449）' },
      { status: 500 }
    );
  }
}
