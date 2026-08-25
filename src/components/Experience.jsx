import useReveal from '../useReveal.js'

function TlItem({ job }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={'tl-item reveal' + (inView ? ' in' : '')}>
      <div className="tl-dot"></div>
      <div className="tl-head">
        <span className="tl-tag">{job.version}</span>
        <span className="tl-role">{job.role}</span>
        <span className="tl-company">@ {job.company}</span>
        <span className="tl-date">{job.date}</span>
      </div>
      <div className="tl-desc">
        {job.description}
        {job.bullets && job.bullets.length > 0 && (
          <ul>
            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
      </div>
      <div className="stack-row">
        {(job.stack || []).map((s) => <span className="stack-chip" key={s}>{s}</span>)}
      </div>
    </div>
  )
}

export default function Experience({ data }) {
  return (
    <section id="history">
      <div className="wrap">
        <div className="section-head reveal in">
          <div className="eyebrow">Changelog</div>
          <h2 className="section-title">Deploy history</h2>
          <p className="section-sub">Career experience, read top to bottom like a release log.</p>
        </div>
        <div className="timeline">
          {data.experience.map((job, i) => <TlItem job={job} key={i} />)}
        </div>
      </div>
    </section>
  )
}
