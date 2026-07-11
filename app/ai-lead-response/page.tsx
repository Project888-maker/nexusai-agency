import type { Metadata } from 'next'
import ServiceDetail from '../../components/ServiceDetail'

export const metadata: Metadata = {
  title: 'AI Lead Response Agent | NexusAI',
  description: 'AI lead-response automation for website chat, WhatsApp, SMS and email enquiries.',
}

export default function LeadResponsePage() {
  return <ServiceDetail
    eyebrow="AI lead response agent"
    title="Reply while the customer is still ready to buy."
    intro="A managed response system for website chat, WhatsApp, SMS and email that answers approved questions, qualifies intent, routes the lead and moves suitable prospects to booking or human follow-up."
    setupPrice="From £1,500 setup"
    monthlyPrice="From £349/month"
    outcomes={[
      'Respond consistently across the channels customers actually use.',
      'Collect contact details, service requirements and buying intent.',
      'Move qualified leads directly to booking, quotation or staff follow-up.',
      'Reduce manual chasing with controlled follow-up sequences.',
    ]}
    includes={[
      'Conversation design and qualification logic.',
      'Approved service, location and pricing knowledge.',
      'Lead routing, booking and human takeover rules.',
      'Conversation summaries and CRM updates.',
      'Testing, reporting and ongoing optimisation.',
    ]}
    integrations={['Website chat', 'WhatsApp', 'SMS', 'Email', 'HubSpot', 'Salesforce', 'Google Calendar', 'Webhooks']}
    process={[
      'Map enquiry sources, qualification questions and desired next actions.',
      'Build and test channel-specific conversations and fallback behaviour.',
      'Connect booking, CRM, notification and handover workflows.',
      'Launch, review conversion data and improve weak conversation points.',
    ]}
    limits={[
      'The agent uses only client-approved information and offers.',
      'Complex complaints, negotiations and sensitive requests go to staff.',
      'Channel availability depends on the client account and API permissions.',
      'Usage beyond the agreed allowance is billed separately.',
    ]}
    cta="Map my enquiry flow"
  />
}
