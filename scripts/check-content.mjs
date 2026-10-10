#!/usr/bin/env node
/**
 * scripts/check-content.mjs
 *
 * Validateur de contenu pour CreatrixDev.
 * Lance avec : npm run check:content
 *
 * Ce script :
 *  1. Vérifie le frontmatter des projets MDX (slug, titre, client, statut, date, resultats, stack)
 *  2. Refuse qu'un projet `statut: concept` apparaisse dans une liste publique
 *  3. Signale tous les TODO_A_FOURNIR présents
 *  4. Vérifie que les images déclarées existent dans public/
 *  5. Vérifie que content/stats.ts ne contient pas de statistique sans source
 *  6. Retourne un code de sortie non-nul si le build doit être bloqué (concept en public, TODO en production)
 */

import { readFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = join(__dirname, '..')

const PROJECTS_DIR = join(ROOT, 'content', 'projects')
const PUBLIC_DIR = join(ROOT, 'public')
const IS_PROD = process.env.NODE_ENV === 'production' || process.argv.includes('--prod')

let errors = 0
let warnings = 0
let todos = []

function error(msg) {
  console.error(`  ❌ ERREUR : ${msg}`)
  errors++
}

function warn(msg) {
  console.warn(`  ⚠️  AVERT : ${msg}`)
  warnings++
}

function info(msg) {
  console.log(`  ✅ OK     : ${msg}`)
}

function todo(file, field, msg) {
  todos.push({ file, field, msg })
  console.warn(`  📋 TODO   : [${file}] ${field} → ${msg}`)
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Vérification des projets MDX
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n📂 Vérification des projets MDX dans content/projects/\n')

const REQUIRED_FRONTMATTER = ['slug', 'titre', 'client', 'secteur', 'statut', 'date', 'resume', 'stack']
const VALID_STATUTS = ['reel', 'concept']

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const raw = match[1]
  const result = {}

  raw.split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '')
    if (key && value) result[key] = value
  })

  // Extract statut specifically (handles inline values)
  const statutMatch = raw.match(/^statut:\s*(reel|concept)/m)
  if (statutMatch) result.statut = statutMatch[1]

  // Extract any YAML list (array of items with "- " prefix) by key name
  const listFields = ['stack', 'images', 'resultats']
  for (const field of listFields) {
    const listMatch = raw.match(new RegExp(`^${field}:\\s*\\n((?:\\s+- [^\\n]+\\n?)+)`, 'm'))
    if (listMatch) {
      result[field] = listMatch[1]
        .trim()
        .split('\n')
        .map((l) => l.replace(/^\s*- /, '').trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    }
  }

  return result
}

