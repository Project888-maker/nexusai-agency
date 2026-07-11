import type { Metadata } from 'next'
import ServiceDetail from '../../components/ServiceDetail'

export const metadata: Metadata = {
  title: 'Workflow Automation | NexusAI',
  description: 'Custom workflow automation for forms, email, documents, CRM, quoting, tasks and approvals.',
}

export default function WorkflowAutomationPage() {
  return <ServiceDetail
    eyebrow="Workflow automation"
    title="Move routine work between systems without manual copying."
    intro="A custom automation that connects the forms, inboxes, documents, CRM records, quoting tools and internal notifications behind one measurable business process."
    setupPrice="Projects from £3,000"
    monthlyPrice="Support priced separately"
    outcomes={[
      'Remove repetitive data entry from skilled staff.',
      'Reduce delays between enquiry, quotation, approval and delivery.',
      'Create a consistent process with clear ownership and audit history.',
      'Escalate exceptions instead of silently failing.',
    ]}
    includes={[
      'Current-state workflow and exception mapping.',
      'Automation architecture and integration build.',
      'Data extraction, transformation and validation rules.',
      'Approvals, alerts, retry logic and audit records.',
      'Testing, documentation and operating handover.',
    ]}
    integrations={['Make', 'n8n', 'Zapier', 'HubSpot', 'Salesforce', 'Google Workspace', 'Microsoft 365', 'APIs and webhooks']}
    process={[
      'Document the current workflow, workload, errors and success condition.',
      'Prototype the highest-risk steps before full implementation.',
      'Connect systems, permissions, approvals and exception handling.',
      'Test with real cases, launch gradually and monitor reliability.',
    ]}
    limits={[
      'Final price depends on systems, data quality and exception complexity.',
      'High-impact decisions remain behind human approval where appropriate.',
      'Third-party subscriptions and usage charges are separate.',
      'New workflows and major integration changes are scoped separately.',
    ]}
    cta="Map my workflow"
  />
}
