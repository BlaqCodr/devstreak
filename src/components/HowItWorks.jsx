export default function HowItWorks() {
  const steps = [
    { icon: '\u{1F517}', label: 'Connect GitHub' },
    { icon: '\u{1F3AF}', label: 'Set your goal' },
    { icon: '\u{1F4BB}', label: 'Code normally' },
    { icon: '\u{1F514}', label: 'Get reminded' },
    { icon: '\u{1F525}', label: 'Keep your streak' },
  ]

  return (
    <section className="bg-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-text sm:mb-16 sm:text-4xl">
          How DevStreak Works
        </h2>

        <div className="relative flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 sm:hidden" />
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 sm:left-0 sm:right-0 sm:top-6 sm:h-px sm:w-full" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 mb-10 flex w-full items-center gap-4 sm:mb-0 sm:w-auto sm:flex-col sm:items-center sm:gap-3 sm:text-center"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-panel text-xl">
                {step.icon}
              </div>
              <div className="text-sm font-medium text-text sm:max-w-[100px] sm:text-base">
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
