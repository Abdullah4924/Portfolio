import useReveal from '../useReveal.js'

function CertCard({ c }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={'cert-card reveal' + (inView ? ' in' : '')}>
      <div className="cert-status">passing</div>
      <div className="cert-name">{c.name}</div>
      <div className="cert-issuer">{c.issuer}</div>
      <div className="cert-date">{c.date}</div>
    </div>
  )
}

export default function Certifications({ data }) {
  return (
    <section id="certs">
      <div className="wrap">
        <div className="section-head reveal in">
          <div className="eyebrow">Health checks</div>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="cert-grid">
          {data.certifications.map((c) => <CertCard c={c} key={c.name} />)}
        </div>
      </div>
    </section>
  )
}
