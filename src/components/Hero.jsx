export default function Hero({ data }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">System status — operational</div>
          <h1>{data.name}</h1>
          <div className="role">{data.role}</div>
          <p className="lead">{data.tagline}</p>
          <div className="status-strip">
            {data.status.map((s) => (
              <span className="chip" key={s.label}>
                {s.label}: <b>{s.value}</b>
              </span>
            ))}
          </div>
          <div className="cta-row">
            <a href="#history" className="btn btn-primary">View deploy history →</a>
            <a href="#contact" className="btn btn-ghost">Establish connection</a>
          </div>
        </div>
        <div>
          <svg
            className="topo"
            viewBox="0 0 420 340"
            role="img"
            aria-label="Animated diagram of a distributed cloud network centered on the engineer"
          >
            <line className="topo-link" x1="210" y1="170" x2="70" y2="70" />
            <line className="topo-link" x1="210" y1="170" x2="350" y2="60" />
            <line className="topo-link" x1="210" y1="170" x2="60" y2="230" />
            <line className="topo-link" x1="210" y1="170" x2="360" y2="250" />
            <line className="topo-link" x1="210" y1="170" x2="210" y2="300" />
            <line className="topo-pulse" x1="210" y1="170" x2="70" y2="70" />
            <line className="topo-pulse" x1="210" y1="170" x2="350" y2="60" />
            <line className="topo-pulse" x1="210" y1="170" x2="60" y2="230" />
            <line className="topo-pulse" x1="210" y1="170" x2="360" y2="250" />
            <line className="topo-pulse" x1="210" y1="170" x2="210" y2="300" />
            <circle className="topo-node core" cx="210" cy="170" r="30" />
            <circle className="topo-ping" cx="210" cy="170" r="4" />
            <text className="topo-label core" x="210" y="174" textAnchor="middle">YOU</text>
            <circle className="topo-node" cx="70" cy="70" r="20" />
            <text className="topo-label" x="70" y="74" textAnchor="middle">us-east</text>
            <circle className="topo-node" cx="350" cy="60" r="20" />
            <text className="topo-label" x="350" y="64" textAnchor="middle">eu-west</text>
            <circle className="topo-node" cx="60" cy="230" r="20" />
            <text className="topo-label" x="60" y="234" textAnchor="middle">ap-south</text>
            <circle className="topo-node" cx="360" cy="250" r="20" />
            <text className="topo-label" x="360" y="254" textAnchor="middle">sa-east</text>
            <circle className="topo-node" cx="210" cy="300" r="20" />
            <text className="topo-label" x="210" y="304" textAnchor="middle">edge</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
