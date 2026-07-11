import type { Metadata } from 'next'
import './globals.css'
import './additions.css'

export const metadata: Metadata = {
  title: 'NexusAI — AI systems that answer, qualify and automate',
  description: 'Practical AI phone receptionists, lead-response agents and workflow automations for service businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
