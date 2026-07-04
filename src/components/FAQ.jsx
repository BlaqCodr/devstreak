import { useState } from 'react'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    { q: 'Does it track private repos?', a: 'Yes.' },
    { q: 'Does it post anything?', a: 'Never.' },
    { q: 'Can I choose reminder time?', a: 'Yes.' },
    { q: 'Can I skip weekends?', a: 'Absolutely.' },
    { q: 'Is GitHub required?', a: 'Yes.' },
  ]

  return (
    <section className="bg-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-text sm:mb-14 sm:text-4xl">
          FAQ
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-white/10 bg-panel"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-text sm:px-6"
              >
                <span>{item.q}</span>
                <span className="text-muted">{open === i ? '\u2212' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-muted sm:px-6">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
