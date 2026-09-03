/* ---------------------------------------------------------------------------
 * Dữ liệu nội dung dùng chung cho toàn bộ website NCK Logistics.
 * Các đường dẫn tài liệu (`file`) là placeholder, thay bằng URL thật khi có.
 * ------------------------------------------------------------------------- */

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  imageAlt: string
}

/* Bài hướng dẫn được quan tâm — dùng ở Thư viện Kiến thức, Trang chủ, Blog */
export const featuredGuides: Article[] = [
  {
    slug: 'quy-trinh-khai-bao-hai-quan',
    title: 'Quy trình khai báo hải quan dành cho doanh nghiệp mới',
    excerpt:
      'Các bước khai báo từ chuẩn bị chứng từ, truyền tờ khai đến thông quan và nhận hàng.',
    category: 'Thủ tục hải quan',
    readTime: '12 phút đọc',
    image: '/images/policy-review.png',
    imageAlt: 'Rà soát hồ sơ khai báo hải quan cùng máy tính và tài liệu',
  },
  {
    slug: 'checklist-chung-tu-xnk',
    title: 'Checklist chứng từ xuất nhập khẩu theo từng loại hình',
    excerpt:
      'Danh sách chứng từ bắt buộc và chứng từ bổ sung theo từng loại hình vận chuyển.',
    category: 'Chứng từ XNK',
    readTime: '6 phút đọc',
    image: '/images/document-stack.png',
    imageAlt: 'Các tập chứng từ xuất nhập khẩu được kẹp gọn trên bàn làm việc',
  },
  {
    slug: 'cach-doc-bill-of-lading',
    title: 'Cách đọc Bill of Lading và các thông tin cần kiểm tra',
    excerpt:
      'Hiểu từng ô thông tin trên vận đơn để phát hiện sai sót trước khi hàng rời cảng.',
    category: 'Vận tải & Giao nhận',
    readTime: '8 phút đọc',
    image: '/images/cargo-ship.png',
    imageAlt: 'Tàu container chở hàng trên biển',
  },
  {
    slug: 'loi-thuong-gap-khi-khai-bao',
    title: 'Những lỗi thường gặp khi khai báo và cách xử lý',
    excerpt:
      'Các lỗi phổ biến về mã HS, trị giá, đơn vị tính và hướng khắc phục thực tế.',
    category: 'Thủ tục hải quan',
    readTime: '7 phút đọc',
    image: '/images/form-signing.png',
    imageAlt: 'Điền thông tin vào biểu mẫu nghiệp vụ xuất nhập khẩu',
  },
]

