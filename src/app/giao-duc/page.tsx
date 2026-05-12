import PublicLayout from '../../components/PublicLayout';
import ArticleCard from '../../components/ArticleCard';
import { getPublishedArticlesByType } from '../../lib/data';
import { GraduationCap } from 'lucide-react';

export default async function EducationPage() {
  const articles = await getPublishedArticlesByType('education');

  return (
    <PublicLayout>
      <div className="page-hero">
        <div className="container-museum">
          <h1 className="font-serif text-4xl font-bold mb-2">Giáo dục</h1>
          <p className="text-amber-200">Học liệu, kiến thức chuyên đề và câu chuyện văn hóa về Dừa Sáp Cầu Kè</p>
        </div>
      </div>

      <div className="container-museum py-12">
        {articles.length === 0 ? (
          <div className="text-center py-20 text-amber-600">
            <div className="flex justify-center mb-4"><GraduationCap className="w-12 h-12 opacity-40" /></div>
            <p className="text-lg">Chưa có bài giáo dục nào được xuất bản.</p>
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