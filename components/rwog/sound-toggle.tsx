'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function SoundToggle() {
  const [playing, setPlaying] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const nodesRef = useRef<Array<AudioScheduledSourceNode>>([])

  const stop = useCallback(() => {
    nodesRef.current.forEach((n) => {
      try {
        n.stop()
      } catch {
        /* already stopped */
      }
    })
    nodesRef.current = []
    if (ctxRef.current) {
      ctxRef.current.close()
      ctxRef.current = null
    }
    setPlaying(false)
  }, [])

  const start = useCallback(() => {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new AudioCtx()
    ctxRef.current = ctx

    const master = ctx.createGain()
    master.gain.value = 0.07
    master.connect(ctx.destination)

    // Filtered white noise -> gentle forest wind / rustle
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
    const noise = ctx.createBufferSource()
    noise.buffer = buffer
    noise.loop = true
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 650
    const noiseGain = ctx.createGain()
    noiseGain.gain.value = 0.28
    noise.connect(filter).connect(noiseGain).connect(master)
    noise.start()

    // Low sine drone -> a calm pond hum
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = 174
    const oscGain = ctx.createGain()
    oscGain.gain.value = 0.035
    osc.connect(oscGain).connect(master)
    osc.start()

    nodesRef.current = [noise, osc]
    setPlaying(true)
  }, [])

  useEffect(() => {
    return () => {
      nodesRef.current.forEach((n) => {
        try {
          n.stop()
        } catch {
          /* noop */
        }
      })
      ctxRef.current?.close()
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => (playing ? stop() : start())}
      aria-pressed={playing}
      aria-label={playing ? 'Turn off forest ambience' : 'Turn on forest ambience'}
      title="Toggle forest ambience"
      className="border-line fixed right-4 bottom-4 z-40 grid h-12 w-12 place-items-center rounded-full border bg-[rgba(5,24,13,0.82)] text-foreground backdrop-blur-md transition-colors hover:bg-[rgba(11,42,24,0.92)]"
    >
      {playing ? (
        <Volume2 className="h-5 w-5 text-lime" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </button>
  )
}
