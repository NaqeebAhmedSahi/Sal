# Product Navigation System - Architecture Documentation

## Overview
This document outlines the production-ready implementation of a multi-level product navigation system that follows the hierarchical structure: **Category → Subcategory → Sub-subcategory → Products → Product Detail**

All data is dynamically populated from `/data/products.json`.

---

## 📊 Data Structure (products.json)

```json
{
  "categories": [
    {
      "id": "surgical",
      "name": "Surgical Instruments",
      "slug": "surgical-instruments",
      "description": "Premium surgical instruments...",
      "subcategories": [
        {
          "id": "scissors",
          "name": "Surgical Scissors",
          "slug": "surgical-scissors",
          "description": "High-precision surgical scissors...",
          "subcategories": [
            {
              "id": "mayo",
              "name": "Mayo Scissors",
              "slug": "mayo-scissors",
              "description": "Durable Mayo scissors...",
              "products": [
                {
                  "id": "mayo-curved-6",
                  "name": "Mayo Scissors Curved 6\"",
                  "sku": "SI-MS-C-6",
                  "description": "...",
                  "material": "Stainless Steel",
                  "finish": "Satin"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

### Hierarchy Levels:
1. **Level 1**: Categories (3 main categories)
2. **Level 2**: Subcategories (under each category)
3. **Level 3**: Sub-subcategories (under each subcategory)
4. **Level 4**: Products (under each sub-subcategory)

---

## 🗂️ Page Structure & Routes

### 1. **Category Listing Page** (`/category`)
**Route**: `/category`  
**Purpose**: Display all main product categories

#### Features:
- Grid layout showing all main categories
- Each category card displays:
  - Category name
  - Category description
  - Number of subcategories
  - Featured image/icon
  - Link to category detail page
- Animated cards with hover effects
- Breadcrumb: `Home > Categories`

#### Data Source:
```typescript
const categories = productsData.categories;
```

#### Navigation:
- Click on any category → Navigate to `/category/[slug]`
- Example: Click "Surgical Instruments" → `/category/surgical-instruments`

---

### 2. **Category Detail Page** (`/category/[categorySlug]`)
**Route**: `/category/[categorySlug]`  
**Example**: `/category/surgical-instruments`  
**Purpose**: Display all subcategories within a selected category

#### Features:
- Hero section with category name and description
- Grid layout showing all subcategories
- Each subcategory card displays:
  - Subcategory name
  - Subcategory description
  - Number of sub-subcategories
  - Link to subcategory detail page
- Sidebar with quick navigation to other categories
- Breadcrumb: `Home > Categories > Surgical Instruments`

#### Data Source:
```typescript
const category = productsData.categories.find(c => c.slug === categorySlug);
const subcategories = category?.subcategories || [];
```

#### Navigation:
- Click on any subcategory → Navigate to `/category/[categorySlug]/[subcategorySlug]`
- Example: Click "Surgical Scissors" → `/category/surgical-instruments/surgical-scissors`

---

### 3. **Subcategory Detail Page** (`/category/[categorySlug]/[subcategorySlug]`)
**Route**: `/category/[categorySlug]/[subcategorySlug]`  
**Example**: `/category/surgical-instruments/surgical-scissors`  
**Purpose**: Display all sub-subcategories within a selected subcategory

#### Features:
- Hero section with subcategory name and description
- Grid layout showing all sub-subcategories
- Each sub-subcategory card displays:
  - Sub-subcategory name
  - Sub-subcategory description
  - Number of products
  - Link to sub-subcategory products page
- Filter/sort options
- Breadcrumb: `Home > Categories > Surgical Instruments > Surgical Scissors`

#### Data Source:
```typescript
const category = productsData.categories.find(c => c.slug === categorySlug);
const subcategory = category?.subcategories.find(s => s.slug === subcategorySlug);
const subSubcategories = subcategory?.subcategories || [];
```

#### Navigation:
- Click on any sub-subcategory → Navigate to `/category/[categorySlug]/[subcategorySlug]/[subSubcategorySlug]`
- Example: Click "Mayo Scissors" → `/category/surgical-instruments/surgical-scissors/mayo-scissors`

---

### 4. **Sub-subcategory Products Page** (`/category/[categorySlug]/[subcategorySlug]/[subSubcategorySlug]`)
**Route**: `/category/[categorySlug]/[subcategorySlug]/[subSubcategorySlug]`  
**Example**: `/category/surgical-instruments/surgical-scissors/mayo-scissors`  
**Purpose**: Display all products within a selected sub-subcategory

#### Features:
- Hero section with sub-subcategory name and description
- Grid/List view toggle
- Product cards displaying:
  - Product image placeholder
  - Product name
  - SKU
  - Short description
  - Material & Finish
  - "View Details" button
  - "Request Quote" button
- Filter by material, finish, size
- Sort by name, SKU, newest
- Search within products
- Breadcrumb: `Home > Categories > Surgical Instruments > Surgical Scissors > Mayo Scissors`

#### Data Source:
```typescript
const category = productsData.categories.find(c => c.slug === categorySlug);
const subcategory = category?.subcategories.find(s => s.slug === subcategorySlug);
const subSubcategory = subcategory?.subcategories.find(ss => ss.slug === subSubcategorySlug);
const products = subSubcategory?.products || [];
```

#### Navigation:
- Click "View Details" on any product → Navigate to `/products/[productId]`
- Example: Click on "Mayo Scissors Curved 6\"" → `/products/mayo-curved-6`

---

### 5. **Product Detail Page** (`/products/[productId]`)
**Route**: `/products/[productId]`  
**Example**: `/products/mayo-curved-6`  
**Purpose**: Display complete details of a single product

#### Features:
- **Image Gallery Section**:
  - Large product image/placeholder
  - Multiple view angles (carousel)
  - Zoom functionality

- **Product Information**:
  - Full product name
  - SKU prominently displayed
  - Detailed description
  - Full specifications table:
    - Material
    - Finish
    - Size/Dimensions
    - Weight
    - Sterilization compatibility
  
- **Action Section**:
  - "Request Quote" button (opens contact form modal)
  - "Add to Inquiry List" button
  - "Download Spec Sheet" button
  - Social share buttons

- **Related Products Section**:
  - Display other products from same sub-subcategory
  - "You may also like" carousel

- **Breadcrumb**: `Home > Categories > Surgical Instruments > Surgical Scissors > Mayo Scissors > Mayo Scissors Curved 6"`

