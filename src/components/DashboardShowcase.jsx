import { useState } from 'react'

export default function DashboardShowcase() {
  const [hovered, setHovered] = useState(null)

  const ring = (key) =>
    hovered === key
      ? 'ring-2 ring-primary/70 scale-[1.02]'
      : 'ring-1 ring-transparent'

  const legend = [
    { key: 'streak', icon: '\u{1F525}', label: 'Streak Counter', desc: 'Your current run, front and center.' },
    { key: 'goal', icon: '\u{1F4C8}', label: 'Weekly Goal', desc: 'How close you are to this week\'s target.' },
    { key: 'reminder', icon: '🔔', label: 'Smart Reminder', desc: 'One nudge, right before it\'s too late.' },
    { key: 'graph', icon: '\u{1F7E9}', label: 'Contribution Graph', desc: 'Your activity, mapped out at a glance.' },
    { key: 'summary', icon: '\u{1F3C6}', label: 'Weekly Summary', desc: 'All of it together, every Sunday.' },
  ]

  return (
    <section className="bg-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-text sm:text-4xl">
          Now is the time.
        </h2>
        <p className="mb-12 text-muted sm:mb-16">
          Hover a label to see what it actually does.
        </p>

        <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <div
            onMouseEnter={() => setHovered('summary')}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-2xl border border-white/10 bg-panel p-4 shadow-2xl transition-all duration-300 sm:p-8 ${
              hovered === 'summary' ? 'ring-2 ring-primary/70' : ''
            }`}
          >
            <div className="mb-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
            </div>

            <div className="mb-3 grid grid-cols-2 gap-3">
              <div
                onMouseEnter={() => setHovered('streak')}
                onMouseLeave={() => setHovered(null)}
                className={`rounded-lg bg-bg p-6 transition-all duration-300 ${ring('streak')}`}
              >
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-xs text-muted">day streak</div>
              </div>
              <div
                onMouseEnter={() => setHovered('goal')}
                onMouseLeave={() => setHovered(null)}
                className={`rounded-lg bg-bg p-6 transition-all duration-300 ${ring('goal')}`}
              >
                <div className="text-3xl font-bold text-text">5/7</div>
                <div className="text-xs text-muted">weekly goal</div>
              </div>
            </div>

            <div
              onMouseEnter={() => setHovered('reminder')}
              onMouseLeave={() => setHovered(null)}
              className={`mb-3 flex items-center gap-2 rounded-lg bg-bg px-4 py-3 text-sm text-muted transition-all duration-300 ${ring('reminder')}`}
            >
              <span>🔔</span>
              <span>Reminder sent at 8:00 PM — still time today.</span>
            </div>

            <div
              onMouseEnter={() => setHovered('graph')}
              onMouseLeave={() => setHovered(null)}
              className={`h-28 rounded-lg bg-bg transition-all duration-300 sm:h-32 ${ring('graph')}`}
            />
          </div>

          <div className="flex flex-col gap-3">
            {legend.map((item) => (
              <div
                key={item.key}
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                className={`flex cursor-default items-start gap-3 rounded-lg border p-4 transition-all duration-300 ${
                  hovered === item.key
                    ? 'border-primary/50 bg-panel'
                    : 'border-white/10 bg-panel/40'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-text">{item.label}</div>
                  <div className="text-xs text-muted">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
