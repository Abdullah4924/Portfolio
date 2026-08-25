export default function Contact({ data }) {
  const c = data.contact
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head reveal in">
          <div className="eyebrow">Open connection</div>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="terminal reveal in">
          <div className="terminal-bar"><span></span><span></span><span></span></div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span> <span>whoami</span> <span>{data.name} — {data.role}</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span> <span>cat location.txt</span>
              <span>{data.location}{data.timezone ? ' · ' + data.timezone : ''}</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span> <span>echo $STATUS</span> <span>{data.availability}</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span> <span>mail --to</span>
              <span><a href={'mailto:' + c.email}>{c.email}</a></span>
            </div>
            {c.github && (
              <div className="terminal-line">
                <span className="prompt">$</span> <span>open github</span>
                <span><a href={c.github} target="_blank" rel="noopener noreferrer">{c.github.replace('https://', '')}</a></span>
              </div>
            )}
            {c.linkedin && (
              <div className="terminal-line">
                <span className="prompt">$</span> <span>open linkedin</span>
                <span><a href={c.linkedin} target="_blank" rel="noopener noreferrer">{c.linkedin.replace('https://', '')}</a></span>
              </div>
            )}
            {c.resume && c.resume !== '#' && (
              <div className="terminal-line">
                <span className="prompt">$</span> <span>curl -O resume.pdf</span>
                <span><a href={c.resume} target="_blank" rel="noopener noreferrer">download</a></span>
              </div>
            )}
          </div>
        </div>
        <p className="contact-note">Response time: usually within 1–2 business days.</p>
      </div>
    </section>
  )
}
