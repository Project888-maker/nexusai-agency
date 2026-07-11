'use client'

import { FormEvent, useMemo, useState } from 'react'

const links = [
  ['Systems', '#systems'],
  ['How it works', '#workflow'],
  ['ROI', '#roi'],
  ['Delivery', '#delivery'],
] as const

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="NexusAI home"><span className="brand-mark">N</span><span>NexusAI</span></a>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Request an automation audit</a>
      </nav>
      <button className="menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(v => !v)}><span /><span /></button>
    </header>
  )
}

const activity = [
  ['09:14:02', 'Inbound call answered', 'Dental clinic'],
  ['09:14:18', 'Intent detected', 'New patient enquiry'],
  ['09:14:41', 'Appointment booked', 'Tuesday · 10:30'],
  ['09:14:44', 'CRM updated', 'Lead assigned to Sarah'],
]

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI automation for service businesses</p>
        <h1>Every call answered.<br />Every lead followed up.<br /><span>Every repetitive task removed.</span></h1>
        <p className="hero-subtitle">We design and deploy practical AI systems that answer customers, qualify enquiries, book appointments and move work through your existing tools.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">Map my first automation</a><a className="button button-secondary" href="#systems">See the systems</a></div>
        <div className="hero-proof"><span>No fake case studies</span><span>No vague “AI transformation”</span><span>Scope, build and handover</span></div>
      </div>
      <div className="hero-visual" aria-label="AI automation activity demonstration">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="https://v3b.fal.media/files/b/0aa19e0f/uNEzBvdVKMPokebHDc5xk_image.png"><source src="https://v3b.fal.media/files/b/0aa19e1e/XowFD21bDGkiKxdKOi0di_video.mp4" type="video/mp4" /></video>
        <div className="hero-video-shade" />
        <div className="ops-panel">
          <div className="ops-header"><span className="status-dot" /><span>Automation live</span><span className="ops-time">09:14</span></div>
          <div className="ops-list">{activity.map(([time, event, detail], index) => <div className="ops-row" key={event} style={{ '--delay': `${index * 1.2}s` } as React.CSSProperties}><span className="ops-stamp">{time}</span><span><strong>{event}</strong><small>{detail}</small></span></div>)}</div>
          <div className="ops-footer"><span>Human escalation available</span><span>Audit trail recorded</span></div>
        </div>
      </div>
    </section>
  )
}

const problems = [
  ['Missed calls', 'Lost before your team can respond'],
  ['Slow replies', 'Competitors answer first'],
  ['Manual admin', 'Staff copy the same data repeatedly'],
  ['Disconnected tools', 'Information falls between systems'],
]

function ProblemStrip() {
  return <section className="problem-strip" aria-label="Business problems NexusAI solves">{problems.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}</section>
}

const phoneTranscript = [
  ['AI', 'Good afternoon, Hartwell Dental. How can I help?'],
  ['Caller', 'I need an emergency appointment tomorrow.'],
  ['AI', 'I can help with that. Are you experiencing swelling or severe pain?'],
  ['System', 'Priority slot found · 10:30'],
]
const messageThreads = [
  ['WhatsApp', 'Can you quote for a boiler service?', 'Now'],
  ['Website', 'Do you cover St Albans?', '12 sec'],
  ['Instagram', 'Can I book for Saturday?', '24 sec'],
]
const workflowSteps = [['01', 'Form received'], ['02', 'Details extracted'], ['03', 'CRM updated'], ['04', 'Quote drafted'], ['05', 'Team notified']]