/* Tra cứu theo nhu cầu — nội dung 3 tab */
export const lookupTabs = [
  {
    id: 'doanh-nghiep',
    label: 'Doanh nghiệp',
    items: [
      {
        title: 'Quy trình khai báo hải quan',
        text: 'Các bước khai báo tờ khai điện tử, luồng tờ khai và thông quan hàng hóa.',
        tag: 'Thủ tục hải quan',
      },
      {
        title: 'Kiểm tra chính sách mặt hàng trước khi nhập khẩu',
        text: 'Hướng dẫn tra cứu chính sách quản lý, điều kiện và giấy phép liên quan.',
        tag: 'Chính sách',
      },
      {
        title: 'Hướng dẫn xác định và kiểm tra mã HS',
        text: 'Cách xác định mã HS, tra cứu và kiểm tra mã trước khi khai báo.',
        tag: 'Mã HS & Thuế',
      },
      {
        title: 'Bộ chứng từ nhập khẩu gồm những gì?',
        text: 'Danh sách chứng từ bắt buộc và chứng từ bổ sung theo từng trường hợp.',
        tag: 'Chứng từ XNK',
      },
      {
        title: 'Cách xử lý tờ khai luồng vàng, luồng đỏ',
        text: 'Hướng dẫn xử lý hồ sơ khi tờ khai thuộc luồng vàng hoặc luồng đỏ.',
        tag: 'Thủ tục hải quan',
      },
      {
        title: 'Các khoản thuế thường gặp khi nhập khẩu',
        text: 'Tổng hợp các loại thuế, phí và cách tính khi nhập khẩu hàng hóa.',
        tag: 'Mã HS & Thuế',
      },
    ],
  },
  {
    id: 'nguoi-moi',
    label: 'Người mới',
    items: [
      {
        title: 'Xuất nhập khẩu hoạt động như thế nào?',
        text: 'Tổng quan dòng hàng, dòng chứng từ và dòng tiền trong một lô hàng.',
        tag: 'Tổng quan',
      },
      {
        title: 'Incoterms cơ bản cần nắm',
        text: 'Phân chia trách nhiệm, chi phí và rủi ro giữa người bán và người mua.',
        tag: 'Incoterms',
      },
      {
        title: 'Đọc hiểu Invoice và Packing List',
        text: 'Ý nghĩa từng dòng thông tin và cách đối chiếu giữa hai chứng từ.',
        tag: 'Chứng từ XNK',
      },
      {
        title: 'Mã HS là gì và tại sao quan trọng?',
        text: 'Vai trò của mã HS với thuế suất, chính sách và kiểm tra chuyên ngành.',
        tag: 'Mã HS & Thuế',
      },
      {
        title: 'Các bên tham gia một lô hàng',
        text: 'Vai trò của shipper, forwarder, hãng tàu, hải quan và người nhận hàng.',
        tag: 'Tổng quan',
      },
      {
        title: 'Thuật ngữ viết tắt thường dùng',
        text: 'Giải nghĩa FCL, LCL, CBM, ETD, ETA, D/O, B/L và các thuật ngữ khác.',
        tag: 'Tổng quan',
      },
    ],
  },
  {
    id: 'nhom-mat-hang',
    label: 'Theo nhóm mặt hàng',
    items: [
      {
        title: 'Phân bón – chính sách và điều kiện nhập khẩu',
        text: 'Quy định quản lý, khảo nghiệm và hồ sơ cần chuẩn bị cho phân bón.',
        tag: 'Phân bón',
      },
      {
        title: 'Nông sản – kiểm dịch thực vật',
        text: 'Trình tự kiểm dịch, hồ sơ và các lưu ý về thời gian thông quan.',
        tag: 'Nông sản',
      },
      {
        title: 'Thức ăn chăn nuôi – công bố hợp quy',
        text: 'Điều kiện nhập khẩu, công bố và kiểm tra chất lượng theo quy định.',
        tag: 'Thức ăn chăn nuôi',
      },
      {
        title: 'Máy móc – thiết bị đã qua sử dụng',
        text: 'Điều kiện tuổi thiết bị, hồ sơ chứng minh và giám định khi nhập khẩu.',
        tag: 'Máy móc',
      },
      {
        title: 'Hóa chất – khai báo và phân loại',
        text: 'Khai báo hóa chất, phân loại nguy hại và hồ sơ an toàn cần có.',
        tag: 'Hóa chất',
      },
      {
        title: 'Hàng dự án – phương án vận chuyển riêng',
        text: 'Khảo sát tuyến, thiết bị nâng hạ và phối hợp giao nhận tại công trình.',
        tag: 'Hàng dự án',
      },
    ],
  },
]

/* Kiến thức theo chủ đề */
export const knowledgeTopics = [
  {
    title: 'Thủ tục theo mặt hàng',
    text: 'Quy trình, điều kiện và thủ tục theo từng mặt hàng.',
    icon: 'package',
  },
  {
    title: 'Mã HS & Thuế',
    text: 'Cách tra cứu mã HS, thuế nhập khẩu và các loại thuế.',
    icon: 'barcode',
  },
  {
    title: 'Chứng từ XNK',
    text: 'Hướng dẫn bộ chứng từ và yêu cầu chi tiết.',
    icon: 'file',
  },
  {
    title: 'Chính sách chuyên ngành',
    text: 'Quy định quản lý, kiểm tra chuyên ngành và giấy phép.',
    icon: 'shield',
  },
  {
    title: 'Vận tải & Giao nhận',
    text: 'Vận chuyển quốc tế, Incoterms và giao nhận hàng hóa.',
    icon: 'truck',
  },
  {
    title: 'Xử lý vướng mắc',
    text: 'Hướng xử lý các tình huống thường gặp trong thực tế.',
    icon: 'headset',
  },
]

