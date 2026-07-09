import { Zap, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const links = {
    Services: ['AI Strategy', 'AI Agents', 'Chatbot Development', 'Data Analytics', 'LLM Integration', 'AI Training'],
    Company: ['About Us', 'Our Process', 'Case Studies', 'Pricing', 'Blog'],
    Resources: ['AI Readiness Guide', 'ROI Calculator', 'Free Consultation', 'FAQ', 'Privacy Policy'],
  }
  return (
    <footer className="border-t border-white/5 bg-surface/30 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-DEFAULT flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl text-white">NexusAI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">Intelligent AI solutions for modern UK businesses. From strategy to deployment in 6 weeks.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-blue-DEFAULT" />
                hello@nexusai.co.uk
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-DEFAULT" />
                London, United Kingdom
              </div>
            </div>
          </div>
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <div className="font-semibold text-white text-sm mb-4">{cat}</div>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">© 2025 NexusAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}