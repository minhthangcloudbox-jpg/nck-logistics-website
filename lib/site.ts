export const siteNav = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Giải pháp & Dịch vụ', href: '/giai-phap-dich-vu' },
  { label: 'Thư viện Kiến thức', href: '/thu-vien-kien-thuc' },
  { label: 'Góc thực tập', href: '/goc-thuc-tap' },
  { label: 'Blog / Tin tức', href: '/blog' },
  { label: 'Tài liệu tải về', href: '/tai-lieu-tai-ve' },
  { label: 'Liên hệ', href: '/lien-he' },
]

export const company = {
  name: 'NCK LOGISTICS CO., LTD',
  tagline: 'Global Freight Forwarding | Customs Procedure Consultation',
  email: 'mng@ncklogistics.vn',
  phone: '+84 936 170 294',
  zalo: '+84 936 170 294',
  whatsapp: '+84 936 170 294',
  wechat: 'mng-ncklogistics',
  address: '115/10A Lê Đức Thọ, Phường 17, Quận Gò Vấp, TP. Hồ Chí Minh',
  haiPhong: 'Kiot 8, Số 1 Đoạn Xá, Đông Hải 1, Hải An, Hải Phòng',
  haNoi: 'Số 10, Ngõ 109 Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội',
  customsBroker: '0239/2023/KHQ',
  copyright: '© 2026 NCK Logistics Co., Ltd. All rights reserved.',
}

export const footerColumns = [
  {
    title: 'Dịch vụ',
    links: [
      { label: 'Vận chuyển quốc tế', href: '/giai-phap-dich-vu#van-chuyen-quoc-te' },
      { label: 'Khai báo & tư vấn hải quan', href: '/giai-phap-dich-vu#thu-tuc-hai-quan' },
      { label: 'Đại lý hải quan', href: '/#dai-ly-hai-quan' },
      { label: 'Vận chuyển nội địa', href: '/giai-phap-dich-vu#van-chuyen-noi-dia' },
      { label: 'Ủy thác xuất nhập khẩu', href: '/giai-phap-dich-vu#uy-thac-xuat-nhap-khau' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Thư viện Kiến thức', href: '/thu-vien-kien-thuc' },
      { label: 'Góc thực tập', href: '/goc-thuc-tap' },
      { label: 'Tài liệu tải về', href: '/tai-lieu-tai-ve' },
      { label: 'Liên hệ', href: '/lien-he' },
    ],
  },
]

export const coreServices = [
  {
    id: 'van-chuyen-quoc-te',
    title: 'Vận chuyển quốc tế',
    description: 'Đường biển và hàng không quốc tế, kết nối tuyến phù hợp, lịch trình rõ ràng và theo dõi xuyên suốt.',
    icon: 'ship',
    href: '/giai-phap-dich-vu#van-chuyen-quoc-te',
  },
  {
    id: 'khai-bao-tu-van-hai-quan',
    title: 'Khai báo, định hàng & tư vấn thủ tục hải quan',
    description: 'Rà soát chính sách, tư vấn mã HS, mô tả hàng hóa, chuẩn hóa chứng từ và khai báo đúng quy định.',
    icon: 'clipboard',
    href: '/giai-phap-dich-vu#thu-tuc-hai-quan',
  },
  {
    id: 'cho-thue-chung-chi-so',
    title: 'Cho thuê chứng chỉ số',
    description: 'Hỗ trợ chứng chỉ số phục vụ khai báo và giao dịch điện tử theo nhu cầu thực tế của doanh nghiệp.',
    icon: 'key',
    href: '/lien-he?nhu-cau=chung-chi-so',
  },
  {
    id: 'dai-ly-hai-quan',
    title: 'Đại lý hải quan',
    description: 'Thực hiện nghiệp vụ với tư cách đại lý làm thủ tục hải quan, phối hợp hồ sơ và chuyên ngành theo quy định.',
    icon: 'shield',
    href: '/#dai-ly-hai-quan',
  },
  {
    id: 'van-chuyen-noi-dia',
    title: 'Vận chuyển nội địa',
    description: 'Vận chuyển container, hàng lẻ và hàng dự án từ cảng/kho đến nhà máy, kho bãi trên toàn quốc.',
    icon: 'truck',
    href: '/giai-phap-dich-vu#van-chuyen-noi-dia',
  },
  {
    id: 'uy-thac-xuat-nhap-khau',
    title: 'Ủy thác xuất nhập khẩu',
    description: 'Đại diện doanh nghiệp trong giao dịch, chứng từ, thanh toán và tổ chức giao nhận hàng hóa.',
    icon: 'globe',
    href: '/giai-phap-dich-vu#uy-thac-xuat-nhap-khau',
  },
] as const