/* Cập nhật chính sách mới */
export const policyUpdates = [
  {
    title: 'Quy định quản lý hàng hóa sau ngày 01/07',
    text: 'Tổng hợp các điểm mới về quản lý hàng hóa và lưu ý khi thực hiện.',
    date: 'Cập nhật gần đây',
    isNew: true,
    icon: 'file',
  },
  {
    title: 'Danh mục hàng hóa có rủi ro',
    text: 'Danh mục hàng hóa áp dụng quản lý rủi ro trong hoạt động XNK.',
    date: 'Cập nhật gần đây',
    isNew: true,
    icon: 'shield',
  },
  {
    title: 'Những thay đổi doanh nghiệp cần lưu ý',
    text: 'Các điểm thay đổi quan trọng cần cập nhật trong thời gian gần đây.',
    date: 'Cập nhật gần đây',
    isNew: true,
    icon: 'scale',
  },
]

/* Biểu mẫu & checklist dùng ngay */
export type DownloadItem = {
  title: string
  text: string
  format: 'PDF' | 'XLSX' | 'DOCX'
  size: string
  file: string
  category: string
}

export const downloads: DownloadItem[] = [
  {
    title: 'Checklist chứng từ XNK',
    text: 'Danh sách chứng từ theo từng loại hình và phương thức vận chuyển.',
    format: 'PDF',
    size: '256 KB',
    file: '#tai-lieu-checklist-chung-tu-xnk',
    category: 'Checklist',
  },
  {
    title: 'Mẫu Commercial Invoice',
    text: 'Mẫu hóa đơn thương mại dùng cho xuất nhập khẩu.',
    format: 'XLSX',
    size: '98 KB',
    file: '#tai-lieu-mau-invoice',
    category: 'Invoice / Packing List',
  },
  {
    title: 'Mẫu Packing List',
    text: 'Mẫu bảng kê đóng gói hàng hóa theo chuẩn thông dụng.',
    format: 'XLSX',
    size: '112 KB',
    file: '#tai-lieu-mau-packing-list',
    category: 'Invoice / Packing List',
  },
  {
    title: 'Phiếu phân tích mặt hàng',
    text: 'Mẫu phiếu thu thập thông tin để xác định mã HS và mô tả hàng hóa.',
    format: 'PDF',
    size: '180 KB',
    file: '#tai-lieu-phieu-phan-tich-mat-hang',
    category: 'Biểu mẫu nghiệp vụ',
  },
  {
    title: 'Checklist hồ sơ hải quan nhập khẩu',
    text: 'Các đầu mục hồ sơ cần rà soát trước khi truyền tờ khai nhập khẩu.',
    format: 'PDF',
    size: '210 KB',
    file: '#tai-lieu-checklist-ho-so-hai-quan',
    category: 'Hải quan',
  },
  {
    title: 'Mẫu giấy uỷ quyền làm thủ tục hải quan',
    text: 'Mẫu uỷ quyền cho đại lý làm thủ tục hải quan thay doanh nghiệp.',
    format: 'DOCX',
    size: '64 KB',
    file: '#tai-lieu-mau-uy-quyen-hai-quan',
    category: 'Hải quan',
  },
  {
    title: 'Bảng thông tin lô hàng gửi NCK',
    text: 'Mẫu thu thập thông tin lô hàng để NCK đề xuất phương án phù hợp.',
    format: 'XLSX',
    size: '88 KB',
    file: '#tai-lieu-thong-tin-lo-hang',
    category: 'Biểu mẫu nghiệp vụ',
  },
  {
    title: 'Checklist kiểm tra trước khi book tàu',
    text: 'Các nội dung cần xác nhận với hãng tàu và người bán trước khi đặt chỗ.',
    format: 'PDF',
    size: '164 KB',
    file: '#tai-lieu-checklist-book-tau',
    category: 'Vận tải',
  },
  {
    title: 'Mẫu bảng kê chứng từ giao nhận',
    text: 'Bảng kê chứng từ bàn giao giữa doanh nghiệp và đơn vị giao nhận.',
    format: 'DOCX',
    size: '72 KB',
    file: '#tai-lieu-bang-ke-chung-tu',
    category: 'Chứng từ XNK',
  },
  {
    title: 'Mẫu hợp đồng uỷ thác xuất nhập khẩu',
    text: 'Khung hợp đồng uỷ thác với các điều khoản trách nhiệm và thanh toán.',
    format: 'DOCX',
    size: '124 KB',
    file: '#tai-lieu-hop-dong-uy-thac',
    category: 'Chứng từ XNK',
  },
  {
    title: 'Checklist giao nhận tại cảng và kho',
    text: 'Các bước xác nhận khi nhận container tại cảng và giao hàng tại kho.',
    format: 'PDF',
    size: '198 KB',
    file: '#tai-lieu-checklist-giao-nhan',
    category: 'Vận tải',
  },
  {
    title: 'Mẫu biên bản bàn giao hàng hóa',
    text: 'Biên bản ghi nhận tình trạng hàng hóa khi bàn giao thực tế.',
    format: 'DOCX',
    size: '68 KB',
    file: '#tai-lieu-bien-ban-ban-giao',
    category: 'Biểu mẫu nghiệp vụ',
  },
]

