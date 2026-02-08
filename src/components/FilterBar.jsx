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

function FilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="mb-10 overflow-x-auto rounded-2xl bg-white p-3 shadow-soft">
      <div className="flex min-w-max items-center gap-4 px-2">
        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="group relative px-2 py-2 text-sm font-medium text-slate-600"
            >
              <span className={`transition-colors duration-300 ${active ? 'text-slate-900' : 'group-hover:text-slate-800'}`}>
                {category}
              </span>
              <motion.span
                layoutId="activeCategory"
                className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-amber-500 ${
                  active ? 'opacity-100' : 'opacity-0'
                }`}
                transition={{ duration: 0.25, ease: 'easeInOut' }}

              />
            </button>
          );
        })}
      </div>
    </div>
  );
}



export default FilterBar;

