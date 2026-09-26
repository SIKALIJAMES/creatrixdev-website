import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article introuvable',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="min-h-screen pt-32 pb-24 hero-gradient">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors text-sm mb-8 font-mono-label"
        >
          <ArrowLeft size={16} />
          Retour au blog
        </Link>

        {/* Category & meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono-label text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 px-3 py-1 rounded-full text-xs">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-text-muted text-xs font-mono-label">
            <Calendar size={13} className="text-accent-cyan" />
            {formattedDate}
          </span>
          <span className="text-text-muted text-xs font-mono-label">·</span>
          <span className="flex items-center gap-1.5 text-text-muted text-xs font-mono-label">
            <Clock size={13} className="text-accent-cyan" />
            {post.readTime} de lecture
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text-primary leading-tight mb-8">
          {post.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center gap-4 py-4 border-y border-accent-cyan/10 mb-10">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-accent-cyan/30">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-display font-semibold text-text-primary text-sm">
              {post.author.name}
            </div>
            <div className="text-text-muted text-xs font-mono-label">
              {post.author.role}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[280px] md:h-[450px] rounded-2xl overflow-hidden mb-12 border border-accent-cyan/20 shadow-glow-cyan">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
        </div>

        {/* Article content */}
        <div className="prose prose-invert max-w-none text-text-muted text-base md:text-lg leading-relaxed space-y-6">
          <p className="text-text-primary font-medium text-lg md:text-xl border-l-2 border-accent-cyan pl-4 py-1 italic">
            {post.excerpt}
          </p>

          {post.content.map((paragraph, index) => (
            <p key={index} className="text-text-primary/90">
              {paragraph}
            </p>
          ))}
        </div>

        <SectionDivider className="my-16" />

        {/* Call to action card */}
        <div className="glass rounded-2xl p-8 md:p-12 text-center border border-accent-cyan/20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(45,212,255,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4 relative z-10">
            Vous souhaitez accélérer votre présence digitale ?
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto mb-8 relative z-10">
            CreatrixDev vous accompagne dans la conception, le développement et la promotion de vos projets les plus ambitieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <CTAButton href="/contact" variant="primary">
              Demander un devis gratuit
            </CTAButton>
            <CTAButton href="https://wa.me/237692280248" variant="secondary" external>
              Discuter sur WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </article>
  )
}
