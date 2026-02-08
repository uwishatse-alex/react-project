import { useMemo, useState } from 'react';
import PageTransition from '../components/PageTransition';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import BuyModal from '../components/BuyModal';
import { categories, products } from '../data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Featured Products</h1>
          <p className="mt-2 text-gray-500">Elevated technology selected for design, quality, and lasting performance.</p>
        </div>

        <FilterBar categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={setSelectedProduct} />
          ))}
        </div>
      </section>

      <BuyModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </PageTransition>
  );
}
