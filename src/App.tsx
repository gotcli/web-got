import { useEffect, useState } from 'react'
import CommunityPage from './pages/CommunityPage'
import ChangelogPage from './pages/ChangelogPage'
import DocsPage from './pages/DocsPage'
import Home from './pages/Home'
import RoadmapPage from './pages/RoadmapPage'

function getRoute(pathname = window.location.pathname) {
  const path = pathname.replace(/\/$/, '') || '/'

  if (path === '/docs') return '/docs/getting-started'
  if (path === '/docs/getting-started' || path === '/docs/commands' || path === '/docs/architecture') return path
  if (path === '/community') return '/community'
  if (path === '/roadmap') return '/roadmap'
  if (path === '/changelog') return '/changelog'

  return '/'
}

export default function App() {
  const [path, setPath] = useState(getRoute())

  useEffect(() => {
    const handlePopState = () => setPath(getRoute())

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a')
      if (!(anchor instanceof HTMLAnchorElement)) {
        return
      }

      const href = anchor.getAttribute('href') ?? ''
      const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')

      if (isExternal || href === '#' || anchor.getAttribute('target') === '_blank') {
        return
      }

      if (href.startsWith('/')) {
        event.preventDefault()
        window.history.pushState({}, '', href)
        setPath(getRoute(href))
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  if (path === '/community') return <CommunityPage />
  if (path === '/roadmap') return <RoadmapPage />
  if (path === '/changelog') return <ChangelogPage />
  if (path.startsWith('/docs')) return <DocsPage path={path} />

  return <Home />
}
