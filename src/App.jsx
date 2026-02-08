
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

import { Route, Routes } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import FilterBar from './components/FilterBar';
import BuyModal from './components/BuyModal';
import PageTransition from './components/PageTransition';
import { categories, products } from './data/products';

function ProductSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(
    () =>
      activeCategory === 'All'
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  const confirmBuy = (product) => {
    onAddToCart(product);
    setSelectedProduct(null);
  };

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Premium collection</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-5xl">Luxury electronics, curated calmly.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Discover precision-crafted devices designed to elevate every moment with silent power and refined elegance.
        </p>
      </motion.div>

      <FilterBar categories={categories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onBuy={setSelectedProduct} />
        ))}
      </div>

      <BuyModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onConfirm={confirmBuy} />
    </section>
  );
}

function SimplePage({ title, subtitle }) {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-16 text-center md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="text-3xl font-semibold text-slate-900 md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
        className="mx-auto mt-5 max-w-2xl text-slate-600"
      >
        {subtitle}
      </motion.p>
    </section>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800">
      <Navbar cartCount={cartItems.length} />
      <PageTransition>
        <Routes>
          <Route path="/" element={<ProductSection onAddToCart={addToCart} />} />
          <Route path="/products" element={<ProductSection onAddToCart={addToCart} />} />
          <Route
            path="/about"
            element={
              <SimplePage
                title="Built with Premium Restraint"
                subtitle="Aurix curates electronic essentials with clean aesthetics, trusted craftsmanship, and an intentionally calm shopping experience."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <SimplePage
                title="White-Glove Support"
                subtitle="Reach our specialists for tailored recommendations, private demos, and aftercare designed around your lifestyle."
              />
            }
          />
          <Route
            path="*"
            element={<SimplePage title="Page not found" subtitle="The page you requested is unavailable. Explore our premium collection instead." />}
          />
        </Routes>
      </PageTransition>
    </div>
  );
}

export default App;

