import type {
  Artifact,
  Article,
  Category,
  Collection,
  ContactMessage,
  EventItem,
  GroupSchedule,
  MuseumRoom,
  TourBooking,
} from './types';

export const mockCategories: Category[] = [
  {
    id: 'cat-1',
    name: 'Dừa Sáp',
    description: 'Các hiện vật liên quan đến giống dừa đặc biệt Dừa Sáp',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'cat-2',
    name: 'Công cụ truyền thống',
    description: 'Dụng cụ sản xuất, chế biến dừa truyền thống',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'cat-3',
    name: 'Sản phẩm chế biến',
    description: 'Các sản phẩm từ dừa Cầu Kè',
    created_at: '2024-01-01T00:00:00Z',
  },
];

export const mockCollections: Collection[] = [
  {
    id: 'col-1',
    name: 'Bộ sưu tập gốc Cầu Kè',
    description: 'Dừa gốc từ các vườn lâu đời tại Cầu Kè',
    category_id: 'cat-1',
    created_at: '2024-01-01T00:00:00Z',
    category: mockCategories[0],
  },
  {
    id: 'col-2',
    name: 'Dụng cụ thủ công',
    description: 'Công cụ thủ công nghề dừa',
    category_id: 'cat-2',
    created_at: '2024-01-01T00:00:00Z',
    category: mockCategories[1],
  },
  {
    id: 'col-3',
    name: 'Sản phẩm đặc trưng',
    description: 'Sản phẩm nổi tiếng từ dừa sáp',
    category_id: 'cat-3',
    created_at: '2024-01-01T00:00:00Z',
    category: mockCategories[2],
  },
];

