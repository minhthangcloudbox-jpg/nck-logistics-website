'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Grid2x2, User, Users } from 'lucide-react'
import { lookupTabs } from '@/lib/content'

const tabIcons = [Users, User, Grid2x2]

export function LookupTabs() {
  const [activeId, setActiveId] = useState(lookupTabs[0].id)
  const active = lookupTabs.find((tab) => tab.id === activeId) ?? lookupTabs[0]

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Tra cứu theo nhu cầu"
        className="grid gap-2 rounded-md border border-hairline bg-background p-2 sm:grid-cols-3"
      >
        {lookupTabs.map((tab, index) => {
          const Icon = tabIcons[index] ?? Users
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={`flex items-center justify-center gap-2.5 rounded-md px-4 py-3 text-[15px] font-bold transition-colors ${
                isActive
                  ? 'bg-tech text-brand ring-1 ring-brand/40 ring-inset'
                  : 'text-navy-dark hover:bg-surface'
              }`}
            >
              <Icon className="size-5" aria-hidden />
              {tab.label}
            </button>
          )
        })}
      </div>

      <ul
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-4 divide-y divide-hairline rounded-md border border-hairline bg-background"
      >
        {active.items.map((item) => (
          <li key={item.title}>
            <Link
              href="/thu-vien-kien-thuc#chu-de"
              className="group flex flex-col gap-3 p-5 transition-colors hover:bg-surface md:flex-row md:items-center md:gap-6"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-lg leading-snug font-bold text-balance text-navy">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed">{item.text}</p>
              </div>
              <span className="w-fit shrink-0 rounded-sm bg-tech px-3 py-1.5 text-xs font-bold tracking-wide text-navy uppercase">
                {item.tag}
              </span>
              <ArrowRight className="hidden size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1 md:block" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
