'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe2, LogOut, Mail, Menu, PenLine, Phone, Search, UserRound, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/site-config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const pathname = usePathname()
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Media Distribution', href: mediaDistributionRoute },
    { label: 'Search', href: '/search' },
    { label: 'Create', href: '/create' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white text-[#142112] shadow-[0_6px_24px_rgba(7,20,6,.08)]">
      <div className="hidden border-b border-black/5 bg-[#f5f7f3] text-[11px] font-semibold text-black/45 lg:block">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-2">
          <div className="flex items-center gap-6">
            
          </div>
          <Link href="/contact" className="rounded-full bg-[var(--slot4-accent)] px-5 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#071406] transition hover:bg-[#071406] hover:text-white">Send a release</Link>
        </div>
      </div>

      <div className="mx-auto grid min-h-[74px] max-w-[1180px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 transition-all duration-300 sm:px-6 lg:min-h-[88px] lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-2xl font-black text-[#202820] sm:text-3xl">
          <span className="grid h-11 w-11 place-items-center rounded-full border-[var(--slot4-accent)] text-[var(--slot4-accent)]"><img src="/favicon.ico" alt="Logo" className="h-10 w-10" /></span>
          <span className="leading-none">{SITE_CONFIG.name}</span>
        </Link>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} className="nav-underline text-[11px] font-black uppercase tracking-[.08em] transition hover:text-[var(--slot4-accent)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link href="/search" className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[var(--slot4-accent)] transition hover:border-[var(--slot4-accent)] hover:bg-[var(--slot4-accent)] hover:text-[#071406] sm:inline-flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </Link>
          {session ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/create" className="inline-flex items-center gap-2 rounded-full border border-[var(--slot4-accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[.1em] text-[#071406] hover:bg-[var(--slot4-accent)]"><PenLine className="h-3.5 w-3.5" /> Create</Link>
              <span className="inline-flex max-w-36 items-center gap-2 truncate rounded-full bg-[#eef6e9] px-4 py-2 text-xs font-black text-[#142112]"><UserRound className="h-3.5 w-3.5" /> {session.name}</span>
              <button type="button" onClick={logout} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 hover:bg-[#071406] hover:text-white" aria-label="Logout"><LogOut className="h-4 w-4" /></button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/login" className="text-[11px] font-black uppercase tracking-[.1em] hover:text-[var(--slot4-accent)]">Log in</Link>
              <Link href="/signup" className="rounded-full bg-[var(--slot4-accent)] px-5 py-2.5 text-[11px] font-black uppercase tracking-[.1em] text-[#071406] hover:bg-[#071406] hover:text-white">Sign up</Link>
            </div>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex items-center rounded-full border border-black/10 bg-[#f6faf3] px-4">
            <Search className="h-4 w-4 text-[var(--slot4-accent)]" />
            <input name="q" type="search" placeholder="Search media archive" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none placeholder:text-black/35" />
          </form>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-[#f6faf3] px-4 py-3 text-sm font-black uppercase tracking-[.08em]">{item.label}</Link>
            ))}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-xl bg-[#071406] px-4 py-3 text-left text-sm font-black uppercase tracking-[.08em] text-white">Logout {session.name}</button>
            ) : (
              <Link href="/signup" onClick={() => setOpen(false)} className="rounded-xl bg-[var(--slot4-accent)] px-4 py-3 text-sm font-black uppercase tracking-[.08em] text-[#071406]">Sign up</Link>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
