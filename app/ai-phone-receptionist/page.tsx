import type { Metadata } from 'next'
import ServiceDetail from '../../components/ServiceDetail'

export const metadata: Metadata = {
  title: 'AI Phone Receptionist | NexusAI',
  description: 'AI phone reception for service businesses: answer calls, qualify enquiries, book appointments and escalate to staff.',
}

export default function PhoneReceptionistPage() {
  return <ServiceDetail
    eyebrow="AI phone receptionist"
    title="Answer every call. Qualify the enquiry. Book the next step."
    intro="A managed voice system that answers inbound calls in your business tone, handles approved questions, collects the right details, books appointments and transfers sensitive or urgent calls to a person."
    setupPrice="From £2,500 setup"
    monthlyPrice="From £495/month"
    outcomes={[
      'Reduce missed calls during busy periods and outside normal hours.',
      'Capture caller details before the lead disappears.',
      'Book suitable appointments directly into an approved calendar.',
      'Give staff a transcript, summary and clear next action.',
    ]}
    includes={[
      'Call-flow design and approved conversation scripts.',
      'Business knowledge, FAQ and service configuration.',
      'Lead qualification, booking and transfer rules.',
      'Call summaries, transcripts and notifications.',
      'Testing, launch monitoring and ongoing optimisation.',
    ]}
    integrations={['Twilio', 'ElevenLabs', 'Google Calendar', 'Microsoft 365', 'HubSpot', 'Salesforce', 'Email', 'Webhooks']}
    process={[
      'Map call types, questions, urgency rules and human handover.',
      'Build and test the voice experience with realistic caller scenarios.',
      'Connect the phone number, calendar, CRM and notification flow.',
      'Launch with monitoring, review failures and improve edge cases.',
    ]}
    limits={[
      'The agent does not provide medical, legal or financial advice.',
      'Uncertain, sensitive or exceptional calls are escalated.',
      'The client approves scripts, knowledge and booking rules before launch.',
      'Usage beyond the agreed monthly allowance is billed separately.',
    ]}
    cta="Map my call flow"
  />
}
