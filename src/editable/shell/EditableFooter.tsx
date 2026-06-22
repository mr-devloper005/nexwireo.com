'use client'

import Link from 'next/link'
import { ArrowRight, Globe2, Mail, MapPin, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[#071406] text-white">
      <div className="bg-[var(--slot4-accent)] text-[#071406]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-4 py-5 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <p className="text-lg font-black">Distribute verified media updates with clarity, speed, and context.</p>
          <Link href="/contact" className="inline-flex justify-center rounded-full border border-[#071406]/35 px-7 py-3 text-xs font-black uppercase tracking-[.12em] hover:bg-[#071406] hover:text-white">Work with us</Link>
        </div>
      </div>

      <div className="leaf-pattern">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.65fr_.8fr_.8fr]">
            <div className="motion-reveal">
              <Link href="/" className="flex items-center gap-3 text-3xl font-black text-white">
                <span className="grid h-12 w-12 place-items-center rounded-full border-[var(--slot4-accent)] text-[var(--slot4-accent)]"><img src="/favicon.ico" alt="Logo" className="h-10 w-10" /></span>
                {SITE_CONFIG.name}
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
              <div className="mt-6 grid gap-3 text-sm text-white/58">
                <span className="inline-flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[var(--slot4-accent)]" /> Media operations desk, digital distribution network</span>
                <span className="inline-flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--slot4-accent)]" /> +123-456-7890</span>
                <span className="inline-flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--slot4-accent)]" /> newsroom@{SITE_CONFIG.domain.replace(/^www\./, '')}</span>
              </div>
            </div>

            <div className="motion-reveal">
              <h3 className="border-b border-white/20 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
              <div className="mt-4 grid gap-3">
                <Link href={mediaDistributionRoute} className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Media Distribution<ArrowRight className="h-4 w-4" /></Link>
                <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Search Archive<ArrowRight className="h-4 w-4" /></Link>
                <Link href="/create" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Create<ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>

            <div className="motion-reveal">
              <h3 className="border-b border-white/20 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Publication</h3>
              <div className="mt-4 grid gap-3">
                <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
                <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
                {session ? (
                  <>
                    <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Publish</Link>
                    <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout {session.name}</button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Log in</Link>
                    <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Sign up</Link>
                  </>
                )}
              </div>
            </div>

            <div className="motion-reveal">
              <h3 className="border-b border-white/20 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Subscribe</h3>
              <p className="mt-4 text-sm leading-7 text-white/58">Get distribution notes, release highlights, and editorial updates.</p>
              <form action="/signup" className="mt-5 flex rounded-full border border-white/20 bg-white/5 p-1">
                <input name="email" type="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/35" />
                <button className="rounded-full bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.12em] text-[#071406]">Join</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#071406] px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">
        Copyright (c) {year} {SITE_CONFIG.name}. Independent media distribution.
      </div>
    </footer>
  )
}
