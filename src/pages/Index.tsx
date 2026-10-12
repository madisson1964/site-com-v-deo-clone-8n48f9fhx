/* Index Page - Main dashboard entry point combining Hero and Content sections */
import { NovaHero } from '@/components/NovaHero'
import { NovaContent } from '@/components/NovaContent'

export default function Index() {
  return (
    <div className="flex flex-col h-full w-full bg-[#0c0d0e]">
      <NovaHero />
      <NovaContent />
    </div>
  )
}
