import { useState } from 'react'

export default function Nav({ name }) {
  const [open, setOpen] = useState(false)
  const slug = '~/' + name.toLowerCase().replace(/\s+/g, '-')

  const links = [
    ['#about', 'About'],
    ['#infra', 'Skills'],
    ['#certs', 'Certifications'],
    ['#history', 'Experience'],
    ['#projects', 'Projects'],
    ['#contact', 'Contact']
  ]

  return (
    <header className="nav">
      <div className="wrap nav-row">
        <a href="#top" className="brand">
          <span className="dot"></span>
          <span>{slug}</span>
        </a>
        <ul className={'nav-links' + (open ? ' open' : '')}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
