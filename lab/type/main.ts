import '@fontsource-variable/bodoni-moda/opsz.css'
import '@fontsource-variable/eb-garamond/index.css'
import '@fontsource-variable/cormorant/index.css'
import '@fontsource-variable/jost/index.css'
import '@fontsource/marcellus/400.css'
import '@fontsource-variable/cormorant-garamond/index.css'

interface Pairing {
  id: string
  display: string
  displayFamily: string
  displayWeight: number
  text: string
  textFamily: string
}

const PAIRINGS: Pairing[] = [
  {
    id: 'A',
    display: 'Bodoni Moda',
    displayFamily: "'Bodoni Moda Variable', serif",
    displayWeight: 500,
    text: 'EB Garamond',
    textFamily: "'EB Garamond Variable', serif",
  },
  {
    id: 'B',
    display: 'Cormorant',
    displayFamily: "'Cormorant Variable', serif",
    displayWeight: 500,
    text: 'Jost',
    textFamily: "'Jost Variable', sans-serif",
  },
  {
    id: 'C',
    display: 'Marcellus',
    displayFamily: "'Marcellus', serif",
    displayWeight: 400,
    text: 'Cormorant Garamond',
    textFamily: "'Cormorant Garamond Variable', serif",
  },
  // An extra pairing beyond the three in Section 5.4: the display of A with the text of B.
  {
    id: 'D',
    display: 'Bodoni Moda',
    displayFamily: "'Bodoni Moda Variable', serif",
    displayWeight: 500,
    text: 'Jost',
    textFamily: "'Jost Variable', sans-serif",
  },
]

// Every string below already exists in the build guide or the repository.
const STUDIO = 'Everfield Interactive'
const GAME = 'Cael: Everfield'
const NOTICE = '© 2026 SirKiefy and Everfield Interactive. All rights reserved.'

const CHAPTERS = [
  'The Field',
  'The Ruins',
  'The Monolith',
  'The Core',
  'The Clearing',
  'The Crystal Wood',
  'The Shard Desert',
  'The Highlands',
  'The Ring',
  'The Terraces',
  'The Night Gate',
]

const CONTROLS = ['Enter the world', 'Go to the main page', 'Enter with sound']

const OPTIONS: [string, string][] = [
  ['Sound', 'On, off'],
  ['Motion', 'Full, reduced, off'],
  ['Effects', 'Full, light'],
  ['Text size', 'Standard, large'],
  ['Contrast', 'Standard, high'],
]

const LABELS = [
  'Projects',
  'News',
  'Team',
  'Dev log',
  'Contact',
  'Legal',
  'Wander',
  'Guided',
  'Map',
  'Index',
  'Ledger',
]

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 & : , . ©'

function two(n: number): string {
  return String(n).padStart(2, '0')
}

function render(pairing: Pairing): string {
  const chapterList = CHAPTERS.map(
    (name, i) => `<li><span class="text">${two(i + 1)}</span>${name}</li>`,
  ).join('')

  const controls = CONTROLS.map((label) => `<li>${label}</li>`).join('')
  const options = OPTIONS.map(([name, choices]) => `<dt>${name}</dt><dd>${choices}</dd>`).join('')

  return `
    <section class="pairing" style="--display: ${pairing.displayFamily}; --display-weight: ${String(pairing.displayWeight)}; --text: ${pairing.textFamily}">
      <p class="pairing-label">Pairing ${pairing.id}. Display in ${pairing.display}, text in ${pairing.text}.</p>

      <div class="on-ink">
        <p class="wordmark display">${STUDIO}</p>
        <p class="game-title display">${GAME}</p>
        <p class="chapter display"><span class="chapter-numeral">03</span>The Monolith</p>
        <p class="caption text">Chapter 03 of 11. Sound off.</p>
      </div>

      <div class="on-porcelain">
        <div class="columns">
          <div>
            <h3 class="text">Chapter names</h3>
            <ol class="chapter-list display">${chapterList}</ol>
          </div>
          <div class="text">
            <h3>Controls and options</h3>
            <ul class="controls">${controls}</ul>
            <dl class="options">${options}</dl>
            <p class="body"><span class="link">Go to the main page</span></p>
            <p class="notice">${NOTICE}</p>
          </div>
          <div>
            <h3 class="text">Labels at body size</h3>
            <p class="body text">${LABELS.join(', ')}.</p>
            <h3 class="text" style="margin-top: 20px">Numerals</h3>
            <p class="numerals display">01 11 80</p>
            <h3 class="text" style="margin-top: 20px">Display glyphs</h3>
            <p class="glyphs display">${GLYPHS}</p>
            <h3 class="text" style="margin-top: 20px">Text glyphs</h3>
            <p class="glyphs text">${GLYPHS}</p>
          </div>
        </div>
      </div>
    </section>`
}

const host = document.getElementById('pairings')
if (!host) throw new Error('Missing element #pairings')

host.innerHTML = PAIRINGS.map(render).join('')
