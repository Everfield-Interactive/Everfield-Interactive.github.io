interface Token {
  name: string
  from: string
  use: string
}

interface Group {
  title: string
  tokens: Token[]
}

interface Pair {
  text: string
  ground: string
  role: string
}

const GROUPS: Group[] = [
  {
    title: 'Ink, porcelain and paper',
    tokens: [
      { name: 'ink-900', from: 'R17', use: 'Deepest ground, text on porcelain' },
      { name: 'ink-700', from: 'R14', use: 'Dark panels, menu ground' },
      { name: 'slate-500', from: 'R16', use: 'Silhouettes, secondary dark' },
      { name: 'porcelain-100', from: 'R18', use: 'Plates, text on ink' },
      { name: 'bone-200', from: 'R01', use: 'Paper ground' },
      { name: 'haze-300', from: 'R06', use: 'Fog and distance' },
    ],
  },
  {
    title: 'Gilt, cobalt and geode',
    tokens: [
      { name: 'gilt-300', from: 'R04', use: 'Gilt highlight' },
      { name: 'gilt-500', from: 'R18', use: 'Seams, rules, accents on ink' },
      { name: 'gilt-700', from: 'R04', use: 'Gilt shadow' },
      { name: 'cobalt-600', from: 'R18', use: 'Filigree, links on porcelain' },
      { name: 'cobalt-500', from: 'R23', use: 'A brighter filigree, under test' },
      { name: 'geode-700', from: 'R18', use: 'Geode depth' },
      { name: 'geode-500', from: 'R18', use: 'Geode body, active states' },
      { name: 'geode-300', from: 'R18', use: 'Glints, focus rings on ink' },
    ],
  },
  {
    title: 'The painted world',
    tokens: [
      { name: 'wheat-500', from: 'R04', use: 'Field in light' },
      { name: 'wheat-700', from: 'R04', use: 'Field in shadow' },
      { name: 'meadow-300', from: 'R05', use: 'Grass in light' },
      { name: 'meadow-500', from: 'R19', use: 'Grass mid-tone' },
      { name: 'meadow-800', from: 'R19', use: 'Grass in shadow' },
      { name: 'moss-600', from: 'R27', use: 'Moss and terrace grass' },
      { name: 'dust-500', from: 'R08', use: 'Warm dust around the monolith' },
    ],
  },
  {
    title: 'Crimson and night',
    tokens: [
      { name: 'crimson-600', from: 'R23', use: 'The mark of a secret' },
      { name: 'crimson-800', from: 'R22', use: 'Crystal shadow, seal shadow' },
      { name: 'magenta-500', from: 'R21', use: 'Crystal glow in the world' },
      { name: 'night-800', from: 'R26', use: 'Night palette, ground' },
      { name: 'night-500', from: 'R26', use: 'Night palette, mid-tone' },
      { name: 'night-200', from: 'R26', use: 'Night palette, light' },
    ],
  },
]

const PAIRS: Pair[] = [
  { text: 'ink-900', ground: 'porcelain-100', role: 'Body text on a plate' },
  { text: 'porcelain-100', ground: 'ink-900', role: 'Body text on the deepest ground' },
  { text: 'porcelain-100', ground: 'ink-700', role: 'Body text on a dark panel' },
  { text: 'gilt-500', ground: 'ink-900', role: 'Accent text on ink' },
  { text: 'gilt-300', ground: 'ink-900', role: 'Highlight text on ink' },
  { text: 'cobalt-600', ground: 'porcelain-100', role: 'Link on a plate' },
  { text: 'cobalt-500', ground: 'porcelain-100', role: 'Link on a plate, under test' },
  { text: 'crimson-600', ground: 'porcelain-100', role: 'Secret mark as text on a plate' },
  { text: 'geode-300', ground: 'ink-900', role: 'Focus ring on ink' },
  { text: 'gilt-500', ground: 'porcelain-100', role: 'Ornament only on a plate' },
  { text: 'crimson-600', ground: 'ink-900', role: 'Fill inside a gilt edge only, never text' },
]

