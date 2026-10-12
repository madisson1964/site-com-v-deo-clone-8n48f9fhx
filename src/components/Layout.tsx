/* Layout Component - Wraps the Nova application in a full-screen view */
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="h-screen w-full bg-[#0c0d0e] animate-fade-in font-sans overflow-hidden">
      <main className="w-full h-full relative flex flex-col">
        <Outlet />
      </main>
    </div>
  )
}
