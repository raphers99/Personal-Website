'use client'

import React, { useEffect, useState } from 'react'

export default function Splash() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 800)
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0A0A0A',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 800ms ease-out',
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      <div style={{ position: 'relative', textAlign: 'center', padding: '0 20px' }}>
        <h1
          className="splash-text"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 600,
            letterSpacing: '0.02em',
            color: '#ffffff',
            margin: 0,
            lineHeight: 1.1,
            opacity: 0,
          }}
        >
          Joseph Raphael
        </h1>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

        .splash-text {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </div>
  )
}
