import { AnimatePresence, motion } from 'framer-motion';
import ProductImage from './ProductImage';

function BuyModal({ product, onClose, onConfirm }) {
  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-900/35 p-4 md:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-premium md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <ProductImage src={product.image} alt={product.name} className="mb-5 h-52 w-full rounded-2xl object-cover" motionEnabled={false} />
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{product.brand}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{product.name}</h3>
            <p className="mt-3 text-xl font-bold text-slate-800">${product.price.toLocaleString()}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                onClick={onClose}
                className="rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Cancel
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="rounded-xl bg-amber-500 py-3 text-sm font-semibold text-white shadow-amberGlow transition hover:bg-amber-600"
                onClick={() => onConfirm(product)}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default BuyModal;
