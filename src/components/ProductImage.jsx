import { useState } from 'react';
import { motion } from 'framer-motion';

function ProductImage({ src, alt, className = '', motionEnabled = true }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 text-slate-500 ${className}`}>
        <span className="text-xs uppercase tracking-[0.18em]">Image unavailable</span>
      </div>
    );
  }

  if (!motionEnabled) {
    return <img src={src} alt={alt} onError={() => setHasError(true)} className={className} loading="lazy" />;
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    />
  );
}

export default ProductImage;