export const downloadCategories = [
  'Tất cả',
  'Chứng từ XNK',
  'Hải quan',
  'Vận tải',
  'Invoice / Packing List',
  'Checklist',
  'Biểu mẫu nghiệp vụ',
]

/* Giải pháp & Dịch vụ — 4 nhóm giải pháp */
export const solutionBlocks = [
  {
    id: 'van-chuyen-quoc-te',
    letter: 'A',
    title: 'Vận chuyển quốc tế',
    image: '/images/cargo-ship.png',
    imageAlt: 'Tàu container chở hàng trên tuyến vận tải quốc tế',
    problems: [
      'Chưa chọn được tuyến, chi phí cao',
      'Lịch tàu / chuyến bay không phù hợp',
      'Thiếu cập nhật hành trình lô hàng',
    ],
    solutions: [
      'Tư vấn tuyến và hãng tối ưu',
      'Đặt chỗ ổn định, đúng lịch trình',
      'Theo dõi hành trình theo thời gian thực',
    ],
  },
  {
    id: 'thu-tuc-hai-quan',
    letter: 'B',
    title: 'Thủ tục hải quan',
    image: '/images/customs-declaration-laptop.png',
    imageAlt: 'Khai báo hải quan điện tử trên máy tính cùng bộ hồ sơ',
    problems: [
      'Không xác định đúng chính sách',
      'Sai mã HS hoặc thiếu chứng từ',
      'Khai báo chậm, phát sinh chi phí',
    ],
    solutions: [
      'Kiểm tra chính sách và mã HS',
      'Rà soát chứng từ trước khi khai',
      'Khai báo và phối hợp thông quan',
    ],
  },
  {
    id: 'van-chuyen-noi-dia',
    letter: 'C',
    title: 'Vận chuyển nội địa',
    image: '/images/warehouse-truck.png',
    imageAlt: 'Xe đầu kéo container tại kho hàng nội địa',
    problems: [
      'Khó tìm xe và thiết bị phù hợp',
      'Giao nhận chậm, thiếu linh hoạt',
      'Kết nối cảng – kho – nhà máy phức tạp',
    ],
    solutions: [
      'Cung cấp xe container và hàng lẻ',
      'Lên lịch giao nhận linh hoạt',
      'Kết nối cảng – kho – nhà máy trọn gói',
    ],
  },
  {
    id: 'uy-thac-xuat-nhap-khau',
    letter: 'D',
    title: 'Ủy thác xuất nhập khẩu',
    image: '/images/handshake-contract.png',
    imageAlt: 'Ký kết hợp đồng uỷ thác xuất nhập khẩu',
    problems: [
      'Thiếu nhân sự và kinh nghiệm',
      'Rủi ro chứng từ và thanh toán',
      'Tốn thời gian xử lý từng khâu',
    ],
    solutions: [
      'Ký hợp đồng uỷ thác rõ ràng',
      'Chuẩn bị chứng từ và thanh toán',
      'Thực hiện trọn gói từ A–Z',
    ],
  },
]

/* Quy trình 5 bước */
export const processSteps = [
  { step: '01', title: 'Tiếp nhận thông tin', icon: 'inbox' },
  { step: '02', title: 'Kiểm tra chính sách', icon: 'shield' },
  { step: '03', title: 'Xây dựng phương án', icon: 'clipboard' },
  { step: '04', title: 'Thực hiện & theo dõi', icon: 'crane' },
  { step: '05', title: 'Giao hàng & hoàn tất', icon: 'check' },
]

