import { AnimatePresence, motion } from 'framer-motion';

export default function BuyModal({ product, onClose }) {
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
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