#### Data Source:
```typescript
// Find product across all categories
let foundProduct = null;
let productContext = null;

productsData.categories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    subcategory.subcategories.forEach(subSubcategory => {
      const product = subSubcategory.products.find(p => p.id === productId);
      if (product) {
        foundProduct = product;
        productContext = {
          category,
          subcategory,
          subSubcategory
        };
      }
    });
  });
});
```

#### Navigation:
- Breadcrumb navigation to go back to any level
- "Back to [Sub-subcategory]" button
- Related products links

---

## 🛤️ Complete Navigation Flow Example

```
User Journey: Finding a specific surgical scissor

1. Start: Homepage (/)
   ↓
2. Click "Products" in header → Category Listing (/category)
   Shows: Surgical Instruments | Dental Equipment | Beauty & Aesthetics
   ↓
3. Click "Surgical Instruments" (/category/surgical-instruments)
   Shows: Surgical Scissors | Forceps & Clamps | Retractors | etc.
   ↓
4. Click "Surgical Scissors" (/category/surgical-instruments/surgical-scissors)
   Shows: Mayo Scissors | Metzenbaum Scissors | Iris Scissors
   ↓
5. Click "Mayo Scissors" (/category/surgical-instruments/surgical-scissors/mayo-scissors)
   Shows: All Mayo Scissors products (Curved 6", Straight 6", Curved 7", etc.)
   ↓
6. Click "View Details" on "Mayo Scissors Curved 6"" (/products/mayo-curved-6)
   Shows: Complete product details, specs, images
   ↓
7. Click "Request Quote" → Opens contact form or navigates to /contact
```

---

## 📁 File Structure

```
app/
├── category/
│   ├── page.tsx                                    # Category listing page
│   └── [categorySlug]/
│       ├── page.tsx                                # Subcategory listing
│       └── [subcategorySlug]/
│           ├── page.tsx                            # Sub-subcategory listing
│           └── [subSubcategorySlug]/
│               └── page.tsx                        # Products listing
│
├── products/
│   └── [productId]/
│       └── page.tsx                                # Product detail page
│
components/
├── Header.tsx                                       # Navigation with dropdowns
├── Footer.tsx                                       # Site footer
├── Breadcrumb.tsx                                   # Breadcrumb navigation
├── ProductCard.tsx                                  # Reusable product card
└── CategoryCard.tsx                                 # Reusable category card

data/
└── products.json                                    # Single source of truth
```

