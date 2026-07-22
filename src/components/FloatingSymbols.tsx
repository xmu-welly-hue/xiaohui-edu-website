const SYMBOLS = [
  { text: '∫', top: '12%', left: '8%', size: 'text-4xl', delay: '0s', duration: '8s' },
  { text: '∑', top: '25%', left: '85%', size: 'text-5xl', delay: '1s', duration: '7s' },
  { text: 'π', top: '60%', left: '5%', size: 'text-3xl', delay: '2s', duration: '9s' },
  { text: '∞', top: '70%', left: '90%', size: 'text-4xl', delay: '0.5s', duration: '6s' },
  { text: 'Δ', top: '15%', left: '70%', size: 'text-3xl', delay: '3s', duration: '8s' },
  { text: '√', top: '80%', left: '15%', size: 'text-2xl', delay: '1.5s', duration: '7s' },
  { text: 'θ', top: '40%', left: '92%', size: 'text-3xl', delay: '2.5s', duration: '10s' },
  { text: 'F=ma', top: '50%', left: '3%', size: 'text-lg font-mono', delay: '4s', duration: '9s' },
  { text: 'E=mc²', top: '85%', left: '80%', size: 'text-lg font-mono', delay: '1s', duration: '8s' },
  { text: 'α', top: '35%', left: '12%', size: 'text-2xl', delay: '3.5s', duration: '7s' },
  { text: 'λ', top: '75%', left: '75%', size: 'text-2xl', delay: '2s', duration: '6s' },
  { text: '∂', top: '20%', left: '50%', size: 'text-3xl', delay: '0.8s', duration: '11s' },
];

export function FloatingSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {SYMBOLS.map((s, i) => (
        <span
          key={i}
          className={`absolute ${s.size} text-brand-orange/[0.07] font-serif`}
          style={{
            top: s.top,
            left: s.left,
            animation: `float-slow ${s.duration} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}
