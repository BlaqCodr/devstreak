import { useState } from 'react'

const ROWS = 7
const COLS = 20
const LEVEL_COLORS = ['#1E293B', '#143a2a', '#1f7a45', '#2fae5c', '#22C55E']
const DAY_LABELS = { 1: 'Mon', 3: 'Wed', 5: 'Fri' }
const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function seededLevel(dayIndex, row) {
  const seed = Math.sin(dayIndex * 12.9898 + row * 78.233) * 43758.5453
  const frac = seed - Math.floor(seed)
  const weekendPenalty = (row === 0 || row === 6) ? 0.15 : 0
  const v = frac - weekendPenalty
  if (v < 0.38) return 0
  if (v < 0.58) return 1
  if (v < 0.74) return 2
  if (v < 0.89) return 3
  return 4
}

function levelToCount(level, dayIndex, row) {
  if (level === 0) return 0
  const seed = Math.abs(Math.sin(dayIndex * 3.1 + row * 5.7)) * 10
  const base = [0, 1, 4, 7, 11][level]
  return base + Math.floor(seed % 4)
}

export default function ContributionGraph() {
  const [hovered, setHovered] = useState(null)

  const today = new Date()
  const todayDow = today.getDay()

  const cells = []
  const monthLabels = []
  let lastMonth = null

  for (let c = 0; c < COLS; c++) {
    const weeksAgo = COLS - 1 - c
    let monthPlacedThisCol = false

    for (let r = 0; r < ROWS; r++) {
      const dayOffset = weeksAgo * 7 + ((todayDow - r + 7) % 7)
      const date = new Date(today)
      date.setDate(date.getDate() - dayOffset)
      const dayIndex = Math.floor(date.getTime() / 86400000)

      const level = seededLevel(dayIndex, r)
      const count = levelToCount(level, dayIndex, r)

      if (!monthPlacedThisCol && date.getDate() <= 7 && date.getMonth() !== lastMonth) {
        monthLabels.push({ col: c, label: MONTH_NAMES[date.getMonth()] })
        lastMonth = date.getMonth()
        monthPlacedThisCol = true
      }

      cells.push({ row: r, col: c, level, count, date })
    }
  }

  return (
    <div className="relative mx-auto mt-10 max-w-md rounded-xl border border-white/10 bg-panel p-4 sm:mt-16 sm:max-w-lg sm:p-6">
      <div className="relative pl-7 pt-4">
        <div className="pointer-events-none absolute left-7 right-0 top-0 h-4">
          {monthLabels.map((m, i) => (
            <span
              key={i}
              className="absolute text-[9px] text-muted"
              style={{ left: `calc(${m.col} * (100% / ${COLS}))` }}
            >
              {m.label}
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute left-0 top-4 flex h-full flex-col justify-between text-[9px] text-muted">
          {[0, 1, 2, 3, 4, 5, 6].map((r) => (
            <span key={r} className="leading-[10px]" style={{ height: '10px' }}>
              {DAY_LABELS[r] || ''}
            </span>
          ))}
        </div>

        <div
          className="grid gap-[2px]"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {cells.map((cell) => (
            <div
              key={cell.row + '-' + cell.col}
              onMouseEnter={() => setHovered(cell)}
              onMouseLeave={() => setHovered(null)}
              className="aspect-square rounded-[1px] cursor-pointer transition-transform duration-150 hover:scale-125"
              style={{ backgroundColor: LEVEL_COLORS[cell.level] }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1 text-[9px] text-muted">
        <span>Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <span key={i} className="h-2 w-2 rounded-[1px]" style={{ backgroundColor: color }} />
        ))}
        <span>More</span>
      </div>

      {hovered && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-md border border-white/10 bg-bg px-3 py-1.5 text-xs text-text shadow-xl"
          style={{
            left: `calc(1.75rem + (${hovered.col} + 0.5) * ((100% - 1.75rem) / ${COLS}))`,
            top: `calc(1rem + ${hovered.row} * 11px)`,
          }}
        >
          {hovered.count} contribution{hovered.count === 1 ? '' : 's'} on{' '}
          {hovered.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </div>
      )}
    </div>
  )
}
