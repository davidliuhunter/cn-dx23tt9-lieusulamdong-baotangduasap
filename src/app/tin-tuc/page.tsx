import PublicLayout from '@/src/components/PublicLayout';
import ArticleCard from '@/src/components/ArticleCard';
import { getPublishedArticlesByType } from '@/src/lib/data';
import { Newspaper } from 'lucide-react';

export default async function NewsPage() {
  const articles = await getPublishedArticlesByType('news');

  return (
    <PublicLayout>
      <div className="page-hero">
        <div className="container-museum">
          <h1 className="font-serif text-4xl font-bold mb-2">Tin tức</h1>
          <p className="text-amber-200">Cập nhật mới nhất về hoạt động, triển lãm và thông báo từ bảo tàng</p>
        </div>
      </div>

      <div className="container-museum py-12">
        {articles.length === 0 ? (
          <div className="text-center py-20 text-amber-600">
            <div className="flex justify-center mb-4"><Newspaper className="w-12 h-12 opacity-40" /></div>
            <p className="text-lg">Chưa có bản tin nào được xuất bản.</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </PublicLayout>
  );
}