export const mockArtifacts: Artifact[] = [
  {
    id: 'art-1',
    name: 'Quả Dừa Sáp nguyên bản',
    description:
      'Quả dừa sáp nguyên bản từ vườn dừa lâu đời nhất tại Cầu Kè, Trà Vinh. Đây là giống dừa đột biến tự nhiên độc đáo, phần cơm đặc như thạch thay vì dạng nước thông thường. Khi lắc quả dừa sáp không nghe tiếng nước bên trong — đây là cách người dân nhận biết quả sáp từ xưa đến nay.',
    origin: 'Cầu Kè, Trà Vinh',
    era: 'Đầu thế kỷ XX',
    material: 'Tự nhiên',
    collection_id: 'col-1',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1565608438257-fac3c27bdbca?w=800&q=80',
    view_count: 128,
    created_at: '2024-01-01T00:00:00Z',
    collection: mockCollections[0],
  },
  {
    id: 'art-2',
    name: 'Cái nạo dừa cổ',
    description:
      'Dụng cụ nạo cơm dừa truyền thống được chế tác bằng gỗ mít và thanh kim loại rèn thủ công. Người ngồi trên ghế và nạo cơm dừa bằng cách miết quả dừa lên lưỡi dao. Vật dụng này đã được dùng trong hàng trăm hộ gia đình tại Cầu Kè qua nhiều thế hệ, phổ biến từ trước năm 1945.',
    origin: 'Cầu Kè, Trà Vinh',
    era: 'Giữa thế kỷ XX',
    material: 'Gỗ mít, kim loại rèn',
    collection_id: 'col-2',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=800&q=80',
    view_count: 95,
    created_at: '2024-01-02T00:00:00Z',
    collection: mockCollections[1],
  },
  {
    id: 'art-3',
    name: 'Kẹo dừa sáp thủ công',
    description:
      'Mẫu kẹo dừa sáp đặc trưng được chế biến theo phương pháp thủ công truyền thống của nghệ nhân Cầu Kè. Kẹo dừa sáp có hương vị thơm béo đặc biệt nhờ hàm lượng dầu cao và kết cấu mịn màng của cơm dừa sáp. Từng là đặc sản quý hiếm chỉ xuất hiện trong dịp lễ tết.',
    origin: 'Cầu Kè, Trà Vinh',
    era: 'Hiện đại (kế thừa truyền thống)',
    material: 'Dừa sáp, đường thốt nốt, malt',
    collection_id: 'col-3',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80',
    view_count: 74,
    created_at: '2024-01-03T00:00:00Z',
    collection: mockCollections[2],
  },
  {
    id: 'art-4',
    name: 'Tranh vẽ vườn dừa Cầu Kè',
    description:
      'Bức tranh sơn dầu khắc họa cảnh quan vườn dừa sáp tại Cầu Kè vào thập niên 1980. Tác phẩm của họa sĩ địa phương Trần Văn Minh ghi lại hình ảnh những hàng dừa cao vút, bóng mát và cuộc sống bình yên của người dân bản địa dưới tán dừa. Tranh được lưu trữ bởi gia đình nghệ sĩ và trao tặng bảo tàng năm 2018.',
    origin: 'Cầu Kè, Trà Vinh',
    era: 'Thập niên 1980',
    material: 'Sơn dầu trên canvas, 60×80 cm',
    collection_id: 'col-1',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    view_count: 52,
    created_at: '2024-01-04T00:00:00Z',
    collection: mockCollections[0],
  },
  {
    id: 'art-5',
    name: 'Bình nước bằng vỏ dừa',
    description:
      'Chiếc bình đựng nước được chế tác từ vỏ dừa khô, phủ sơn mài truyền thống. Nghệ nhân dùng kỹ thuật khắc chìm để tạo nên các hoa văn hình lá dừa và hoa sen. Đây là sản phẩm thủ công mỹ nghệ tiêu biểu của làng nghề Cầu Kè từ thế kỷ XIX.',
    origin: 'Cầu Kè, Trà Vinh',
    era: 'Cuối thế kỷ XIX',
    material: 'Vỏ dừa, sơn mài, dây thừng tự nhiên',
    collection_id: 'col-2',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
    view_count: 63,
    created_at: '2024-02-01T00:00:00Z',
    collection: mockCollections[1],
  },
  {
    id: 'art-6',
    name: 'Dầu dừa sáp ép lạnh',
    description:
      'Chai dầu dừa sáp nguyên chất ép lạnh theo phương pháp thủ công của hộ sản xuất truyền thống. Dầu dừa sáp có màu trắng đục đặc trưng, hàm lượng axit lauric cao vượt trội so với dừa thường. Sản phẩm này được giới thiệu trong các hội chợ nông sản đặc sản toàn quốc.',
    origin: 'Cầu Kè, Trà Vinh',
    era: 'Hiện đại',
    material: 'Dầu dừa sáp nguyên chất, bình thủy tinh',
    collection_id: 'col-3',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
    view_count: 31,
    created_at: '2024-02-15T00:00:00Z',
    collection: mockCollections[2],
  },
  {
    id: 'art-7',
    name: 'Chày và cối giã cơm dừa',
    description:
      'Bộ chày và cối bằng gỗ căm xe dùng để giã cơm dừa sáp tươi thành cơm nhuyễn — nguyên liệu chính chế biến các món ăn và đồ ngọt truyền thống. Bộ dụng cụ này có niên đại trên 80 năm, được tìm thấy trong căn nhà cổ tại xã Hòa Tân, Cầu Kè.',
    origin: 'Xã Hòa Tân, Cầu Kè, Trà Vinh',
    era: 'Đầu thế kỷ XX (khoảng 1930–1950)',
    material: 'Gỗ căm xe nguyên khối',
    collection_id: 'col-2',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1612539465579-7e8aaf38f34a?w=800&q=80',
    view_count: 19,
    created_at: '2024-03-01T00:00:00Z',
    collection: mockCollections[1],
  },
  {
    id: 'art-8',
    name: 'Rổ đan lá dừa truyền thống',
    description:
      'Chiếc rổ đan thủ công từ lá dừa tươi theo kỹ thuật đan chéo của người Khmer Cầu Kè. Mỗi chiếc rổ mất khoảng 3–4 giờ để hoàn thành. Đây là nghề phụ truyền thống của phụ nữ trong vùng, giúp tăng thu nhập từ nguồn nguyên liệu tại chỗ dồi dào.',
    origin: 'Cầu Kè, Trà Vinh',
    era: 'Truyền thống (thế kỷ XX)',
    material: 'Lá dừa tươi đan thủ công',
    collection_id: 'col-2',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=800&q=80',
    view_count: 44,
    created_at: '2024-03-15T00:00:00Z',
    collection: mockCollections[1],
  },
];

