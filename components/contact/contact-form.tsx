'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

type Field = {
  name: string
  label: string
  type: 'text' | 'tel' | 'email'
  required?: boolean
  half?: boolean
}

const fields: Field[] = [
  { name: 'hoTen', label: 'Họ tên', type: 'text', required: true, half: true },
  { name: 'congTy', label: 'Công ty', type: 'text', half: true },
  { name: 'dienThoai', label: 'Điện thoại', type: 'tel', required: true, half: true },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true },
  { name: 'tenHang', label: 'Tên hàng', type: 'text', half: true },
  { name: 'tuyenVanChuyen', label: 'Tuyến vận chuyển', type: 'text', half: true },
]

const supportOptions = [
  'Thủ tục hải quan',
  'Vận chuyển quốc tế',
  'Vận chuyển nội địa',
  'Ủy thác xuất nhập khẩu',
  'Tư vấn chính sách & mã HS',
]

export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <div className="rounded-md border border-hairline bg-background p-6 md:p-8">
      <h2 className="text-xl font-extrabold tracking-tight text-navy uppercase md:text-2xl">
        Gửi yêu cầu tư vấn
      </h2>
      <span className="mt-3 flex h-[3px] w-12 rounded-full bg-brand" />

      {sent ? (
        <div
          role="status"
          className="mt-8 flex gap-4 rounded-md border border-sky/40 bg-tech p-5"
        >
          <CheckCircle2 className="size-6 shrink-0 text-sky" aria-hidden />
          <div>
            <h3 className="text-lg font-bold text-navy">Đã ghi nhận yêu cầu</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed">
              Đội ngũ NCK Logistics sẽ liên hệ lại trong thời gian sớm nhất để trao đổi về
              lô hàng của bạn.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-4 text-sm font-bold text-brand underline underline-offset-4"
            >
              Gửi yêu cầu khác
            </button>
          </div>
        </div>
      ) : (
        <form
          className="mt-7 grid gap-4 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          {fields.map((field) => (
            <div key={field.name} className={field.half ? '' : 'sm:col-span-2'}>
              <label
                htmlFor={field.name}
                className="text-sm font-semibold text-navy-dark"
              >
                {field.label}
                {field.required && <span className="text-brand"> *</span>}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="mt-2 h-12 w-full rounded-md border border-hairline bg-surface px-4 text-[15px] text-foreground focus:border-sky focus:bg-background focus:outline-2 focus:outline-offset-2 focus:outline-sky"
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label htmlFor="nhuCau" className="text-sm font-semibold text-navy-dark">
              Nhu cầu hỗ trợ
            </label>
            <select
              id="nhuCau"
              name="nhuCau"
              defaultValue=""
              className="mt-2 h-12 w-full rounded-md border border-hairline bg-surface px-4 text-[15px] text-foreground focus:border-sky focus:bg-background focus:outline-2 focus:outline-offset-2 focus:outline-sky"
            >
              <option value="" disabled>
                Chọn nhu cầu hỗ trợ
              </option>
              {supportOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="noiDung" className="text-sm font-semibold text-navy-dark">
              Nội dung
            </label>
            <textarea
              id="noiDung"
              name="noiDung"
              rows={5}
              placeholder="Mô tả ngắn về lô hàng, mặt hàng, số lượng và mong muốn hỗ trợ..."
              className="mt-2 w-full rounded-md border border-hairline bg-surface px-4 py-3 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground focus:border-sky focus:bg-background focus:outline-2 focus:outline-offset-2 focus:outline-sky"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="h-12 w-full rounded-md bg-brand px-8 text-[13px] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#d63a29] sm:w-auto"
            >
              Gửi yêu cầu
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
