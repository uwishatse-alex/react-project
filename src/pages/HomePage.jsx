import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <section className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-14 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="mb-4 text-sm uppercase tracking-[0.24em] text-gray-400"
        >
          Calm Luxury Electronics
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="max-w-3xl text-4xl font-semibold leading-tight text-gray-800 sm:text-5xl"
        >
          Technology designed to feel exceptional in every detail.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mt-6 max-w-2xl text-base text-gray-500"
        >
          Discover curated devices crafted for performance, beauty, and a quieter kind of confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mt-10 flex gap-4"
        >
          <Link
            to="/products"
            className="rounded-xl bg-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-amber transition-all hover:brightness-105"
          >
            Explore Collection
          </Link>
          <Link
            to="/about"
            className="rounded-xl border border-gray-200 px-7 py-3 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900"
          >
            Our Philosophy
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
