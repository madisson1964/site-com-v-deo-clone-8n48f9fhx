/* Nova Content Section - Implements the bottom 38% content grid and footer */
import { Heart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ContentTileProps {
  title: string
  subtitle: string
  step: string
  imageQuery: string
  widthClass: string
  to: string
  hasHeart?: boolean
}

const ContentTile = ({
  title,
  subtitle,
  step,
  imageQuery,
  widthClass,
  to,
  hasHeart,
}: ContentTileProps) => (
  <Link
    to={to}
    className={cn(
      'relative h-full overflow-hidden rounded-[8px] border border-[rgba(255,255,255,0.6)] group transition-transform duration-300 hover:scale-[1.02]',
      widthClass,
    )}
  >
    <img
      src={`https://img.usecurling.com/p/800/600?q=${imageQuery}`}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300" />

    <div className="absolute top-3 right-3 z-20">
      <span className="text-[10px] font-bold text-black bg-white/90 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
        {step}
      </span>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end z-10">
      <div>
        <h3 className="text-ink font-medium text-[15px] leading-tight mb-1">
          {title}
        </h3>
        <p className="text-ink-70 text-[11px] font-medium uppercase tracking-wide">
          {subtitle}
        </p>
      </div>
      {hasHeart && (
        <Heart className="h-4 w-4 text-ink hover:text-nova-accent transition-colors fill-transparent stroke-2" />
      )}
    </div>
  </Link>
)

export function NovaContent() {
  return (
    <section className="relative h-[38%] w-full bg-[#0c0d0e] flex flex-col animate-slide-in-bottom delay-300">
      {/* Hairline Divider */}
      <div className="w-full h-[1px] bg-[rgba(255,255,255,0.26)]" />

      <div className="flex-1 p-8 flex flex-col gap-5 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-ink-55 uppercase tracking-[0.12em] font-medium">
            For You
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-ink-55 tracking-wider font-medium">
              1/3
            </span>
            <div className="flex gap-1">
              <ChevronLeft className="h-4 w-4 text-ink-35 cursor-not-allowed" />
              <ChevronRight className="h-4 w-4 text-ink cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-ink text-[18px] font-medium leading-[22px]">
            Start here: Build a gentle habit
          </h2>
          <p className="text-ink-70 text-[13px] leading-[18px]">
            Discover a calm routine to unlock focused work...
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-row gap-4 h-full w-full pb-1">
          <ContentTile
            title="Why Focus Works"
            subtitle="Intro • 5 min"
            step="1/3"
            imageQuery="forest mist"
            widthClass="w-[38%]"
            to="/session/focus-works"
            hasHeart
          />
          <ContentTile
            title="Deep Work Sprint"
            subtitle="Session • 12 min"
            step="2/3"
            imageQuery="desk dark"
            widthClass="w-[34%]"
            to="/session/deep-work"
          />
          <ContentTile
            title="Reset & Breathe"
            subtitle="Break • 4 min"
            step="3/3"
            imageQuery="water calm"
            widthClass="w-[28%]"
            to="/session/breathe"
          />
        </div>
      </div>
    </section>
  )
}
