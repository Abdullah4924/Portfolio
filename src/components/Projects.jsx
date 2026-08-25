import useReveal from '../useReveal.js'

function ProjCard({ p }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={'proj-card reveal' + (inView ? ' in' : '')}>
      <div className="proj-top">
        <div className="proj-name">{p.name}</div>
        {p.link && p.link !== '#' && (
          <a className="proj-link" href={p.link} target="_blank" rel="noopener noreferrer">view →</a>
        )}
      </div>
      <div className="proj-desc">{p.description}</div>
      {p.metrics && p.metrics.length > 0 && (
        <div className="proj-metrics">
          {p.metrics.map((m) => (
            <div className="proj-metric" key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="stack-row">
        {(p.stack || []).map((s) => <span className="stack-chip" key={s}>{s}</span>)}
      </div>
    </div>
  )
}

export default function Projects({ data }) {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal in">
          <div className="eyebrow">Running in production</div>
          <h2 className="section-title">Deployed systems</h2>
        </div>
        <div className="proj-grid">
          {data.projects.map((p, i) => <ProjCard p={p} key={i} />)}
        </div>
      </div>
    </section>
  )
}
