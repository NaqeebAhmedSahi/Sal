import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ProductPageClient from '@/components/ProductPageClient';
import productsData from '@/data/products.json';

type ProductType = {
  id: string;
  name: string;
  sku: string;
  description: string;
  material: string;
  finish: string;
};

type SubSubCategoryType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: ProductType[];
};

type SubCategoryType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: SubSubCategoryType[];
};

type CategoryType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: SubCategoryType[];
};

interface ProductContext {
  category: CategoryType;
  subcategory: SubCategoryType;
  subSubcategory: SubSubCategoryType;
  product: ProductType;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  // Find product across all categories
  let productContext: ProductContext | null = null;

  productsData.categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.subcategories.forEach((subSubcategory) => {
        const product = subSubcategory.products.find(
          (p) => p.id === productId
        );
        if (product) {
          productContext = {
            category,
            subcategory,
            subSubcategory,
            product,
          };
        }
      });
    });
  });

  if (!productContext) {
    notFound();
  }

  const { category, subcategory, subSubcategory, product } = productContext as ProductContext;

  // Get related products from same sub-subcategory
  const relatedProducts = subSubcategory.products
    .filter((p: ProductType) => p.id !== product.id)
    .slice(0, 3);

  // Product images from Unsplash (medical/surgical instruments)
  const productImages = [
    { 
      id: 1, 
      alt: 'Main View',
      url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop'
    },
    { 
      id: 2, 
      alt: 'Side View',
      url: 'https://images.unsplash.com/photo-1581595220975-119360b1c63b?w=800&h=600&fit=crop'
    },
    { 
      id: 3, 
      alt: 'Detail View',
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop'
    },
    { 
      id: 4, 
      alt: 'Close-up',
      url: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=800&h=600&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 pt-32 pb-12">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <ProductPageClient
        productImages={productImages}
        categoryName={category.name}
        categorySlug={category.slug}
        subcategoryName={subcategory.name}
        subcategorySlug={subcategory.slug}
        subSubcategoryName={subSubcategory.name}
        subSubcategorySlug={subSubcategory.slug}
        product={product}
        relatedProducts={relatedProducts}
      />

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const paths: { productId: string }[] = [];

  productsData.categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.subcategories.forEach((subSubcategory) => {
        subSubcategory.products.forEach((product) => {
          paths.push({ productId: product.id });
        });
      });
    });
  });

  return paths;
}
