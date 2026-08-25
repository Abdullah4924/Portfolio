import useReveal from '../useReveal.js'

function Category({ cat }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={'infra-cat reveal' + (inView ? ' in' : '')}>
      <h3><span className="tag">{cat.tag} </span>{cat.category}</h3>
      {cat.items.map((item) => (
        <div className="meter" key={item.name}>
          <div className="meter-top">
            <span className="name">{item.name}</span>
            <span className="pct">{item.level}%</span>
          </div>
          <div className="meter-track">
            <div
              className="meter-fill"
              style={{ width: inView ? item.level + '%' : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills({ data }) {
  return (
    <section id="infra">
      <div className="wrap">
        <div className="section-head reveal in">
          <div className="eyebrow">Infrastructure map</div>
          <h2 className="section-title">Skills &amp; tooling</h2>
          <p className="section-sub">Grouped by domain, scored the way you'd read a utilization dashboard.</p>
        </div>
        <div className="infra-grid">
          {data.skills.map((cat) => <Category cat={cat} key={cat.category} />)}
        </div>
      </div>
    </section>
  )
}
