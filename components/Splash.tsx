'use client'

import React, { useEffect, useState } from 'react'

export default function Splash() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Timing: 2 seconds for writing animation + 500ms pause + 600ms fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 600)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#FAFAF8',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 600ms ease-in-out',
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <h1
          className="handwritten-reveal-text"
          style={{
            fontFamily: '"Dancing Script", "Great Vibes", cursive',
            fontSize: 'min(72px, 16vw)',
            fontWeight: 400,
            color: '#111111',
            margin: 0,
            position: 'relative',
            display: 'inline-block',
            maskImage: 'linear-gradient(to right, black var(--reveal-percent), transparent var(--reveal-percent))',
            WebkitMaskImage: 'linear-gradient(to right, black var(--reveal-percent), transparent var(--reveal-percent))',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          Joe Raphael
        </h1>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

        @property --reveal-percent {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 0%;
        }

        .handwritten-reveal-text {
          animation: revealWriting 2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        @keyframes revealWriting {
          0% {
            --reveal-percent: 0%;
            opacity: 0;
            transform: translateY(5px);
          }
          15% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            --reveal-percent: 100%;
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </div>
  )
}
