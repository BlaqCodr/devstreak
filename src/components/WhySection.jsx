export default function WhySection() {
  const cards = [
    {
      title: 'Life gets busy.',
      body: 'You forget to commit.',
      footer: 'Your streak disappears.',
    },
    {
      title: 'Motivation fades.',
      body: 'Small projects stop.',
      footer: 'Momentum dies.',
    },
    {
      title: "You don't need guilt.",
      body: 'You need a reminder.',
      footer: 'Simple.',
    },
  ]

  return (
    <section className="bg-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-text sm:mb-14 sm:text-4xl">
          Why developers lose streaks
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-panel p-6 text-left sm:p-8"
            >
              <div className="mb-4 text-lg font-semibold text-text sm:text-xl">
                {card.title}
              </div>
              <div className="mb-6 text-sm text-muted sm:text-base">
                {card.body}
              </div>
              <div className="border-t border-white/10 pt-4 text-sm font-medium text-primary">
                {card.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
