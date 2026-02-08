
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="min-h-[calc(100vh-5rem)]"
    >
      {children}
    </motion.main>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;

