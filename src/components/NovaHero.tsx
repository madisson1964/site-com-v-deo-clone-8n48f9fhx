/* Nova Hero Section - Implements the top 62% of the dashboard with misty gradients and grain */
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function NovaHero() {
  return (
    <section className="relative h-[62%] w-full overflow-hidden shrink-0 bg-[#0c0d0e]">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 75% 15%, var(--mist-1) 0%, transparent 50%),
              radial-gradient(circle at 55% 40%, var(--mist-2) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, var(--mist-3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Grain Overlay - Opacity .12 and mix-blend-overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay animate-grain-flicker pointer-events-none" />

      {/* Vignette - Bottom-to-top gradient (45% height) */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[rgba(0,0,0,0.88)] to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top Navigation */}
        <header className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3 animate-slide-in-bottom">
            <Avatar className="h-7 w-7 border border-ink-35">
              <AvatarImage
                src="https://img.usecurling.com/ppl/thumbnail?gender=male"
                alt="User"
              />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            <span className="text-ink font-medium text-[13px] tracking-wide">
              Good morning, Driver
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border border-ink-35 bg-transparent hover:bg-white/10 text-ink animate-slide-in-bottom delay-100 p-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </header>

        {/* Primary Call to Action */}
        <div className="flex flex-col gap-6 mb-4 animate-slide-in-bottom delay-200">
          <div>
            <span className="text-[11px] leading-[16px] tracking-[0.12em] text-ink uppercase block mb-2">
              Today
            </span>
            <h1 className="text-ink text-[44px] leading-[1.1] tracking-[-0.5px] font-semibold">
              Find your flow
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/session/intro"
              className="group flex items-center justify-center w-[56px] h-[56px] rounded-full border border-[rgba(255,255,255,0.55)] bg-transparent hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            </Link>

            <div className="flex flex-col justify-center h-full">
              <Link
                to="/session/intro"
                className="text-[16px] text-ink font-medium leading-[22px] hover:brightness-110 transition-all inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-nova-accent after:translate-y-[4px]"
              >
                Intro Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
