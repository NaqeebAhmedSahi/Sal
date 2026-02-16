import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ProductsListingClient from '@/components/ProductsListingClient';
import productsData from '@/data/products.json';

export default async function ProductsListingPage({
  params,
}: {
  params: Promise<{
    categorySlug: string;
    subcategorySlug: string;
    subSubcategorySlug: string;
  }>;
}) {
  const { categorySlug, subcategorySlug, subSubcategorySlug } = await params;
  const category = productsData.categories.find(
    (c) => c.slug === categorySlug
  );

  const subcategory = category?.subcategories.find(
    (s) => s.slug === subcategorySlug
  );

  const subSubcategory = subcategory?.subcategories.find(
    (ss) => ss.slug === subSubcategorySlug
  );

  if (!category || !subcategory || !subSubcategory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Categories', href: '/category' },
              { label: category.name, href: `/category/${category.slug}` },
              { label: subcategory.name, href: `/category/${category.slug}/${subcategory.slug}` },
              { 
                label: subSubcategory.name, 
                href: `/category/${category.slug}/${subcategory.slug}/${subSubcategory.slug}` 
              },
            ]} 
          />
        </div>
      </section>

      <ProductsListingClient
        categoryName={category.name}
        categorySlug={category.slug}
        subcategoryName={subcategory.name}
        subcategorySlug={subcategory.slug}
        subSubcategoryName={subSubcategory.name}
        subSubcategorySlug={subSubcategory.slug}
        subSubcategoryDescription={subSubcategory.description}
        products={subSubcategory.products}
      />

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const paths: {
    categorySlug: string;
    subcategorySlug: string;
    subSubcategorySlug: string;
  }[] = [];

  productsData.categories.forEach((category: any) => {
    category.subcategories.forEach((subcategory: any) => {
      subcategory.subcategories.forEach((subSubcategory: any) => {
        paths.push({
          categorySlug: category.slug,
          subcategorySlug: subcategory.slug,
          subSubcategorySlug: subSubcategory.slug,
        });
      });
    });
  });

  return paths;
}
