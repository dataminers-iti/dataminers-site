// Motion policy (house: 120 ms hover/press, 180 ms panel, 240 ms layout).
// Seconds, for `motion`. CSS transitions use Tailwind `duration-*` with the same values.
export const dur = {
  hover: 0.12,
  panel: 0.18,
  layout: 0.24,
} as const

export const easeOut = [0.16, 1, 0.3, 1] as const

// Stagger between reveal steps (terminal lines).
export const step = 0.14