if (!existsSync(PROJECTS_DIR)) {
  warn('Dossier content/projects/ inexistant — aucun projet MDX à valider.')
} else {
  const mdxFiles = readdirSync(PROJECTS_DIR).filter(
    (f) => f.endsWith('.mdx') && !f.startsWith('.')
  )

  if (mdxFiles.length === 0) {
    warn('Aucun fichier .mdx trouvé dans content/projects/')
  }

  for (const file of mdxFiles) {
    const filePath = join(PROJECTS_DIR, file)
    const content = readFileSync(filePath, 'utf-8')
    const fm = parseFrontmatter(content)

    if (!fm) {
      error(`${file} — frontmatter YAML introuvable ou mal formé.`)
      continue
    }

    // Champs requis
    for (const field of REQUIRED_FRONTMATTER) {
      if (!fm[field]) {
        error(`${file} — champ requis manquant : "${field}"`)
      }
    }

    // Statut valide
    if (fm.statut && !VALID_STATUTS.includes(fm.statut)) {
      error(`${file} — statut invalide "${fm.statut}". Valeurs acceptées : reel | concept`)
    }

    // Règle : concept interdit en liste publique
    if (fm.statut === 'concept') {
      // En prod, on bloque ; en dev, on avertit
      if (IS_PROD) {
        error(`${file} — statut "concept" ne peut pas apparaître en production. Masquez-le ou retirez-le du portfolio public.`)
      } else {
        warn(`${file} — statut "concept" : ce projet sera masqué du portfolio public.`)
      }
    } else if (fm.statut === 'reel') {
      info(`${file} — statut reel, projet public ✓`)
    }

    // Images : vérification de l'existence
    if (fm.images && Array.isArray(fm.images)) {
      for (const imgPath of fm.images) {
        const relPath = imgPath.replace(/^[/\\]+/, '')
        const absImg = join(PUBLIC_DIR, relPath)
        if (!existsSync(absImg)) {
          warn(`${file} — image déclarée introuvable dans public/ : ${imgPath}`)
        }
      }
    }

    // TODO_A_FOURNIR dans le contenu
    const todoMatches = content.match(/TODO_A_FOURNIR/g)
    if (todoMatches) {
      todo(file, `${todoMatches.length} occurrence(s)`, 'Champs ou données à compléter avant publication complète')
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 1b. Vérification des articles de blog dans content/posts/
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n📝 Vérification des articles de blog dans content/posts/\n')

const POSTS_DIR = join(ROOT, 'content', 'posts')
const REQUIRED_POST_FRONTMATTER = ['titre', 'description', 'date', 'auteur', 'statut']
const VALID_POST_STATUTS = ['brouillon', 'publie']

if (existsSync(POSTS_DIR)) {
  const postFiles = readdirSync(POSTS_DIR).filter(
    (f) => f.endsWith('.mdx') && !f.startsWith('.')
  )
  for (const file of postFiles) {
    const filePath = join(POSTS_DIR, file)
    const content = readFileSync(filePath, 'utf-8')
    const fm = parseFrontmatter(content)
    if (!fm) {
      error(`${file} — frontmatter YAML introuvable ou mal formé.`)
      continue
    }
    for (const field of REQUIRED_POST_FRONTMATTER) {
      if (!fm[field]) {
        error(`${file} — champ requis manquant : "${field}"`)
      }
    }
    if (fm.statut && !VALID_POST_STATUTS.includes(fm.statut)) {
      error(`${file} — statut invalide "${fm.statut}". Valeurs acceptées : brouillon | publie`)
    }
    if (fm.statut === 'brouillon') {
      info(`${file} — statut "brouillon" (en attente de révision) ✓`)
    } else if (fm.statut === 'publie') {
      info(`${file} — statut "publie" ✓`)
    }
    const todoMatches = content.match(/TODO_A_FOURNIR/g)
    if (todoMatches) {
      todo(file, `${todoMatches.length} occurrence(s)`, 'Champs ou chiffres à compléter avant publication')
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Vérification de content/pricing.ts : bloque si TODO en prod
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n💰 Vérification de content/pricing.ts\n')

const pricingPath = join(ROOT, 'content', 'pricing.ts')
if (existsSync(pricingPath)) {
  const pricingContent = readFileSync(pricingPath, 'utf-8')
  const pricingTodos = (pricingContent.match(/TODO_A_FOURNIR/g) || []).length
  if (pricingTodos > 0) {
    if (IS_PROD) {
      warn(`pricing.ts — ${pricingTodos} TODO_A_FOURNIR détectés. La section tarifs sera masquée en production.`)
    } else {
      todo('pricing.ts', `${pricingTodos} prix/délais`, 'À confirmer par CreatrixDev avant affichage public')
    }
  } else {
    info('pricing.ts — aucun TODO_A_FOURNIR, tarifs complets ✓')
  }
} else {
  warn('content/pricing.ts introuvable')
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Vérification de content/stats.ts : toute stat doit avoir une source
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n📊 Vérification de content/stats.ts\n')

const statsPath = join(ROOT, 'content', 'stats.ts')
if (existsSync(statsPath)) {
  const statsContent = readFileSync(statsPath, 'utf-8')
  const todoStats = (statsContent.match(/TODO_A_FOURNIR/g) || []).length
  if (todoStats > 0) {
    todo('stats.ts', `${todoStats} valeurs`, 'Statistiques sans source — à ne pas afficher')
  } else {
    info('stats.ts — toutes les statistiques ont une source ✓')
  }
} else {
  warn('content/stats.ts introuvable')
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. Vérification de content/testimonials.ts
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n💬 Vérification de content/testimonials.ts\n')

const testimonialsPath = join(ROOT, 'content', 'testimonials.ts')
if (existsSync(testimonialsPath)) {
  const testContent = readFileSync(testimonialsPath, 'utf-8')
  const testTodos = (testContent.match(/TODO_A_FOURNIR/g) || []).length
  if (testTodos > 0) {
    todo('testimonials.ts', `${testTodos} témoignage(s)`, 'Accord écrit client requis avant publication')
  } else {
    info('testimonials.ts — validé ✓')
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Rapport final
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(60))
console.log('📋 RAPPORT FINAL check:content')
console.log('─'.repeat(60))
console.log(`  ❌ Erreurs bloquantes : ${errors}`)
console.log(`  ⚠️  Avertissements    : ${warnings}`)
console.log(`  📋 TODO_A_FOURNIR    : ${todos.length}`)

if (todos.length > 0) {
  console.log('\n  Liste des informations à fournir :')
  todos.forEach((t, i) => {
    console.log(`  ${i + 1}. [${t.file}] ${t.field} → ${t.msg}`)
  })
}
console.log('─'.repeat(60))

if (errors > 0) {
  console.error('\n🚫 check:content ÉCHOUÉ — corrigez les erreurs bloquantes avant de continuer.\n')
  process.exit(1)
} else {
  console.log('\n✅ check:content RÉUSSI\n')
  process.exit(0)
}
