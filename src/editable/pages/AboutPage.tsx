import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, Radio, Send } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6faf3] text-[#142112]">
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_.75fr] lg:px-8 lg:py-20">
            <div className="hero-reveal">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">{pagesContent.about.title}</h1>
              <p className="mt-6 max-w-3xl border-l-4 border-[var(--slot4-accent)] pl-5 text-lg font-semibold leading-8 text-black/62">{pagesContent.about.description}</p>
            </div>
            <div className="leaf-pattern motion-reveal flex min-h-80 flex-col justify-end p-7 text-white">
              <Globe2 className="h-12 w-12 text-[var(--slot4-accent)]" />
              <h2 className="mt-8 text-3xl font-black">A focused hub for release visibility.</h2>
              <p className="mt-4 text-sm leading-7 text-white/68">Built for visitors who need to inspect media updates, search the archive, and act quickly.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <article className="motion-reveal bg-white p-7 shadow-[0_12px_40px_rgba(7,20,6,.06)] sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
              <div className="mt-7 grid gap-5 text-base leading-8 text-black/65">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={mediaDistributionRoute} className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-xs font-black uppercase tracking-[.12em] text-[#071406]">Browse archive <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-xs font-black uppercase tracking-[.12em]">Send a release <Send className="h-4 w-4" /></Link>
              </div>
            </article>
            <aside className="grid gap-4">
              {pagesContent.about.values.map((value, index) => (
                <div key={value.title} className="motion-reveal bg-white p-6 shadow-[0_12px_35px_rgba(7,20,6,.05)]">
                  <div className="flex items-center justify-between">
                    <CheckCircle2 className="h-6 w-6 text-[var(--slot4-accent)]" />
                    <span className="text-xs font-black text-black/35">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black leading-tight">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-black/60">{value.description}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="leaf-pattern text-white">
          <div className="mx-auto grid max-w-[1180px] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Distribution signal</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">Read the media updates shaping the conversation.</h2>
            </div>
            <Link href="/search" className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#071406]">Explore the archive <Radio className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
