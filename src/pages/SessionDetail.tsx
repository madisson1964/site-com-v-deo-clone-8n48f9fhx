/* Session Detail Page - A placeholder for the session player view */
import { ArrowLeft, Play, Pause, Clock } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function SessionDetail() {
  const { id } = useParams()

  // Mock data derivation
  const title = id
    ? id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : 'Session'

  return (
    <div className="flex flex-col h-full w-full bg-zinc-950 relative animate-fade-in">
      {/* Background with grain */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      {/* Header */}
      <header className="p-6 md:p-8 flex justify-between items-center z-10">
        <Link
          to="/"
          className="text-ink-70 hover:text-ink transition-colors flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <span className="text-ink-35 text-xs uppercase tracking-widest">
          Playing
        </span>
      </header>

      {/* Main Player Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 text-center">
        <div className="w-24 h-24 rounded-full border border-ink-35 flex items-center justify-center mb-8 bg-white/5 backdrop-blur-md">
          <Play className="h-8 w-8 text-ink ml-1 fill-ink" />
        </div>

        <h1 className="text-ink text-3xl font-medium mb-4">{title}</h1>
        <p className="text-ink-70 max-w-md mb-8">
          Take a moment to center yourself before beginning this session. Focus
          on your breathing and let go of distractions.
        </p>

        <div className="flex items-center gap-4 text-ink-55 text-sm">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> 15:00
          </span>
          <span>•</span>
          <span>Guided Audio</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="p-8 border-t border-white/10 z-10 bg-black/40 backdrop-blur-sm">
        <div className="w-full h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
          <div className="w-1/3 h-full bg-nova-accent rounded-full" />
        </div>
        <div className="flex justify-between items-center px-4">
          <span className="text-xs text-ink-55">05:00</span>
          <div className="flex gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="text-ink hover:text-white rounded-full"
            >
              <Pause className="h-5 w-5 fill-current" />
            </Button>
          </div>
          <span className="text-xs text-ink-55">15:00</span>
        </div>
      </div>
    </div>
  )
}