/* Blog / Tin tức */
export const blogPosts: (Article & { date: string })[] = [
  {
    slug: 'cap-nhat-quy-dinh-quan-ly-hang-hoa',
    title: 'Cập nhật quy định quản lý hàng hóa xuất nhập khẩu',
    excerpt:
      'Tổng hợp các điểm mới trong quy định quản lý hàng hóa và ảnh hưởng tới doanh nghiệp nhập khẩu.',
    category: 'Chính sách',
    readTime: '9 phút đọc',
    date: 'Cập nhật gần đây',
    image: '/images/policy-review.png',
    imageAlt: 'Rà soát văn bản chính sách xuất nhập khẩu',
  },
  {
    slug: 'kinh-nghiem-thong-quan-lo-phan-bon',
    title: 'Kinh nghiệm thông quan lô phân bón nhập khẩu',
    excerpt:
      'Câu chuyện thực tế về rà soát chính sách, chuẩn hóa hồ sơ và phối hợp kiểm tra chuyên ngành.',
    category: 'Case thực tế',
    readTime: '11 phút đọc',
    date: 'Cập nhật gần đây',
    image: '/images/cargo-fertilizer.png',
    imageAlt: 'Bao phân bón hạt nhập khẩu',
  },
  {
    slug: 'luu-y-khi-nhap-may-moc-da-qua-su-dung',
    title: 'Lưu ý khi nhập khẩu máy móc đã qua sử dụng',
    excerpt:
      'Điều kiện tuổi thiết bị, hồ sơ giám định và các rủi ro thường gặp cần chuẩn bị trước.',
    category: 'Nghiệp vụ',
    readTime: '8 phút đọc',
    date: 'Cập nhật gần đây',
    image: '/images/cargo-machinery.png',
    imageAlt: 'Máy móc thiết bị công nghiệp',
  },
  {
    slug: 'bien-dong-gia-cuoc-va-lich-tau',
    title: 'Biến động giá cước và lịch tàu tác động tới kế hoạch nhập hàng',
    excerpt:
      'Cách theo dõi lịch tàu, đặt chỗ sớm và xây dựng phương án dự phòng cho lô hàng.',
    category: 'Tin logistics',
    readTime: '7 phút đọc',
    date: 'Cập nhật gần đây',
    image: '/images/cargo-ship.png',
    imageAlt: 'Tàu container trên biển',
  },
  {
    slug: 'ho-so-hai-quan-luong-do',
    title: 'Hồ sơ hải quan luồng đỏ: chuẩn bị gì để kiểm hóa nhanh?',
    excerpt:
      'Chuẩn bị chứng từ, bố trí nhân sự và phối hợp kiểm hóa để giảm thời gian lưu bãi.',
    category: 'Tin hải quan',
    readTime: '10 phút đọc',
    date: 'Cập nhật gần đây',
    image: '/images/container-yard.png',
    imageAlt: 'Bãi container tại cảng',
  },
  {
    slug: 'toi-uu-chi-phi-van-chuyen-noi-dia',
    title: 'Tối ưu chi phí vận chuyển nội địa từ cảng về nhà máy',
    excerpt:
      'Ghép chuyến, lên lịch giao nhận và kết nối kho bãi để giảm chi phí phát sinh.',
    category: 'Nghiệp vụ',
    readTime: '6 phút đọc',
    date: 'Cập nhật gần đây',
    image: '/images/warehouse-truck.png',
    imageAlt: 'Xe container tại kho hàng',
  },
  {
    slug: 'chuan-hoa-bo-chung-tu-truoc-khi-hang-den',
    title: 'Chuẩn hóa bộ chứng từ trước khi hàng đến cảng',
    excerpt:
      'Danh mục kiểm tra chứng từ giúp hạn chế sửa tờ khai và phát sinh chi phí lưu container.',
    category: 'Nghiệp vụ',
    readTime: '8 phút đọc',
    date: 'Cập nhật gần đây',
    image: '/images/document-stack.png',
    imageAlt: 'Tập chứng từ xuất nhập khẩu',
  },
]

export const blogCategories = [
  'Tất cả',
  'Chính sách',
  'Tin hải quan',
  'Tin logistics',
  'Nghiệp vụ',
  'Case thực tế',
]

