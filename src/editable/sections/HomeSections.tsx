import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Clock3, FileText, Megaphone, Radio, Search, Send } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function TextPostCard({ post, href, index, featured = false }: { post: SitePost; href: string; index: number; featured?: boolean }) {
  return (
    <Link href={href} className={`motion-reveal group flex min-h-[220px] flex-col justify-between border border-black/8 bg-white p-6 shadow-[0_12px_35px_rgba(7,20,6,.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--slot4-accent)] hover:shadow-[0_22px_55px_rgba(7,20,6,.12)] ${featured ? 'lg:col-span-2 lg:min-h-[310px] lg:p-8' : ''}`}>
      <div>
        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">
          <span>{getEditableCategory(post)}</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className={`${featured ? 'mt-5 text-4xl sm:text-5xl' : 'mt-4 text-2xl'} max-w-3xl font-black leading-tight tracking-normal text-[#142112] group-hover:text-[#4b9d24]`}>{post.title}</h3>
        <p className={`${featured ? 'mt-5 text-base leading-8' : 'mt-4 text-sm leading-7'} line-clamp-4 text-black/58`}>{getEditableExcerpt(post, featured ? 220 : 150)}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[#142112]">Read update <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: media distribution updates.`

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-28 bg-[#f5f7f3]" aria-hidden="true" />
      <div className={`${dc.shell.section} relative py-10 sm:py-14 lg:py-16`}>
        <div className="hero-reveal relative min-h-[560px] overflow-hidden bg-[#13300f] text-white shadow-[0_24px_80px_rgba(7,20,6,.22)]">
          <div className="absolute inset-0 leaf-pattern opacity-75" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,6,.86),rgba(16,64,19,.62),rgba(121,200,74,.32))]" aria-hidden="true" />
          <div className="relative grid min-h-[560px] items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_.7fr] lg:p-14">
            <div>
              <p className="text-xs font-black uppercase tracking-[.26em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-6xl lg:text-7xl">{heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/78">{pagesContent.home.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={primaryRoute} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label}</Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white hover:bg-white hover:text-[#071406]">Send a release</Link>
              </div>
            </div>
            <aside className="grid gap-4">
              {[
                ['Campaign reach', 'Real posts drive the archive, search, and detail pages.'],
                ['Media clarity', 'Cards emphasize title, category, and summary for fast scanning.'],
                ['Distribution rhythm', 'Fresh updates stay organized without wide stretched layouts.'],
              ].map(([title, body], index) => (
                <div key={title} className="motion-reveal border border-white/18 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]"><span>0{index + 1}</span><Radio className="h-4 w-4" /></div>
                  <h2 className="mt-4 text-2xl font-black">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/70">{body}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
        {lead ? (
          <div className="motion-reveal mx-auto -mt-12 max-w-5xl bg-white p-5 shadow-[0_18px_55px_rgba(7,20,6,.12)] sm:p-7">
            <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--slot4-accent)] text-[#071406]"><Megaphone className="h-6 w-6" /></span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Latest release</p>
                <h2 className="mt-1 text-2xl font-black leading-tight">{lead.title}</h2>
              </div>
              <Link href={postHref(primaryTask, lead, primaryRoute)} className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-xs font-black uppercase tracking-[.12em] hover:bg-[#071406] hover:text-white">Open <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#f6faf3]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Distribution activity</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">Media updates are organized for quick scanning and confident follow-up.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} featured={index === 0} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[6] || posts[0]
  const briefs = posts.slice(7, 11).length ? posts.slice(7, 11) : posts.slice(1, 5)
  if (!feature) return null
  return (
    <section className="leaf-pattern text-white">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="motion-reveal lg:sticky lg:top-32">
            <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Why it works</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">A calm archive for fast-moving media work.</h2>
            <p className="mt-5 text-base leading-8 text-white/68">The layout follows the reference rhythm: focused width, green accents, strong whitespace, and cards that reveal in sequence without overwhelming the reader.</p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-white/72">
              {['Real post data stays visible.', 'Home cards show titles and summaries only.', 'Search, create, login, and contact share the same interface language.'].map((item) => (
                <span key={item} className="inline-flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-[var(--slot4-accent)]" /> {item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <TextPostCard post={feature} href={postHref(primaryTask, feature, primaryRoute)} index={0} featured />
            <div className="grid gap-5 sm:grid-cols-2">
              {briefs.map((post, index) => <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 8)
  if (!source.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
          <div className="motion-reveal border border-black/8 bg-[#f6faf3] p-7">
            <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Briefing desk</p>
            <h2 className="mt-4 text-4xl font-black leading-tight">More from the {taskLabel(primaryTask).toLowerCase()} archive.</h2>
            <p className="mt-5 text-sm leading-7 text-black/58">Use the archive and search tools to move through releases, categories, summaries, and supporting publication context.</p>
            <form action="/search" className="mt-7 flex rounded-full border border-black/10 bg-white px-4">
              <Search className="mt-4 h-4 w-4 text-[var(--slot4-accent)]" />
              <input name="q" placeholder="Search media updates" className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm font-bold outline-none placeholder:text-black/35" />
              <button className="text-xs font-black uppercase tracking-[.12em]">Search</button>
            </form>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {source.map((post, index) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="motion-reveal group border-b border-black/10 pb-5">
                <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]"><Clock3 className="h-3.5 w-3.5" /> {getEditableCategory(post)}</p>
                <h3 className="mt-3 text-xl font-black leading-tight group-hover:text-[#4b9d24]">{post.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/55">{getEditableExcerpt(post, 120)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#f6faf3]">
      <div className={`${dc.shell.section} pb-16 sm:pb-24`}>
        <div className="motion-reveal grid gap-8 bg-[var(--slot4-accent)] p-7 text-[#071406] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] opacity-70">Ready to distribute</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">Send a release, create a post, or search the live media archive.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className="inline-flex items-center gap-2 rounded-full bg-[#071406] px-6 py-3 text-xs font-black uppercase tracking-[.12em] text-white"><Send className="h-4 w-4" /> Create</Link>
            <Link href={mediaDistributionRoute} className="inline-flex items-center gap-2 rounded-full border border-[#071406]/25 px-6 py-3 text-xs font-black uppercase tracking-[.12em]"><FileText className="h-4 w-4" /> Archive</Link>
            <Link href="/search" className="inline-flex items-center gap-2 rounded-full border border-[#071406]/25 px-6 py-3 text-xs font-black uppercase tracking-[.12em]"><BarChart3 className="h-4 w-4" /> Search</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
