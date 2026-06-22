'use client'

import { FileText, Mail, Megaphone, Phone, Radio, Send } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release intake', body: 'Send launch notes, source links, release copy, and assets for distribution review.' },
  { icon: Megaphone, title: 'Syndication and campaigns', body: 'Discuss publication timing, partner coverage, campaign coordination, and media routing.' },
  { icon: Mail, title: 'Corrections and support', body: 'Reach the team for archive updates, account support, corrections, or post visibility questions.' },
]

const contactStats = [
  { icon: Radio, title: 'Distribution desk', body: 'Release routing' },
  { icon: Phone, title: 'Quick contact', body: '+123-456-7890' },
  { icon: Send, title: 'Response window', body: '1-2 business days' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6faf3] text-[#142112]">
        <section className="bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-black/60">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-16">
          <aside className="leaf-pattern motion-reveal text-white">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border-b border-white/15 p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="mt-6 text-3xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="motion-reveal bg-white p-6 shadow-[0_18px_60px_rgba(7,20,6,.08)] sm:p-10 lg:p-12">
            <div className="grid gap-4 sm:grid-cols-3">
              {contactStats.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-[#f6faf3] p-4 text-center">
                  <Icon className="mx-auto h-6 w-6 text-[var(--slot4-accent)]" />
                  <p className="mt-3 text-sm font-black">{title}</p>
                  <p className="mt-1 text-xs font-semibold text-black/50">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
