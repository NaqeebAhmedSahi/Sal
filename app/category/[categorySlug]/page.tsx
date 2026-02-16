import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryDetailClient from '@/components/CategoryDetailClient';
import productsData from '@/data/products.json';

const subcategoryIcons: Record<string, string> = {
  'surgical-scissors': '✂️',
  'forceps-clamps': '🔧',
  'retractors': '🔨',
  'examination-tools': '🔍',
  'extraction-forceps': '🦷',
  'scalers-curettes': '⚒️',
  'hair-removal': '💇',
  'skin-care': '✨',
  'makeup-tools': '💄',
};

const subcategoryGradients: Record<string, string> = {
  'surgical-scissors': 'from-teal-500 to-cyan-600',
  'forceps-clamps': 'from-cyan-500 to-blue-600',
  'retractors': 'from-blue-500 to-indigo-600',
  'examination-tools': 'from-indigo-500 to-purple-600',
  'extraction-forceps': 'from-purple-500 to-pink-600',
  'scalers-curettes': 'from-pink-500 to-rose-600',
  'hair-removal': 'from-rose-500 to-red-600',
  'skin-care': 'from-orange-500 to-amber-600',
  'makeup-tools': 'from-amber-500 to-yellow-600',
};

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = productsData.categories.find(
    (c) => c.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Categories', href: '/category' },
              { label: category.name, href: `/category/${category.slug}` },
            ]} 
          />
        </div>
      </div>

      <CategoryDetailClient
        categoryName={category.name}
        categoryDescription={category.description}
        subcategories={category.subcategories}
        categorySlug={category.slug}
        subcategoryIcons={subcategoryIcons}
        subcategoryGradients={subcategoryGradients}
      />

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return productsData.categories.map((category: any) => ({
    categorySlug: category.slug,
  }));
}
