import ContributionGraph from './ContributionGraph'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-panel px-4 py-2 font-mono text-xs text-muted sm:text-sm">
          <span className="text-primary">$</span>
          <span>git commit -m "i promise to push this time"</span>
          <span className="text-primary animate-pulse">_</span>
        </div>

        <h1 className="mb-6 font-sans text-4xl font-extrabold leading-[1.1] text-text sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-[72px]">
          Keep the green squares alive.
        </h1>

        <p className="mx-auto mb-8 max-w-xl px-2 text-base text-muted sm:text-lg">
          DevStreak quietly tracks your GitHub activity and reminds you
          before your streak slips away.
        </p>

        <button className="mb-6 w-full rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-bg transition hover:brightness-110 sm:w-auto">
          Continue with GitHub
        </button>

        <div className="text-sm text-muted">
          Your dev productivity tool that's there to nudge you to show up.
        </div>

        <ContributionGraph />
      </div>
    </section>
  )
}
