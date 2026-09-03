'use client'

import { useMemo, useState } from 'react'
import { DownloadCard } from '@/components/cards'
import { downloadCategories, downloads } from '@/lib/content'

export function DownloadLibrary() {
  const [category, setCategory] = useState('Tất cả')

  const visible = useMemo(
    () =>
      category === 'Tất cả'
        ? downloads
        : downloads.filter((item) => item.category === category),
    [category],
  )

  return (
    <div className="mt-10">
      <ul className="flex flex-wrap gap-2.5">
        {downloadCategories.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors ${
                category === item
                  ? 'border-brand bg-brand text-white'
                  : 'border-hairline bg-background text-navy hover:border-sky/60 hover:text-sky'
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((item) => (
          <li key={item.title}>
            <DownloadCard item={item} />
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">
        Tài liệu được cập nhật theo quy định hiện hành. Nếu cần biểu mẫu riêng theo mặt hàng,
        hãy gửi yêu cầu cho NCK Logistics.
      </p>
    </div>
  )
}
