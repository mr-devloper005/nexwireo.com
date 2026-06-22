'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, PenLine, PlusCircle, Radio, Send, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  mediaDistribution: Radio,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
}

const fieldClass = 'w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-bold text-[#142112] outline-none transition placeholder:text-black/35 focus:border-[var(--slot4-accent)]'
const areaClass = 'w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-bold text-[#142112] outline-none transition placeholder:text-black/35 focus:border-[var(--slot4-accent)]'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const initialTask = (enabledTasks.find((item) => item.key === 'mediaDistribution')?.key || enabledTasks[0]?.key || 'article') as TaskKey
  const [task, setTask] = useState<TaskKey>(initialTask)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'media-update',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="min-h-screen bg-[#f6faf3] px-4 py-12 text-[#142112] sm:px-6 lg:px-8">
          <section className="mx-auto grid max-w-[1040px] gap-8 bg-white p-6 shadow-[0_18px_60px_rgba(7,20,6,.08)] md:grid-cols-[0.85fr_1.15fr] md:p-8">
            <div className="leaf-pattern motion-reveal flex min-h-72 items-center justify-center text-white">
              <Lock className="h-20 w-20 text-[var(--slot4-accent)]" />
            </div>
            <div className="motion-reveal self-center py-4">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.create.locked.badge}</p>
              <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-black/62">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-[#071406]">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-black">Sign up</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#f6faf3] text-[#142112]">
        <section className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="motion-reveal lg:sticky lg:top-32 lg:self-start">
              <div className="leaf-pattern p-7 text-white sm:p-8">
                <PenLine className="h-10 w-10 text-[var(--slot4-accent)]" />
                <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.create.hero.badge}</p>
                <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl">{pagesContent.create.hero.title}</h1>
                <p className="mt-5 text-sm font-semibold leading-7 text-white/70">{pagesContent.create.hero.description}</p>
              </div>

              <div className="mt-5 grid gap-3">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`grid grid-cols-[auto_1fr] items-start gap-3 border p-4 text-left transition ${active ? 'border-[var(--slot4-accent)] bg-white shadow-[0_12px_35px_rgba(7,20,6,.08)]' : 'border-black/10 bg-white/70 hover:bg-white'}`}>
                      <span className={`grid h-10 w-10 place-items-center rounded-full ${active ? 'bg-[var(--slot4-accent)] text-[#071406]' : 'bg-[#eef6e9] text-[#4b9d24]'}`}><Icon className="h-5 w-5" /></span>
                      <span>
                        <span className="block text-sm font-black">{item.label}</span>
                        <span className="mt-1 line-clamp-2 block text-xs font-semibold leading-5 text-black/55">{item.description}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </aside>

            <form onSubmit={submit} className="motion-reveal bg-white p-6 shadow-[0_18px_60px_rgba(7,20,6,.08)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-[var(--slot4-accent)] pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">Create {activeTask?.label || 'post'}</p>
                  <h2 className="mt-2 text-3xl font-black tracking-normal">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="rounded-full bg-[#eef6e9] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#142112]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <label className="grid gap-2 text-sm font-black text-black/70">
                  Release title
                  <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Media update headline" required />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-black text-black/70">
                    Category
                    <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Press release, campaign, coverage" />
                  </label>
                  <label className="grid gap-2 text-sm font-black text-black/70">
                    Source URL
                    <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Website or source URL" />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-black text-black/70">
                  Featured image URL
                  <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Optional image URL" />
                </label>
                <label className="grid gap-2 text-sm font-black text-black/70">
                  Distribution summary
                  <textarea className={`${areaClass} min-h-28`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short release summary for archive cards" required />
                </label>
                <label className="grid gap-2 text-sm font-black text-black/70">
                  Main release content
                  <textarea className={`${areaClass} min-h-52`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Main content, media notes, campaign details, or publication context" required />
                </label>
              </div>

              {created ? (
                <div className="mt-5 border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent)] px-6 text-sm font-black uppercase tracking-[0.18em] text-[#071406] transition hover:bg-[#071406] hover:text-white">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
