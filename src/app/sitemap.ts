import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'
import { siteConfig } from '@/../content/site'
import { getAllRealProjects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date('2026-10-01'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ia-automatisation`, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions/transport-logistique`, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/equipe`, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2026-10-01'), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date('2026-10-11'), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = getAllRealProjects().map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