export const mockArticles: Article[] = [
  {
    id: 'arti-1',
    title: 'Nguồn gốc và đặc điểm độc đáo của Dừa Sáp Cầu Kè',
    content: `Dừa Sáp (Cocos nucifera L. var. Makapuno) là giống dừa đặc biệt xuất hiện do đột biến gen tự nhiên hiếm gặp. Thay vì hình thành nước dừa và cơm dừa như thông thường, toàn bộ phần bên trong quả dừa sáp đặc sệt, kết cấu như thạch dẻo với hương thơm nồng đặc trưng.

**Tại sao Cầu Kè?**

Cầu Kè (Trà Vinh) từ lâu được biết đến là "thủ phủ" dừa sáp của Việt Nam. Với hơn 300 năm lịch sử trồng trọt, người Khmer bản địa đã gìn giữ và phát triển giống dừa quý này qua nhiều thế hệ. Điều kiện thổ nhưỡng đặc thù của vùng đất Cầu Kè — đất phù sa pha sét, pH trung bình — được cho là yếu tố tạo nên hương vị khác biệt của dừa sáp nơi đây.

**Cách nhận biết quả dừa sáp**

- Lắc quả không nghe tiếng nước bên trong (không có nước dừa)
- Vỏ ngoài sần hơn, màu hơi sậm hơn dừa thường
- Cuống dày, quả nặng tay hơn cùng kích cỡ
- Tỷ lệ ra quả sáp trong một buồng dừa chỉ đạt 20–30%

**Giá trị dinh dưỡng**

Cơm dừa sáp chứa hàm lượng axit lauric lên đến 50%, cao hơn đáng kể so với dừa thường. Axit lauric là chất béo bão hòa có khả năng kháng khuẩn, kháng virus được y học hiện đại công nhận. Đây cũng là thành phần chính của sữa mẹ, làm cho dầu dừa sáp được ưa chuộng trong chăm sóc sức khỏe và làm đẹp tự nhiên.`,
    summary:
      'Tìm hiểu về nguồn gốc, đặc điểm nhận biết và giá trị dinh dưỡng vượt trội của giống dừa sáp quý hiếm Cầu Kè, Trà Vinh — niềm tự hào nông sản Việt Nam.',
    article_type: 'education',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&q=80',
    created_at: '2024-02-01T00:00:00Z',
  },
  {
    id: 'arti-2',
    title: 'Công nghệ nhân giống phôi dừa sáp: Từ 30% lên 100% quả sáp',
    content: `Thách thức lớn nhất của dừa sáp thương mại là tỷ lệ cho quả sáp thấp trong tự nhiên — chỉ 20–30% số quả trong một buồng là quả sáp. Điều này đã được các nhà khoa học Việt Nam giải quyết thành công bằng kỹ thuật nuôi cấy phôi in vitro.

**Kỹ thuật nuôi cấy phôi**

Nhóm nghiên cứu tại Viện Nghiên cứu Dầu và Cây có dầu TP.HCM đã phát triển quy trình:

1. Thu hoạch quả dừa sáp 12–13 tháng tuổi
2. Tách phôi trong phòng vô trùng tuyệt đối
3. Nuôi cấy phôi trên môi trường dinh dưỡng đặc biệt 45–60 ngày
4. Cấy cây con ra bầu ươm và chăm sóc 6–8 tháng trước khi trồng

Kết quả: cây dừa sáp trồng từ phôi nuôi cấy cho **100% quả sáp**, giải quyết hoàn toàn bài toán sản lượng trong canh tác thương mại.

**Mở rộng vùng trồng**

Từ năm 2010 đến nay, kỹ thuật này đã được chuyển giao và nhân rộng ra các tỉnh: Bến Tre, Tiền Giang, Vĩnh Long. Tuy nhiên, dừa sáp Cầu Kè vẫn được đánh giá cao nhất về hương vị do điều kiện thổ nhưỡng đặc thù không thể sao chép.

**Thương hiệu quốc gia**

Năm 2016, "Dừa Sáp Cầu Kè" được Cục Sở hữu Trí tuệ cấp chứng nhận Chỉ dẫn Địa lý — một bước quan trọng khẳng định thương hiệu và bảo vệ quyền lợi người nông dân.`,
    summary:
      'Khám phá công nghệ nuôi cấy phôi đột phá giúp tăng tỷ lệ quả sáp từ 30% lên 100%, mở ra kỷ nguyên canh tác dừa sáp thương mại bền vững cho Cầu Kè và toàn vùng ĐBSCL.',
    article_type: 'education',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1532094349884-543559872a7b?w=1200&q=80',
    created_at: '2024-03-01T00:00:00Z',
  },
  {
    id: 'arti-3',
    title: 'Ẩm thực từ Dừa Sáp — Hành trình từ vườn đến bàn ăn',
    content: `Dừa sáp không chỉ là thức uống giải khát mà đã trở thành nguyên liệu chủ đạo trong hàng chục món ăn và đồ ngọt đặc trưng của vùng Cầu Kè, Trà Vinh.

**Kem dừa sáp**

Nổi tiếng nhất và được yêu thích rộng rãi nhất. Cơm dừa sáp tươi được trộn với nước cốt dừa, đường, sữa đặc rồi đông lạnh — không cần phụ gia hay hương liệu. Mỗi trái dừa sáp chỉ làm được 1–2 phần kem, khiến món này luôn có giá cao hơn kem thông thường nhiều lần.

**Kẹo dừa sáp**

Nghề làm kẹo dừa sáp thủ công ở Cầu Kè đã có hơn 100 năm. Quá trình gồm: nạo cơm dừa sáp → trộn với đường thốt nốt và malt → nấu ở nhiệt độ thích hợp → cán thành lát mỏng → cắt vuông bằng lưỡi dao tre. Kẹo có màu trắng đục đặc trưng, dẻo mềm và có thể bảo quản đến 6 tháng.

**Bánh xèo nhân dừa sáp**

Biến thể độc đáo của bánh xèo miền Tây với nhân cơm dừa sáp xào tôm thịt. Lớp cơm dừa sáp tan chảy trong miệng tạo nên vị ngọt béo tự nhiên không loại nguyên liệu nào thay thế được.

**Chè dừa sáp**

Cơm dừa sáp tươi cắt miếng nhỏ, nấu cùng đường thốt nốt và nước cốt dừa — một trong những món chè giản dị nhất nhưng khó quên nhất của ẩm thực Trà Vinh.`,
    summary:
      'Hành trình đặc sắc từ vườn dừa sáp Cầu Kè đến những món ăn độc đáo: kem dừa sáp, kẹo dừa, bánh xèo nhân dừa sáp và chè — tinh hoa ẩm thực miền Tây Nam Bộ.',
    article_type: 'education',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80',
    created_at: '2024-04-15T00:00:00Z',
  },
  {
    id: 'arti-4',
    title: 'Văn hóa Khmer và vai trò của cây dừa trong đời sống Cầu Kè',
    content: `Người Khmer chiếm khoảng 30% dân số huyện Cầu Kè và đã sinh sống gắn bó với vùng đất này hơn 300 năm. Trong đời sống văn hóa tín ngưỡng của họ, cây dừa — đặc biệt là dừa sáp — giữ vị trí thiêng liêng không thể thay thế.

**Dừa trong lễ hội Ok Om Bok**

Ok Om Bok (Lễ cúng trăng, tổ chức vào đêm Rằm tháng 10 Khmer) là lễ hội lớn nhất của người Khmer Cầu Kè. Dừa sáp là lễ vật không thể thiếu trên mâm cúng ngoài trời, biểu tượng cho âm — sự mát mẻ, nuôi dưỡng và đất mẹ.

**Thốt nốt và dừa sáp trong kiến trúc chùa Khmer**

Các ngôi chùa Khmer cổ tại Cầu Kè thường được bao quanh bởi hàng dừa và thốt nốt hàng trăm năm tuổi. Vỏ dừa khô từng được dùng làm nguyên liệu đốt lò nấu gạch, đúc tượng phật và chế tạo nến sáp ong dùng trong các nghi lễ tôn giáo.

**Nghề đan lá dừa**

Phụ nữ Khmer truyền nhau nghề đan lá dừa từ mẹ sang con. Các sản phẩm như rổ, thúng, nón lá, và đặc biệt là "cà om" (giỏ đựng đồ lễ) đều được đan từ lá dừa tươi theo các họa tiết truyền thống.

**Bảo tàng — Cầu nối hai nền văn hóa**

Bảo tàng Dừa Sáp Cầu Kè ra đời với sứ mệnh gìn giữ ký ức văn hóa nông nghiệp của cả người Kinh lẫn người Khmer, đồng thời giới thiệu di sản này đến thế hệ trẻ và du khách gần xa.`,
    summary:
      'Khám phá vai trò đặc biệt của cây dừa sáp trong đời sống tâm linh, lễ hội và nghề thủ công của người Khmer Cầu Kè — nơi văn hóa nông nghiệp và tín ngưỡng bản địa hòa quyện qua nhiều thế kỷ.',
    article_type: 'education',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
    created_at: '2024-05-20T00:00:00Z',
  },
  {
    id: 'arti-5',
    title: 'Bảo tàng Dừa Sáp mở tuần lễ trải nghiệm hè cho học sinh',
    content:
      'Tuần lễ trải nghiệm hè 2026 sẽ diễn ra liên tục trong tháng 6 với các hoạt động: tham quan hiện vật, workshop làm kẹo dừa sáp, trò chơi truy tìm hiện vật và hướng dẫn viên trẻ. Chương trình ưu tiên các trường tại Trà Vinh và khu vực lân cận.',
    summary:
      'Thông báo chương trình trải nghiệm hè dành cho học sinh với nhiều hoạt động giáo dục thực tế tại bảo tàng.',
    article_type: 'news',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    created_at: '2026-05-05T00:00:00Z',
  },
  {
    id: 'arti-6',
    title: 'Cập nhật mở rộng khu trưng bày phòng Giáo dục - Trải nghiệm',
    content:
      'Ban quản lý thông báo đã nâng cấp hệ thống bảng tương tác và bổ sung khu trưng bày mô hình cấy phôi dừa sáp. Khu vực mới sẽ đón khách từ ngày 20/05/2026.',
    summary:
      'Khu trưng bày giáo dục được mở rộng, bổ sung mô hình trực quan phục vụ đoàn trường và khách nghiên cứu.',
    article_type: 'news',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80',
    created_at: '2026-05-10T00:00:00Z',
  },
];

