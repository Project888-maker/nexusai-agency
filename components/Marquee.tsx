export default function Marquee() {
  const items = ['AI Strategy', 'Process Automation', 'Custom AI Agents', 'ChatBot Development', 'Data Analytics', 'AI Integration', 'Machine Learning', 'LLM Implementation', 'AI Strategy', 'Process Automation', 'Custom AI Agents', 'ChatBot Development', 'Data Analytics', 'AI Integration', 'Machine Learning', 'LLM Implementation']
  return (
    <div className="border-y border-white/5 bg-surface/50 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-DEFAULT" />
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}