/* Góc thực tập */
export const internshipStarters = [
  {
    title: 'Tổng quan xuất nhập khẩu',
    text: 'Dòng hàng, dòng chứng từ và dòng tiền trong một lô hàng thực tế.',
    icon: 'globe',
  },
  {
    title: 'Bộ chứng từ cơ bản',
    text: 'Invoice, Packing List, B/L, C/O và vai trò của từng chứng từ.',
    icon: 'file',
  },
  {
    title: 'Incoterms',
    text: 'Phân chia trách nhiệm, chi phí và rủi ro giữa các bên.',
    icon: 'scale',
  },
  {
    title: 'Mã HS',
    text: 'Cách đọc biểu thuế, xác định và kiểm tra mã HS trước khi khai.',
    icon: 'barcode',
  },
  {
    title: 'Hải quan',
    text: 'Luồng tờ khai, hồ sơ kiểm tra và trình tự thông quan.',
    icon: 'shield',
  },
  {
    title: 'Vận tải quốc tế',
    text: 'FCL, LCL, lịch tàu, đặt chỗ và theo dõi hành trình lô hàng.',
    icon: 'ship',
  },
]

export const internshipRoadmap = [
  { step: '01', title: 'Nắm quy trình tổng thể', icon: 'inbox' },
  { step: '02', title: 'Hiểu chứng từ', icon: 'file' },
  { step: '03', title: 'Học khai báo', icon: 'clipboard' },
  { step: '04', title: 'Xử lý tình huống', icon: 'shield' },
  { step: '05', title: 'Thực hành lô hàng', icon: 'check' },
]

export const internshipArticles: Article[] = [
  {
    slug: 'doc-hieu-mot-bo-chung-tu',
    title: 'Đọc hiểu một bộ chứng từ nhập khẩu hoàn chỉnh',
    excerpt: 'Đi qua từng chứng từ trong một lô hàng thật và cách đối chiếu thông tin.',
    category: 'Chứng từ XNK',
    readTime: '10 phút đọc',
    image: '/images/document-stack.png',
    imageAlt: 'Bộ chứng từ nhập khẩu trên bàn làm việc',
  },
  {
    slug: 'tap-tra-cuu-ma-hs',
    title: 'Tập tra cứu mã HS cho một mặt hàng cụ thể',
    excerpt: 'Cách phân tích mô tả hàng hóa, tra biểu thuế và kiểm tra lại kết quả.',
    category: 'Mã HS & Thuế',
    readTime: '9 phút đọc',
    image: '/images/policy-review.png',
    imageAlt: 'Tra cứu biểu thuế và mã HS',
  },
  {
    slug: 'quan-sat-mot-lan-kiem-hoa',
    title: 'Quan sát một lần kiểm hóa tại cảng',
    excerpt: 'Trình tự làm việc tại bãi, chuẩn bị nhân sự và các lưu ý an toàn.',
    category: 'Thủ tục hải quan',
    readTime: '7 phút đọc',
    image: '/images/container-yard.png',
    imageAlt: 'Bãi container tại cảng biển',
  },
  {
    slug: 'khai-bao-hai-quan-cho-nguoi-moi',
    title: 'Hướng dẫn khai báo hải quan cho người mới',
    excerpt: 'Làm quen màn hình khai báo, kiểm tra chỉ tiêu và những lỗi cơ bản trước khi truyền tờ khai.',
    category: 'Hải quan',
    readTime: '8 phút đọc',
    image: '/images/customs-declaration-laptop.png',
    imageAlt: 'Thực hành nghiệp vụ khai báo trên máy tính cùng bộ chứng từ',
  },
]

export const internshipCases = [
  {
    title: 'Lô hàng sai mô tả trên Invoice',
    text: 'Phát hiện sai lệch mô tả giữa Invoice và thực tế, cách làm việc với người bán để chỉnh sửa trước khi khai báo.',
    image: '/images/form-signing.png',
    imageAlt: 'Kiểm tra và đối chiếu chứng từ thương mại',
  },
  {
    title: 'Hàng thuộc diện kiểm tra chuyên ngành',
    text: 'Trình tự đăng ký kiểm tra, phối hợp lấy mẫu và theo dõi kết quả để thông quan đúng hạn.',
    image: '/images/document-stack.png',
    imageAlt: 'Hồ sơ phục vụ kiểm tra chuyên ngành',
  },
  {
    title: 'Container về trễ so với kế hoạch',
    text: 'Cách cập nhật lại lịch giao nhận, thông báo nhà máy và giảm chi phí lưu bãi phát sinh.',
    image: '/images/container-yard.png',
    imageAlt: 'Container tại bãi cảng chờ kế hoạch giao nhận',
  },
  {
    title: 'Thiếu chứng từ C/O khi hàng đã đến',
    text: 'Phương án xử lý khi chứng từ ưu đãi chưa về kịp và các mốc thời gian cần theo dõi.',
    image: '/images/policy-review.png',
    imageAlt: 'Rà soát hồ sơ xuất nhập khẩu và chứng từ ưu đãi',
  },
]