export const mockEvents: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Lễ hội Dừa Sáp Cầu Kè lần thứ 12 năm 2026',
    description:
      'Lễ hội thường niên lớn nhất tỉnh Trà Vinh tôn vinh giống dừa đặc sản quý hiếm. Chương trình: khai mạc long trọng với văn nghệ dân tộc Khmer, triển lãm 200+ hiện vật và ảnh tư liệu, hội thi chế biến sản phẩm từ dừa sáp, trình diễn đan lá dừa truyền thống, thưởng thức kem dừa sáp và đặc sản địa phương miễn phí.',
    location: 'Trung tâm Văn hóa Thể thao huyện Cầu Kè, Trà Vinh',
    start_date: '2026-07-15',
    end_date: '2026-07-18',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    created_at: '2024-04-01T00:00:00Z',
  },
  {
    id: 'evt-2',
    title: 'Triển lãm "Di sản Dừa Sáp" tại TP. Hồ Chí Minh',
    description:
      'Triển lãm lần đầu tiên đưa văn hóa, lịch sử và giá trị kinh tế của Dừa Sáp Cầu Kè đến người dân thành thị. Trưng bày 80 hiện vật gốc, hơn 150 ảnh tư liệu, video phóng sự 3D về quy trình sản xuất dừa sáp, và không gian mua sắm các sản phẩm đặc sản.',
    location: 'Nhà Văn hóa Thanh Niên, Quận 1, TP. Hồ Chí Minh',
    start_date: '2026-09-20',
    end_date: '2026-09-27',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&q=80',
    created_at: '2024-04-15T00:00:00Z',
  },
  {
    id: 'evt-3',
    title: 'Hội thảo Quốc tế "Coconut Heritage — Bảo tồn Di sản Dừa Đông Nam Á"',
    description:
      'Hội thảo khoa học có sự tham dự của các chuyên gia từ Philippines, Indonesia, Sri Lanka và Việt Nam. Chủ đề tập trung: kỹ thuật nhân giống hiện đại, bảo tồn nguồn gen dừa quý hiếm, phát triển du lịch nông nghiệp gắn với di sản dừa, và thương mại hóa bền vững. Bảo tàng Dừa Sáp Cầu Kè là điểm tham quan chính trong chương trình khảo sát thực địa.',
    location: 'Khách sạn Mường Thanh Grand Trà Vinh',
    start_date: '2026-11-10',
    end_date: '2026-11-12',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
    created_at: '2024-05-01T00:00:00Z',
  },
  {
    id: 'evt-4',
    title: 'Chương trình "Trải nghiệm một ngày làm nông dân Cầu Kè"',
    description:
      'Chương trình du lịch nông nghiệp đặc sắc dành cho gia đình và học sinh: tham quan vườn dừa sáp 100 tuổi, học nhận biết và hái quả dừa sáp, tham gia xưởng làm kẹo dừa thủ công, học đan rổ lá dừa, và thưởng thức bữa cơm quê dân dã với các món từ dừa sáp.',
    location: 'Xã Hòa Tân, huyện Cầu Kè, Trà Vinh',
    start_date: '2026-05-01',
    end_date: '2026-12-31',
    status: 'published',
    image_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    created_at: '2024-05-15T00:00:00Z',
  },
];

