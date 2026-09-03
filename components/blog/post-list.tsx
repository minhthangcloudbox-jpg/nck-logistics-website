'use client'

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { ArticleCard } from '@/components/cards'
import { blogCategories, blogPosts } from '@/lib/content'

const PER_PAGE = 6

export function BlogPostList() {
  const [category, setCategory] = useState('Tất cả')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return blogPosts.filter((post) => {
      const matchCategory = category === 'Tất cả' || post.category === category
      const matchQuery =
        !needle ||
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle)
      return matchCategory && matchQuery
    })
  }, [category, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const current = Math.min(page, totalPages)
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE)

  const update = (fn: () => void) => {
    fn()
    setPage(1)
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap gap-2.5">
          {blogCategories.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => update(() => setCategory(item))}
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

        <div className="relative lg:w-72">
          <label htmlFor="blog-search" className="sr-only">
            Tìm bài viết
          </label>
          <Search
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3.5 size-4.5 -translate-y-1/2 text-sky"
          />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => update(() => setQuery(event.target.value))}
            placeholder="Tìm bài viết..."
            className="h-12 w-full rounded-md border border-hairline bg-background pr-4 pl-11 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-sky focus:outline-2 focus:outline-offset-2 focus:outline-sky"
          />
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <li key={post.slug}>
              <ArticleCard
                article={post}
                ctaLabel="Đọc bài viết"
                href={`/blog#${post.slug}`}
                meta={post.date}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-md border border-hairline bg-surface p-6 text-[15px]">
          Không tìm thấy bài viết phù hợp. Hãy thử từ khóa khác hoặc chọn chuyên mục
          &ldquo;Tất cả&rdquo;.
        </p>
      )}

      {totalPages > 1 && (
        <nav aria-label="Phân trang bài viết" className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={current === 1}
            className="flex size-11 items-center justify-center rounded-md border border-hairline text-navy transition-colors hover:border-sky/60 disabled:opacity-40"
          >
            <span className="sr-only">Trang trước</span>
            <ChevronLeft className="size-5" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => setPage(number)}
              aria-current={number === current ? 'page' : undefined}
              className={`size-11 rounded-md border text-sm font-bold transition-colors ${
                number === current
                  ? 'border-brand bg-brand text-white'
                  : 'border-hairline bg-background text-navy hover:border-sky/60'
              }`}
            >
              {number}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={current === totalPages}
            className="flex size-11 items-center justify-center rounded-md border border-hairline text-navy transition-colors hover:border-sky/60 disabled:opacity-40"
          >
            <span className="sr-only">Trang sau</span>
            <ChevronRight className="size-5" />
          </button>
        </nav>
      )}
    </div>
  )
}
