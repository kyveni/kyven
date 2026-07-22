'use client'

import { useEffect, useState } from 'react'

type Firefly = {
  left: string
  top: string
  x: string
  y: string
  d: string
  delay: string
  size: number
}

export function Fireflies({ count = 20 }: { count?: number }) {
  const [flies, setFlies] = useState<Firefly[]>([])

  useEffect(() => {
    const next: Firefly[] = Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}vw`,
      top: `${15 + Math.random() * 80}vh`,
      x: `${Math.random() * 160 - 80}px`,
      y: `${Math.random() * 140 - 70}px`,
      d: `${4 + Math.random() * 7}s`,
      delay: `${-Math.random() * 8}s`,
      size: Math.random() > 0.7 ? 5 : 3,
    }))
    setFlies(next)
  }, [count])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {flies.map((f, i) => (
        <span
          key={i}
          className="animate-fly absolute rounded-full"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            background: '#d9ff8d',
            boxShadow: '0 0 13px 4px rgba(199,255,119,.45)',
            animationDelay: f.delay,
            // custom props consumed by the --animate-fly keyframes
            ['--x' as string]: f.x,
            ['--y' as string]: f.y,
            ['--d' as string]: f.d,
          }}
        />
      ))}
    </div>
  )
}
