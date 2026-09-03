'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { knowledgeFilters } from '@/lib/content'

export function KnowledgeSearchPanel() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="mt-8">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col gap-3 rounded-md border border-hairline bg-background p-3 shadow-[0_8px_30px_rgba(7,59,120,0.08)] sm:flex-row sm:items-center"
        role="search"
      >
        <div className="relative flex-1">
          <label htmlFor="knowledge-search" className="sr-only">
            Tra cứu kiến thức xuất nhập khẩu
          </label>
          <Search
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-sky"
          />
          <input
            id="knowledge-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nhập tên hàng, mã HS, chính sách hoặc thủ tục..."
            className="h-12 w-full rounded-md bg-surface pr-4 pl-11 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-2 focus:outline-offset-2 focus:outline-sky"
          />
        </div>
        <button
          type="submit"
          className="h-12 shrink-0 rounded-md bg-brand px-7 text-[13px] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#d63a29]"
        >
          Tra cứu
        </button>
      </form>

      <ul className="mt-4 flex flex-wrap gap-2.5">
        {knowledgeFilters.map((filter) => (
          <li key={filter}>
            <button
              type="button"
              onClick={() => setActive((current) => (current === filter ? null : filter))}
              aria-pressed={active === filter}
              className={`rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors ${
                active === filter
                  ? 'border-brand bg-brand text-white'
                  : 'border-hairline bg-background text-navy hover:border-sky/60 hover:text-sky'
              }`}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>

      {query.trim() && (
        <p className="mt-4 text-sm text-muted-foreground" role="status">
          Đang tìm nội dung cho “{query.trim()}”. Nếu chưa thấy thủ tục cần tìm, hãy gửi
          thông tin lô hàng để NCK gợi ý nội dung phù hợp.
        </p>
      )}
    </div>
  )
}
