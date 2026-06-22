import type { Metadata } from 'next'
import Link from 'next/link'
import { Lock, Radio, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6faf3] text-[#142112]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-16">
          <div className="leaf-pattern hero-reveal flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            <Radio className="h-12 w-12 text-[var(--slot4-accent)]" />
            <p className="mt-10 text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/72">{pagesContent.auth.login.description}</p>
          </div>
          <div className="motion-reveal flex flex-col justify-center bg-white p-7 shadow-[0_18px_60px_rgba(7,20,6,.08)] sm:p-12 lg:p-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef6e9] text-[var(--slot4-accent)]"><Lock className="h-6 w-6" /></div>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[#4b9d24] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-black/40"><ShieldCheck className="h-4 w-4" /> Local session updates the navbar instantly</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
