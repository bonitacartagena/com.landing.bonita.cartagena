'use client'

import { useEffect, useRef } from "react"

const VIDEO_ID = "yAgV-QQrDD8"

export function ShortsVideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const command = (func: string) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func,
          args: [],
        }),
        "https://www.youtube.com"
      )
    }

    const ensurePlayback = () => {
      command("mute")
      command("playVideo")
    }

    const handleLoad = () => {
      ensurePlayback()

      // iOS can ignore the first autoplay attempt, so retry briefly.
      const retryTimes = [250, 1000, 2000]
      retryTimes.forEach((delay) => {
        window.setTimeout(ensurePlayback, delay)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          ensurePlayback()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(iframe)
    iframe.addEventListener("load", handleLoad)
    document.addEventListener("visibilitychange", ensurePlayback)
    window.addEventListener("pageshow", ensurePlayback)

    return () => {
      observer.disconnect()
      iframe.removeEventListener("load", handleLoad)
      document.removeEventListener("visibilitychange", ensurePlayback)
      window.removeEventListener("pageshow", ensurePlayback)
    }
  }, [])

  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-[9/16] w-full">
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&playsinline=1&controls=0&rel=0&enablejsapi=1`}
              title="Bonita Cartagena video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