export const mockContactMessages: ContactMessage[] = [];

export const mockRooms: MuseumRoom[] = [
  {
    id: 'room-1',
    name: 'Phòng Trưng bày Dừa Sáp',
    description: 'Không gian giới thiệu lịch sử, giống và giá trị văn hóa của dừa sáp Cầu Kè.',
    location: 'Tầng 1',
    capacity: 60,
    status: 'published',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'room-2',
    name: 'Phòng Giáo dục - Trải nghiệm',
    description: 'Khu học tập, workshop và trải nghiệm dành cho học sinh, sinh viên, đoàn tham quan.',
    location: 'Tầng 2',
    capacity: 40,
    status: 'published',
    created_at: '2024-01-02T00:00:00Z',
  },
  {
    id: 'room-3',
    name: 'Phòng Hội thảo',
    description: 'Không gian tổ chức hội nghị, giới thiệu chuyên đề, tiếp đoàn và họp nội bộ.',
    location: 'Khối hành chính',
    capacity: 80,
    status: 'published',
    created_at: '2024-01-03T00:00:00Z',
  },
  {
    id: 'room-4',
    name: 'Phòng Lưu trữ tư liệu',
    description: 'Không gian lưu trữ số hóa hình ảnh, tư liệu nghiên cứu và hồ sơ hiện vật.',
    location: 'Tầng 2',
    capacity: 25,
    status: 'published',
    created_at: '2024-01-04T00:00:00Z',
  },
  {
    id: 'room-5',
    name: 'Không gian trình diễn thủ công',
    description: 'Khu trình diễn nghề đan lá dừa, nạo cơm dừa và chế biến sản phẩm thủ công.',
    location: 'Sân sau',
    capacity: 50,
    status: 'published',
    created_at: '2024-01-05T00:00:00Z',
  },
];

