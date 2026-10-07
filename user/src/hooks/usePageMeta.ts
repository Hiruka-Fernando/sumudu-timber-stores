import { useEffect } from 'react'

type PageMeta = {
  title: string
  description?: string
  keywords?: string
}

// Sets <meta name="..."> and returns a function that restores the previous value.
function applyMeta(name: string, content: string) {
  const existing = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  const el = existing ?? document.createElement('meta')
  if (!existing) {
    el.name = name
    document.head.appendChild(el)
  }
  const previous = el.content
  el.content = content

  return () => {
    if (existing) el.content = previous
    else el.remove()
  }
}

// Per-page <title>, description and keywords (the original site had these on every page).
export function usePageMeta({ title, description, keywords }: PageMeta) {
  useEffect(() => {
    document.title = title
    const restore: Array<() => void> = []
    if (description) restore.push(applyMeta('description', description))
    if (keywords) restore.push(applyMeta('keywords', keywords))
    return () => restore.forEach((fn) => fn())
  }, [title, description, keywords])
}
