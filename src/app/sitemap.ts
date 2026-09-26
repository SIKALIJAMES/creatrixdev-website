import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creatrixdev.com'
  const currentDate = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/portfolio',
    '/a-propos',
    '/equipe',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