/* Kinh nghiệm từ những lô hàng thực tế — dùng ở trang Giới thiệu */
export const experienceCards = [
  {
    title: 'Rà soát chính sách',
    text: 'Rà soát chính sách, mã HS, thuế suất, điều kiện và quy định liên quan để tư vấn phương án hiệu quả cho doanh nghiệp.',
    image: '/images/customs-declaration-laptop.png',
    imageAlt: 'Rà soát chính sách và hồ sơ hải quan trên hệ thống điện tử',
  },
  {
    title: 'Chuẩn hóa hồ sơ',
    text: 'Chuẩn hóa chứng từ, kiểm tra chi tiết và hoàn thiện hồ sơ đúng quy định, hạn chế rủi ro và phát sinh chi phí.',
    image: '/images/customs-documents.png',
    imageAlt: 'Bộ chứng từ xuất nhập khẩu được kiểm tra và chuẩn hóa',
  },
  {
    title: 'Phối hợp giao nhận',
    text: 'Phối hợp chặt chẽ với hãng tàu, cảng, kho và cơ quan chức năng để giao nhận đúng hẹn, đúng địa điểm.',
    image: '/images/warehouse-truck.png',
    imageAlt: 'Phối hợp giao nhận hàng hóa tại kho và cảng',
  },
]

/* Nhóm vấn đề cần xử lý — trang Giải pháp */
export const problemCards = [
  {
    title: 'Doanh nghiệp mới nhập khẩu',
    text: 'Chưa rõ quy trình, chứng từ và các bước thực hiện.',
    icon: 'building',
    href: '#giai-phap',
  },
  {
    title: 'Chính sách mặt hàng',
    text: 'Không chắc mặt hàng có được phép nhập khẩu hay không.',
    icon: 'shield',
    href: '#thu-tuc-hai-quan',
  },
  {
    title: 'Cần vận chuyển container',
    text: 'Cần tìm tuyến phù hợp, ổn định và đúng thời gian.',
    icon: 'container',
    href: '#van-chuyen-noi-dia',
  },
  {
    title: 'Cần tuyến quốc tế',
    text: 'Tìm tuyến, hãng tàu / hàng không, giá cước và lịch trình phù hợp.',
    icon: 'globe',
    href: '#van-chuyen-quoc-te',
  },
]

/* Chọn giải pháp phù hợp */
export const customerGroups = [
  {
    title: 'Doanh nghiệp nhập khẩu lần đầu',
    icon: 'building',
    items: [
      'Kiểm tra chính sách & mã HS',
      'Hướng dẫn chuẩn bị chứng từ',
      'Khai báo hải quan',
      'Giao nhận hàng hóa',
    ],
  },
  {
    title: 'Nhà máy có lô hàng thường xuyên',
    icon: 'factory',
    items: [
      'Tuyến vận chuyển ổn định',
      'Đặt chỗ & theo dõi định kỳ',
      'Vận chuyển nội địa',
      'Báo cáo & tối ưu chi phí',
    ],
  },
  {
    title: 'Hàng dự án hoặc có chính sách riêng',
    icon: 'clipboard',
    items: [
      'Tư vấn chính sách chuyên sâu',
      'Phương án vận chuyển riêng',
      'Xử lý hồ sơ & xin phép',
      'Giám sát đến khi giao hàng',
    ],
  },
]

/* Quick filters ở hero Thư viện Kiến thức */
export const knowledgeFilters = [
  'Mã HS',
  'Thuế nhập khẩu',
  'Kiểm tra chuyên ngành',
  'C/O',
  'Nhãn hàng hóa',
  'Hồ sơ hải quan',
]