---

## 🔧 Implementation Details

### Dynamic Route Parameters

#### 1. Category Page (`/category/[categorySlug]/page.tsx`)
```typescript
export default function CategoryPage({ 
  params 
}: { 
  params: { categorySlug: string } 
}) {
  const category = productsData.categories.find(
    c => c.slug === params.categorySlug
  );
  
  if (!category) {
    notFound();
  }
  
  return (
    // Render subcategories
  );
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return productsData.categories.map(category => ({
    categorySlug: category.slug
  }));
}
```

#### 2. Subcategory Page (`/category/[categorySlug]/[subcategorySlug]/page.tsx`)
```typescript
export default function SubcategoryPage({ 
  params 
}: { 
  params: { 
    categorySlug: string;
    subcategorySlug: string;
  } 
}) {
  const category = productsData.categories.find(
    c => c.slug === params.categorySlug
  );
  
  const subcategory = category?.subcategories.find(
    s => s.slug === params.subcategorySlug
  );
  
  if (!subcategory) {
    notFound();
  }
  
  return (
    // Render sub-subcategories
  );
}

// Generate static paths
export async function generateStaticParams() {
  const paths: { categorySlug: string; subcategorySlug: string }[] = [];
  
  productsData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      paths.push({
        categorySlug: category.slug,
        subcategorySlug: subcategory.slug
      });
    });
  });
  
  return paths;
}
```

#### 3. Sub-subcategory Products Page
```typescript
export default function SubSubcategoryPage({ 
  params 
}: { 
  params: { 
    categorySlug: string;
    subcategorySlug: string;
    subSubcategorySlug: string;
  } 
}) {
  // Find the sub-subcategory and its products
  const category = productsData.categories.find(
    c => c.slug === params.categorySlug
  );
  
  const subcategory = category?.subcategories.find(
    s => s.slug === params.subcategorySlug
  );
  
  const subSubcategory = subcategory?.subcategories.find(
    ss => ss.slug === params.subSubcategorySlug
  );
  
  if (!subSubcategory) {
    notFound();
  }
  
  const products = subSubcategory.products;
  
  return (
    // Render products grid
  );
}

// Generate static paths
export async function generateStaticParams() {
  const paths: { 
    categorySlug: string; 
    subcategorySlug: string;
    subSubcategorySlug: string;
  }[] = [];
  
  productsData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.subcategories.forEach(subSubcategory => {
        paths.push({
          categorySlug: category.slug,
          subcategorySlug: subcategory.slug,
          subSubcategorySlug: subSubcategory.slug
        });
      });
    });
  });
  
  return paths;
}
```

#### 4. Product Detail Page (`/products/[productId]/page.tsx`)
```typescript
export default function ProductDetailPage({ 
  params 
}: { 
  params: { productId: string } 
}) {
  // Find product across all categories
  let product = null;
  let context = null;
  
  productsData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.subcategories.forEach(subSubcategory => {
        const found = subSubcategory.products.find(
          p => p.id === params.productId
        );
        if (found) {
          product = found;
          context = { category, subcategory, subSubcategory };
        }
      });
    });
  });
  
  if (!product) {
    notFound();
  }
  
  return (
    // Render product details
  );
}

// Generate static paths for all products
export async function generateStaticParams() {
  const paths: { productId: string }[] = [];
  
  productsData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.subcategories.forEach(subSubcategory => {
        subSubcategory.products.forEach(product => {
          paths.push({ productId: product.id });
        });
      });
    });
  });
  
  return paths;
}
```

---

## 🎨 UI/UX Features

### Common Features Across All Pages:
1. **Breadcrumb Navigation** - Always visible, clickable
2. **Animated Transitions** - Framer Motion for smooth page transitions
3. **Responsive Design** - Mobile-first approach
4. **Loading States** - Skeleton loaders during navigation
5. **Search Functionality** - Quick search within current level
6. **Filter & Sort** - Dynamic filtering options
7. **Grid/List Toggle** - User preference for viewing mode
8. **Sticky Navigation** - Header and filter bar remain accessible

### Design Consistency:
- **Color Scheme**: Consistent with brand (Teal, Blue, Indigo gradients)
- **Typography**: Inter for body, Poppins for headings
- **Spacing**: Uniform padding and margins
- **Cards**: Consistent card design with hover effects
- **Buttons**: Standardized button styles and actions

