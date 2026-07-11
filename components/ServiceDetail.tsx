import Link from 'next/link'

type ServiceDetailProps = {
  eyebrow: string
  title: string
  intro: string
  setupPrice: string
  monthlyPrice: string
  outcomes: string[]
  includes: string[]
  integrations: string[]
  process: string[]
  limits: string[]
  cta: string
}

export default function ServiceDetail({
  eyebrow,
  title,
  intro,
  setupPrice,
  monthlyPrice,
  outcomes,
  includes,
  integrations,
  process,
  limits,
  cta,
}: ServiceDetailProps) {
  return (
    <main className="service-page">
      <header className="service-page-header">
        <Link className="brand" href="/"><span className="brand-mark">N</span><span>NexusAI</span></Link>
        <Link className="nav-cta" href="/#contact">Request an automation audit</Link>
      </header>

      <section className="section service-page-hero">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="service-page-actions">
            <Link className="button button-primary" href="/#contact">{cta}</Link>
            <Link className="button button-secondary" href="/#pricing">Compare pricing</Link>
          </div>
        </div>
        <aside className="service-price-panel">
          <span>Starting investment</span>
          <strong>{setupPrice}</strong>
          <b>{monthlyPrice}</b>
          <small>Final scope depends on volume, integrations, operating rules and exception handling.</small>
        </aside>
      </section>

      <section className="section detail-grid">
        <article>
          <p className="eyebrow">Business outcomes</p>
          <h2>What this system is designed to achieve</h2>
          <ul className="detail-list">{outcomes.map(item => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <p className="eyebrow">Included</p>
          <h2>What we build and configure</h2>
          <ul className="detail-list">{includes.map(item => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      <section className="section detail-band">
        <div>
          <p className="eyebrow">Connections</p>
          <h2>Built around the tools you already use</h2>
        </div>
        <div className="integration-tags">{integrations.map(item => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="section detail-grid">
        <article>
          <p className="eyebrow">Delivery</p>
          <h2>How implementation works</h2>
          <ol className="numbered-list">{process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol>
        </article>
        <article>
          <p className="eyebrow">Operating boundaries</p>
          <h2>Where humans remain in control</h2>
          <ul className="detail-list">{limits.map(item => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      <section className="section service-bottom-cta">
        <div><p className="eyebrow">Next step</p><h2>Map the workflow before paying for a build.</h2><p>We identify the exact calls, messages or tasks to automate, required integrations, failure cases and success metric.</p></div>
        <Link className="button button-primary" href="/#contact">Request an automation audit</Link>
      </section>
    </main>
  )
}
