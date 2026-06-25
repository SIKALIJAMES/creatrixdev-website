import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Actualités, conseils et tendances du digital par l\'équipe CreatrixDev.',
}

export default function BlogPage() {
  return <BlogClient />
}
