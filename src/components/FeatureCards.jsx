export default function FeatureCards() {
  const features = [
    {
      icon: '🔥',
      title: 'Smart Reminders',
      desc: "Never miss today's contribution.",
    },
    {
      icon: '📊',
      title: 'GitHub Insights',
      desc: 'Track commits, PRs, reviews and issues.',
    },
    {
      icon: '🎯',
      title: 'Custom Goals',
      desc: 'Commit days. Commit count. Streak targets.',
    },
    {
      icon: '🏆',
      title: 'Momentum',
      desc: 'Watch your consistency improve.',
    },
  ]

  return (
    <section className="bg-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-text sm:mb-16 sm:text-4xl">
          Everything you need to stay consistent
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-panel p-8 text-left transition-colors duration-300 hover:border-primary/40 sm:p-10"
            >
              <div className="mb-5 text-4xl">{f.icon}</div>
              <div className="mb-2 text-xl font-semibold text-text sm:text-2xl">
                {f.title}
              </div>
              <div className="text-sm text-muted sm:text-base">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