export const mockGroupSchedules: GroupSchedule[] = [
  {
    id: 'schedule-1',
    title: 'Đoàn học sinh Trường THPT Cầu Kè',
    description: 'Tham quan hiện vật, nghe thuyết minh và trải nghiệm làm kẹo dừa sáp.',
    room_id: 'room-2',
    visit_date: '2026-05-20',
    start_time: '08:30',
    end_time: '10:30',
    max_group_size: 45,
    contact_person: 'Cô Nguyễn Thị Lan',
    status: 'published',
    created_at: '2024-06-01T00:00:00Z',
    room: mockRooms[1],
  },
  {
    id: 'schedule-2',
    title: 'Đoàn nghiên cứu Đại học Trà Vinh',
    description: 'Khảo sát mô hình bảo tồn, quản lý hiện vật và hồ sơ tư liệu.',
    room_id: 'room-3',
    visit_date: '2026-05-26',
    start_time: '13:30',
    end_time: '15:00',
    max_group_size: 30,
    contact_person: 'ThS. Phạm Minh Khoa',
    status: 'published',
    created_at: '2024-06-02T00:00:00Z',
    room: mockRooms[2],
  },
  {
    id: 'schedule-3',
    title: 'Đoàn du lịch gia đình cuối tuần',
    description: 'Lịch tham quan ngắn, phù hợp khách lẻ ghép đoàn và nhóm gia đình nhỏ.',
    room_id: 'room-1',
    visit_date: '2026-05-31',
    start_time: '09:00',
    end_time: '11:00',
    max_group_size: 25,
    contact_person: 'Bộ phận đón khách',
    status: 'published',
    created_at: '2024-06-03T00:00:00Z',
    room: mockRooms[0],
  },
  {
    id: 'schedule-4',
    title: 'Đoàn doanh nghiệp OCOP Trà Vinh',
    description: 'Khảo sát mô hình phát triển sản phẩm địa phương gắn với du lịch trải nghiệm.',
    room_id: 'room-5',
    visit_date: '2026-06-07',
    start_time: '14:00',
    end_time: '16:30',
    max_group_size: 35,
    contact_person: 'Phòng Kinh tế huyện Cầu Kè',
    status: 'published',
    created_at: '2024-06-04T00:00:00Z',
    room: mockRooms[4],
  },
  {
    id: 'schedule-5',
    title: 'Đoàn khách nghiên cứu quốc tế',
    description: 'Phiên tham quan chuyên đề về nhân giống và bảo tồn nguồn gen dừa sáp.',
    room_id: 'room-4',
    visit_date: '2026-06-15',
    start_time: '09:30',
    end_time: '11:30',
    max_group_size: 20,
    contact_person: 'Ban nghiên cứu bảo tàng',
    status: 'draft',
    created_at: '2024-06-05T00:00:00Z',
    room: mockRooms[3],
  },
];

