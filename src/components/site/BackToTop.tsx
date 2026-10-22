import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { nav } from '@/content/es'
import { cn } from '@/lib/cn'

/** Appears after the first screen (house: every long page has one). */
export function BackToTop() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label={nav.backToTop}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      className={cn(
        'fixed right-4 bottom-4 z-30 inline-flex size-11 items-center justify-center rounded-sm border-2 border-ink bg-surface text-ink shadow-block',
        'transition-opacity duration-180 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none',
        shown ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp aria-hidden className="size-5" />
    </a>
  )
}
