export default function ComparisonSection() {
  return (
    <section className="bg-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-text sm:text-4xl">
          Isn't this just GitHub?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted sm:mb-16">
          Fair question. Here's the actual difference.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl border border-white/10 bg-panel/40 p-6 sm:p-8">
            <div className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted">
              GitHub
            </div>
            <ul className="flex flex-col gap-4 text-sm text-muted sm:text-base">
              <li className="flex gap-3">
                <span className="text-slate-500">&#10007;</span>
                <span>Shows you what happened, after it's too late to fix it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-500">&#10007;</span>
                <span>One graph, no goals. Everyone gets the same green squares.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-500">&#10007;</span>
                <span>Never tells you anything. You have to remember to check it.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/40 bg-panel p-6 sm:p-8">
            <div className="mb-5 text-sm font-semibold uppercase tracking-wide text-primary">
              DevStreak
            </div>
            <ul className="flex flex-col gap-4 text-sm text-text sm:text-base">
              <li className="flex gap-3">
                <span className="text-primary">&#10003;</span>
                <span>Reminds you while there's still time today, not tomorrow.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">&#10003;</span>
                <span>Your own goal &mdash; commit days, commit count, or a streak target. Off days included.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">&#10003;</span>
                <span>One nudge, right when you need it. Not another tab to remember.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted sm:mt-10">
          Team accountability and burnout-aware goals are next on the roadmap.
        </div>
      </div>
    </section>
  )
}
