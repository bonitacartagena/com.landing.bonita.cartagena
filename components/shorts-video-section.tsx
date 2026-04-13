export function ShortsVideoSection() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-[9/16] w-full">
            <iframe
              src="https://www.youtube.com/embed/yAgV-QQrDD8?autoplay=1&mute=1&loop=1&playlist=yAgV-QQrDD8&playsinline=1&controls=0&rel=0"
              title="Bonita Cartagena video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
