'use client';

export function Logo() {
  return (
    <div
      className="w-10 h-10 rounded-md flex items-center justify-center transition-all duration-300"
      style={{
        background: 'rgba(100, 255, 218, 0.08)',
        border: '1px solid rgba(100, 255, 218, 0.3)',
      }}
    >
      <span className="font-display text-[16px] font-bold leading-none" style={{ color: '#64FFDA' }}>
        JR
      </span>
    </div>
  );
}