const styles = getComputedStyle(document.documentElement)

function hexOf(token: string): string {
  return styles.getPropertyValue(`--${token}`).trim().toUpperCase()
}

function channel(value: number): number {
  const v = value / 255

  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}

function luminance(hex: string): number {
  const r = channel(parseInt(hex.slice(1, 3), 16))
  const g = channel(parseInt(hex.slice(3, 5), 16))
  const b = channel(parseInt(hex.slice(5, 7), 16))

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(a: string, b: string): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number]

  return (light + 0.05) / (dark + 0.05)
}

function element<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className: string,
  text = '',
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag)
  node.className = className
  node.textContent = text

  return node
}

function renderSwatches(host: HTMLElement): void {
  for (const group of GROUPS) {
    host.append(element('h3', 'swatch-group', group.title))

    for (const token of group.tokens) {
      const figure = element('figure', 'swatch')
      const chip = element('div', 'swatch-chip')
      chip.style.background = `var(--${token.name})`

      const caption = element('figcaption', '')
      caption.append(
        element('span', 'swatch-name', token.name),
        element('span', 'swatch-meta', `${hexOf(token.name)}, from ${token.from}`),
        element('span', 'swatch-meta', token.use),
      )

      figure.append(chip, caption)
      host.append(figure)
    }
  }
}

function renderPairs(host: HTMLElement): void {
  for (const pair of PAIRS) {
    const ratio = contrast(hexOf(pair.text), hexOf(pair.ground))
    const verdict = ratio >= 4.5 ? 'passes AA for text' : 'below 4.5, so not for text'

    const box = element('div', 'pair')
    box.style.background = `var(--${pair.ground})`
    box.style.color = `var(--${pair.text})`

    box.append(
      element('p', 'pair-sample', `${pair.text} on ${pair.ground}`),
      element('p', 'pair-meta', `${ratio.toFixed(1)} to 1, ${verdict}. ${pair.role}.`),
    )
    host.append(box)
  }
}

// An original motif drawn from the site's own world: a wheat ear and orbit lines.
function filigree(colour: string): string {
  const grains = Array.from({ length: 7 }, (_, i) => {
    const y = String(78 - i * 9)
    const reach = String(13 - i)
    const tip = String(16 - i)

    return `<path d="M60 ${y} q-${reach} -5 -${tip} -14 M60 ${y} q${reach} -5 ${tip} -14" />`
  }).join('')

  return `<svg viewBox="0 0 320 110" role="img" aria-label="Filigree test">
    <g fill="none" stroke="${colour}" stroke-width="1.2" stroke-linecap="round">
      <path d="M60 100 V16" />
      ${grains}
      <circle cx="210" cy="55" r="38" />
      <circle cx="210" cy="55" r="26" />
      <path d="M150 55 a60 60 0 0 1 120 0" stroke-dasharray="2 5" />
      <circle cx="248" cy="55" r="3" fill="${colour}" />
    </g>
  </svg>`
}

function renderCobalt(host: HTMLElement): void {
  for (const token of ['cobalt-600', 'cobalt-500']) {
    const hex = hexOf(token)
    const ratio = contrast(hex, hexOf('porcelain-100'))

    const plate = element('div', 'cobalt-plate')
    plate.innerHTML = filigree(hex)

    const link = element('p', '', 'Go to the main page')
    link.style.color = hex
    link.style.textDecoration = 'underline'

    plate.append(
      link,
      element('small', '', `${token}, ${hex}, ${ratio.toFixed(1)} to 1 on porcelain`),
    )
    host.append(plate)
  }
}

function host(id: string): HTMLElement {
  const node = document.getElementById(id)
  if (!node) throw new Error(`Missing element #${id}`)

  return node
}

renderSwatches(host('swatches'))
renderPairs(host('pairs'))
renderCobalt(host('cobalt'))
