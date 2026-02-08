import { AnimatePresence, motion } from 'framer-motion';


export default function BuyModal({ product, onClose }) {

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

          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/35 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-luxury"
          >
            <img src={product.image} alt={product.name} className="h-52 w-full rounded-2xl object-cover" />
            <div className="mt-5 space-y-1">
              <p className="text-sm text-gray-500">{product.brand}</p>
              <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-xl font-semibold text-gray-800">${product.price.toLocaleString()}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 12px 25px -12px rgba(245, 158, 11, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="flex-1 rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Confirm Purchase
              </motion.button>
              <button
                onClick={onClose}
                className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-800"
              >
                Cancel
              </button>

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

