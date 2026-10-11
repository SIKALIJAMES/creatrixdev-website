import fs from 'fs'
import path from 'path'

export interface ProjectResult {
  label: string
  valeur: string
  preuve: string
}

export interface Project {
  slug: string
  titre: string
  client: string
  secteur: string
  statut: 'reel' | 'concept'
  date: string
  resume: string
  probleme?: string
  solution?: string
  resultats: ProjectResult[]
  stack: string[]
  images: string[]
  urlProduction?: string
  depotGit?: string
  temoignage?: string
  content: string
}

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')

function parseYamlList(raw: string, field: string): string[] {
  const match = raw.match(new RegExp(`^${field}:\\s*\\n((?:\\s+- [^\\n]+\\n?)+)`, 'm'))
  if (!match) return []
  return match[1]
    .trim()
    .split('\n')
    .map((l) => l.replace(/^\s*- /, '').trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
}

function parseResultats(raw: string): ProjectResult[] {
  const listMatch = raw.match(/^resultats:\s*\n((?:\s+-\s+label:[\s\S]*?)(?=\n\w+:|$))/m)
  if (!listMatch) return []

  const block = listMatch[1]
  const items = block.split(/\n\s*-\s+label:\s*/).filter(Boolean)
  const results: ProjectResult[] = []

  for (const item of items) {
    const lines = item.split('\n')
    const label = lines[0]?.trim().replace(/^["']|["']$/g, '') || ''
    let valeur = ''
    let preuve = ''

    for (const l of lines.slice(1)) {
      const vMatch = l.match(/^\s*valeur:\s*(.*)/)
      if (vMatch) valeur = vMatch[1].trim().replace(/^["']|["']$/g, '')
      const pMatch = l.match(/^\s*preuve:\s*(.*)/)
      if (pMatch) preuve = pMatch[1].trim().replace(/^["']|["']$/g, '')
    }

    if (label && valeur) {
      results.push({ label, valeur, preuve })
    }
  }

  return results
}

export function parseProjectFile(filename: string): Project | null {
  const filePath = path.join(PROJECTS_DIR, filename)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return null

  const raw = match[1]
  const content = match[2].trim()

  const getString = (key: string): string => {
    const m = raw.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))
    if (!m) return ''
    return m[1].trim().replace(/^["']|["']$/g, '')
  }

  const slug = getString('slug') || filename.replace(/\.mdx?$/, '')
  const titre = getString('titre')
  const client = getString('client')
  const secteur = getString('secteur')
  const statut = (getString('statut') as 'reel' | 'concept') || 'concept'
  const date = getString('date')
  const resume = getString('resume')
  const probleme = getString('probleme')
  const solution = getString('solution')
  const urlProduction = getString('urlProduction')
  const depotGit = getString('depotGit')
  const temoignage = getString('temoignage')

  const stack = parseYamlList(raw, 'stack')
  const images = parseYamlList(raw, 'images')
  const resultats = parseResultats(raw)

  return {
    slug,
    titre,
    client,
    secteur,
    statut,
    date,
    resume,
    probleme,
    solution,
    resultats,
    stack,
    images,
    urlProduction: urlProduction || undefined,
    depotGit: depotGit || undefined,
    temoignage: temoignage || undefined,
    content,
  }
}

export function getAllRealProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.mdx') && !f.startsWith('.'))
  const projects: Project[] = []

  for (const f of files) {
    const p = parseProjectFile(f)
    if (p && p.statut === 'reel') {
      projects.push(p)
    }
  }

  return projects
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.mdx') && !f.startsWith('.'))
  const projects: Project[] = []

  for (const f of files) {
    const p = parseProjectFile(f)
    if (p) projects.push(p)
  }

  return projects
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects()
  return projects.find((p) => p.slug === slug) || null
}
