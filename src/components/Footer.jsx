export default function Footer() {
  const links = ['Privacy', 'Terms', 'GitHub', 'Contact', 'Twitter/X']

  return (
    <footer className="border-t border-white/10 bg-bg px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="font-semibold text-text">DevStreak</div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {links.map((link, i) => (
            <a key={i} href="#" className="hover:text-primary">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
