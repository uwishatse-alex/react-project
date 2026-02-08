import { motion } from 'framer-motion';

export default function ProductCard({ product, onBuy }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      whileHover={{ y: -6, boxShadow: '0 24px 40px -25px rgba(31, 41, 55, 0.45)' }}
      className="group rounded-3xl bg-white p-4 shadow-soft sm:p-5"
    >
      <div className="overflow-hidden rounded-2xl bg-gray-100">
        <motion.img
          src={product.image}
          alt={product.name}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="h-52 w-full object-cover"
        />
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs uppercase tracking-[0.14em] text-gray-400">{product.brand}</p>
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-xl font-semibold text-gray-800">${product.price.toLocaleString()}</p>
      </div>

      <motion.button
        onClick={() => onBuy(product)}
        whileHover={{ scale: 1.02, boxShadow: '0 15px 25px -10px rgba(245, 158, 11, 0.6)' }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="mt-5 w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white"
      >
        Add to Cart
      </motion.button>
    </motion.article>
  );
}