function Services() {
  return (
    <section className="section services" id="systems">
      <div className="section-heading"><p className="eyebrow">Three systems. Clear business outcomes.</p><h2>We do not sell “AI”. We install working infrastructure.</h2><p>Each system is designed around one measurable bottleneck and connected to the tools your team already uses.</p></div>
      <article className="service-feature">
        <div className="service-copy"><span className="service-number">01</span><p className="service-kicker">AI phone receptionist</p><h3>Answer every call without turning your business into a call centre.</h3><p>A natural voice agent answers FAQs, qualifies the caller, checks availability, books appointments and escalates urgent cases to a person.</p><ul className="feature-list"><li>Inbound and missed-call recovery</li><li>Calendar and CRM integration</li><li>Transcripts, summaries and handover</li></ul></div>
        <div className="demo-window phone-demo"><div className="demo-toolbar"><span /><span /><span /><b>Live call · 01:18</b></div><div className="caller-card"><span>H</span><div><strong>Hartwell Dental</strong><small>AI receptionist connected</small></div><i /></div><div className="transcript">{phoneTranscript.map(([speaker, text]) => <div key={text} className={`transcript-line speaker-${speaker.toLowerCase()}`}><b>{speaker}</b><p>{text}</p></div>)}</div><div className="demo-result"><span>Appointment booked</span><strong>Tuesday · 10:30</strong></div></div>
      </article>
      <article className="service-feature service-message">
        <div className="demo-window inbox-demo"><div className="demo-toolbar"><span /><span /><span /><b>Unified inbox</b></div><div className="inbox-layout"><div className="inbox-sidebar">{messageThreads.map(([channel, message, speed], index) => <div className={index === 0 ? 'thread active-thread' : 'thread'} key={channel}><span>{channel.slice(0, 1)}</span><div><strong>{channel}</strong><small>{message}</small></div><em>{speed}</em></div>)}</div><div className="chat-panel"><div className="chat-bubble incoming">Can you quote for a boiler service?</div><div className="chat-bubble outgoing">Yes. I need your postcode and boiler model, then I can give you the correct price and available times.</div><div className="qualification-row"><span>Qualified</span><span>Quote requested</span><span>High intent</span></div></div></div></div>
        <div className="service-copy"><span className="service-number">02</span><p className="service-kicker">AI lead response agent</p><h3>Reply while the customer is still ready to buy.</h3><p>One agent handles website chat, WhatsApp, SMS and social enquiries, asks the right questions and moves qualified leads to the next step.</p><ul className="feature-list"><li>Consistent replies across every channel</li><li>Lead qualification and routing</li><li>Follow-up sequences without manual chasing</li></ul></div>
      </article>
      <article className="service-feature">
        <div className="service-copy"><span className="service-number">03</span><p className="service-kicker">Workflow automation</p><h3>Stop paying skilled people to move information between systems.</h3><p>We connect forms, email, documents, CRMs and internal tools so routine work moves automatically—with approvals and human checks where they matter.</p><ul className="feature-list"><li>Document and data extraction</li><li>CRM, quoting and task automation</li><li>Error handling and full audit trail</li></ul></div>
        <div className="demo-window workflow-demo"><div className="demo-toolbar"><span /><span /><span /><b>New enquiry workflow</b></div><div className="workflow-stack">{workflowSteps.map(([number, label], index) => <div className="workflow-step" key={number} style={{ '--step': index } as React.CSSProperties}><span>{number}</span><strong>{label}</strong><i>Complete</i></div>)}</div><div className="workflow-summary"><span>Completed without manual entry</span><strong>00:42</strong></div></div>
      </article>
    </section>
  )
}

const stages = [
  ['Listen', 'Calls, forms, messages or documents enter the system.'],
  ['Understand', 'The agent identifies intent, extracts information and checks rules.'],
  ['Act', 'It books, updates, routes, drafts or triggers the correct next step.'],
  ['Escalate', 'Anything uncertain, sensitive or exceptional goes to a person.'],
  ['Measure', 'Every action is logged so performance can be reviewed and improved.'],
]
function Workflow() {
  return <section className="section workflow-section" id="workflow"><div className="workflow-intro"><p className="eyebrow">How a reliable automation behaves</p><h2>Fast where it can be. Human where it should be.</h2><p>Good automation is not an unsupervised chatbot. It is a controlled operating flow with rules, permissions, escalation paths and a measurable result.</p></div><div className="workflow-map">{stages.map(([title, description], index) => <div className="workflow-map-item" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{description}</p></div></div>)}</div></section>
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)
function RoiCalculator() {
  const [enquiries, setEnquiries] = useState(120)
  const [missed, setMissed] = useState(25)
  const [value, setValue] = useState(350)
  const estimate = useMemo(() => { const missedLeads = enquiries * (missed / 100); return { missedLeads, monthly: missedLeads * value, annual: missedLeads * value * 12 } }, [enquiries, missed, value])
  return <section className="section roi-section" id="roi"><div className="roi-copy"><p className="eyebrow">Use your own numbers</p><h2>What does slow response already cost you?</h2><p>This is a simple opportunity estimate—not a promise. Adjust the assumptions to see whether automation is commercially worth investigating.</p></div><div className="calculator-card"><label><span>Monthly enquiries <b>{enquiries}</b></span><input type="range" min="10" max="1000" step="10" value={enquiries} onChange={e => setEnquiries(Number(e.target.value))} /></label><label><span>Missed or poorly followed-up <b>{missed}%</b></span><input type="range" min="5" max="70" step="5" value={missed} onChange={e => setMissed(Number(e.target.value))} /></label><label><span>Average customer value <b>{formatCurrency(value)}</b></span><input type="range" min="50" max="5000" step="50" value={value} onChange={e => setValue(Number(e.target.value))} /></label><div className="calculator-result"><div><span>Potentially exposed each month</span><strong>{formatCurrency(estimate.monthly)}</strong></div><div><span>Annualised opportunity</span><strong>{formatCurrency(estimate.annual)}</strong></div><small>Based on approximately {Math.round(estimate.missedLeads)} missed or under-served enquiries per month.</small></div></div></section>
}

