import useReveal from '../useReveal.js'

export default function About({ data }) {
  const [ref, inView] = useReveal()

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal in">
          <div className="eyebrow">Service description</div>
          <h2 className="section-title">About</h2>
        </div>
        <div ref={ref} className={'about-grid reveal' + (inView ? ' in' : '')}>
          <div className="about-body">
            {data.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="stat-grid">
            {data.stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-num">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
