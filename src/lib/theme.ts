import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

const KEY = 'dm-theme'
const listeners = new Set<() => void>()

function read(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem(KEY, theme)
  } catch {
    // Storage blocked: the choice lasts for this page only.
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, read, () => 'light')
}