const deliverySteps = [
  ['01', 'Map', 'We document one workflow, the current cost and the success condition.'],
  ['02', 'Prototype', 'You test the conversation or automation before full integration.'],
  ['03', 'Connect', 'We integrate the approved flow with your phone, calendar, CRM or internal tools.'],
  ['04', 'Launch', 'We monitor real usage, fix edge cases and hand over the operating playbook.'],
]
function Delivery() {
  return <section className="section delivery" id="delivery"><div className="section-heading align-left"><p className="eyebrow">A controlled delivery process</p><h2>Start with one bottleneck. Prove it. Then expand.</h2><p>Large “AI transformation” projects are usually wasteful. We begin with one workflow that can be measured and shipped.</p></div><div className="delivery-grid">{deliverySteps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="delivery-note"><strong>What we will not do</strong><p>Invent fake case studies, promise impossible accuracy, or automate decisions that should remain with a qualified person.</p></div></section>
}

function LeadForm() {
  const [status, setStatus] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? ''), company = String(form.get('company') ?? ''), email = String(form.get('email') ?? ''), problem = String(form.get('problem') ?? '')
    if (!name || !email || !problem) { setStatus('Please complete your name, email and workflow problem.'); return }
    const subject = encodeURIComponent(`Automation audit request — ${company || name}`)
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nWorkflow to automate:\n${problem}`)
    window.location.href = `mailto:hello@nexusai.co.uk?subject=${subject}&body=${body}`
    setStatus('Your email application is opening with the project brief pre-filled.')
  }
  return <section className="section contact-section" id="contact"><div className="contact-copy"><p className="eyebrow">Request an automation audit</p><h2>Describe the repetitive work. We will tell you whether it is worth automating.</h2><p>No invented ROI and no pressure to buy. We first identify the workflow, required integrations, failure risks and the commercial case.</p><div className="contact-details"><span>London, United Kingdom</span><a href="mailto:hello@nexusai.co.uk">hello@nexusai.co.uk</a></div></div><form className="lead-form" onSubmit={submit}><div className="form-row"><label><span>Your name</span><input name="name" autoComplete="name" required /></label><label><span>Company</span><input name="company" autoComplete="organization" /></label></div><label><span>Work email</span><input name="email" type="email" autoComplete="email" required /></label><label><span>What workflow is wasting time or losing revenue?</span><textarea name="problem" rows={5} required /></label><button className="button button-primary form-button" type="submit">Send the workflow brief</button><p className="form-status" aria-live="polite">{status || 'The form opens a pre-filled email. No information is stored on this website.'}</p></form></section>
}

function Footer() {
  return <footer className="footer"><div className="brand footer-brand"><span className="brand-mark">N</span><span>NexusAI</span></div><p>Practical AI systems for calls, customer enquiries and operational workflows.</p><div className="footer-links"><a href="#systems">Systems</a><a href="#workflow">How it works</a><a href="#roi">ROI</a><a href="#contact">Contact</a></div><small>© {new Date().getFullYear()} NexusAI. Claims and case studies are published only when they can be verified.</small></footer>
}

export default function Site() {
  return <><Header /><Hero /><ProblemStrip /><Services /><Workflow /><RoiCalculator /><Delivery /><LeadForm /><Footer /></>
}