export const mockTourBookings: TourBooking[] = [
  {
    id: 'booking-1',
    booking_type: 'ticket',
    full_name: 'Lê Văn Hùng',
    group_name: null,
    email: 'hung@example.com',
    phone: '0901234567',
    visit_date: '2026-05-18',
    visit_time: '09:00',
    visitor_count: 4,
    room_id: 'room-1',
    notes: 'Gia đình có 2 trẻ em, cần thuyết minh ngắn gọn.',
    status: 'confirmed',
    created_at: '2024-06-05T00:00:00Z',
    room: mockRooms[0],
  },
  {
    id: 'booking-2',
    booking_type: 'group',
    full_name: 'Trần Thị Mai',
    group_name: 'CLB Du lịch Xanh',
    email: 'mai@example.com',
    phone: '0912345678',
    visit_date: '2026-05-22',
    visit_time: '13:30',
    visitor_count: 28,
    room_id: 'room-3',
    notes: 'Cần xe 45 chỗ và phòng họp ngắn trước khi tham quan.',
    status: 'pending',
    created_at: '2024-06-06T00:00:00Z',
    room: mockRooms[2],
  },
  {
    id: 'booking-3',
    booking_type: 'ticket',
    full_name: 'Phạm Thanh Tùng',
    group_name: null,
    email: 'tung@example.com',
    phone: '0987654321',
    visit_date: '2026-05-24',
    visit_time: '10:00',
    visitor_count: 2,
    room_id: 'room-1',
    notes: 'Muốn tham quan kết hợp mua quà lưu niệm.',
    status: 'completed',
    created_at: '2024-06-07T00:00:00Z',
    room: mockRooms[0],
  },
  {
    id: 'booking-4',
    booking_type: 'group',
    full_name: 'Nguyễn Văn Minh',
    group_name: 'Trường THCS Hòa Ân',
    email: 'minh@example.com',
    phone: '0908111222',
    visit_date: '2026-06-07',
    visit_time: '08:00',
    visitor_count: 32,
    room_id: 'room-2',
    notes: 'Cần tài liệu phát tay cho học sinh.',
    status: 'confirmed',
    created_at: '2024-06-08T00:00:00Z',
    room: mockRooms[1],
  },
  {
    id: 'booking-5',
    booking_type: 'ticket',
    full_name: 'Phan Thu Hà',
    group_name: null,
    email: 'ha@example.com',
    phone: '0933444555',
    visit_date: '2026-06-10',
    visit_time: '15:00',
    visitor_count: 3,
    room_id: 'room-5',
    notes: 'Ưu tiên khu trình diễn thủ công.',
    status: 'pending',
    created_at: '2024-06-09T00:00:00Z',
    room: mockRooms[4],
  },
  {
    id: 'booking-6',
    booking_type: 'group',
    full_name: 'Lý Quốc Bảo',
    group_name: 'Đoàn nghiên cứu Mekong',
    email: 'bao@example.com',
    phone: '0977333444',
    visit_date: '2026-06-15',
    visit_time: '09:30',
    visitor_count: 18,
    room_id: 'room-4',
    notes: 'Đã gửi thư giới thiệu qua email.',
    status: 'cancelled',
    created_at: '2024-06-10T00:00:00Z',
    room: mockRooms[3],
  },
];