---

## 🚀 SEO & Performance

### SEO Optimization:
1. **Dynamic Metadata** for each page:
```typescript
export async function generateMetadata({ params }) {
  const category = findCategory(params.categorySlug);
  
  return {
    title: `${category.name} | Saluvia Industries`,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
    }
  };
}
```

2. **Structured Data** (JSON-LD):
   - BreadcrumbList for all pages
   - Product schema for product detail pages
   - Organization schema in footer

3. **URL Structure**:
   - Clean, descriptive slugs
   - Logical hierarchy
   - No unnecessary parameters

### Performance:
1. **Static Generation**: All pages pre-rendered at build time using `generateStaticParams`
2. **Image Optimization**: Next.js Image component for lazy loading
3. **Code Splitting**: Automatic per-route code splitting
4. **Prefetching**: Link components prefetch on hover

---

## 📊 Analytics & Tracking

### Track User Journey:
```typescript
// Track page views
useEffect(() => {
  trackPageView({
    page: 'category',
    categorySlug: params.categorySlug
  });
}, [params.categorySlug]);

// Track product interactions
const handleProductClick = (productId: string) => {
  trackEvent({
    event: 'product_click',
    productId,
    source: 'category_page'
  });
};
```

---

## 🔄 Data Flow Summary

```
products.json (Single Source of Truth)
    ↓
Imported in all page components
    ↓
Filtered based on route parameters
    ↓
Rendered with animations and interactivity
    ↓
User navigation triggers new route
    ↓
New page loads with filtered data
```

---

## 🛠️ Development Commands

```bash
# Run development server
npm run dev

# Build for production (generates all static pages)
npm run build

# Start production server
npm start

# Validate products.json structure
npm run validate-data

# Generate TypeScript types from products.json
npm run generate-types
```

---

## 📝 Best Practices

1. **Always validate data** - Check if category/product exists before rendering
2. **Handle 404s gracefully** - Use Next.js `notFound()` function
3. **Cache appropriately** - Leverage Next.js caching strategies
4. **Optimize images** - Use WebP format with fallbacks
5. **Implement error boundaries** - Catch and handle errors gracefully
6. **Test all routes** - Ensure all dynamic routes work correctly
7. **Monitor performance** - Use Lighthouse for regular audits
8. **Maintain consistency** - Follow component patterns across all pages

---

## 🔐 Type Safety

### TypeScript Interfaces:
```typescript
interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  material?: string;
  finish?: string;
}

interface SubSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: SubSubcategory[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: Subcategory[];
}

interface ProductData {
  categories: Category[];
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

---

## ✅ Checklist for Implementation

- [ ] Create `/category/page.tsx` - Category listing
- [ ] Create `/category/[categorySlug]/page.tsx` - Subcategory listing
- [ ] Create `/category/[categorySlug]/[subcategorySlug]/page.tsx` - Sub-subcategory listing
- [ ] Create `/category/[categorySlug]/[subcategorySlug]/[subSubcategorySlug]/page.tsx` - Products
- [ ] Create `/products/[productId]/page.tsx` - Product detail
- [ ] Create `Breadcrumb.tsx` component
- [ ] Create `ProductCard.tsx` component
- [ ] Create `CategoryCard.tsx` component
- [ ] Implement `generateStaticParams` for all dynamic routes
- [ ] Add metadata generation for SEO
- [ ] Add error handling and 404 pages
- [ ] Implement search functionality
- [ ] Add filter and sort features
- [ ] Test all navigation paths
- [ ] Optimize images and performance
- [ ] Add analytics tracking
- [ ] Test responsive design on all devices
- [ ] Implement loading states
- [ ] Add keyboard navigation support
- [ ] Test accessibility (WCAG compliance)
- [ ] Create unit tests for data parsing
- [ ] Document API endpoints (if backend is added)

---

## 🎯 Success Metrics

- **Page Load Time**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: > 90 (all categories)
- **Mobile Usability**: 100/100
- **SEO Score**: > 95
- **Accessibility Score**: > 95

---

## 📞 Support & Maintenance

For issues or questions regarding the product navigation system:
- Create an issue in the repository
- Contact: dev@saluviaindustries.com
- Documentation updates: Update this README and commit changes

---

**Last Updated**: February 16, 2026  
**Version**: 1.0.0  
**Maintained By**: Saluvia Industries Dev Team
