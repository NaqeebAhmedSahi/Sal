import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import SubcategoryDetailClient from '@/components/SubcategoryDetailClient';
import productsData from '@/data/products.json';

export default async function SubcategoryDetailPage({
  params,
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}) {
  const { categorySlug, subcategorySlug } = await params;
  const category = productsData.categories.find(
    (c) => c.slug === categorySlug
  );

  const subcategory = category?.subcategories.find(
    (s) => s.slug === subcategorySlug
  );

  if (!category || !subcategory) {
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
              { label: subcategory.name, href: `/category/${category.slug}/${subcategory.slug}` },
            ]} 
          />
        </div>
      </div>

      <SubcategoryDetailClient
        categoryName={category.name}
        categorySlug={category.slug}
        subcategoryName={subcategory.name}
        subcategorySlug={subcategory.slug}
        subcategoryDescription={subcategory.description}
        subSubcategories={subcategory.subcategories}
      />

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const paths: { categorySlug: string; subcategorySlug: string }[] = [];

  productsData.categories.forEach((category: any) => {
    category.subcategories.forEach((subcategory: any) => {
      paths.push({
        categorySlug: category.slug,
        subcategorySlug: subcategory.slug,
      });
    });
  });

  return paths;
}
