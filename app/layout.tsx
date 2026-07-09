import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexusAI — AI Consulting Agency UK',
  description: 'NexusAI delivers end-to-end AI solutions for UK businesses. Strategy, automation, chatbots, and custom AI agents. Results in 6 weeks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}