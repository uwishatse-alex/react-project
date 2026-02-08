import { motion } from 'framer-motion';

export default function FilterBar({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="mb-10 rounded-2xl bg-white p-2 shadow-soft">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className="relative rounded-xl px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
            >
              {category.label}
              <motion.span
                animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0.5 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-amber-500"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
