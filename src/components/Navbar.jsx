import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (
    <motion.header
      animate={{

        height: isScrolled ? 72 : 84,
        backgroundColor: isScrolled ? 'rgba(250, 250, 250, 0.86)' : 'rgba(250, 250, 250, 0.7)',
        boxShadow: isScrolled
          ? '0 8px 25px -18px rgba(31, 41, 55, 0.45)'
          : '0 0 0 rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 z-40 border-b border-white/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <p className="text-xl font-semibold tracking-tight text-gray-800">Aureon</p>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="relative py-1 text-sm text-gray-500 transition-colors hover:text-gray-800">
              {({ isActive }) => (
                <>
                  <span className="font-medium">{link.label}</span>
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-amber-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}

        height: scrolled ? 70 : 82,
        backgroundColor: scrolled ? 'rgba(250, 250, 250, 0.88)' : 'rgba(250, 250, 250, 0.68)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`sticky top-0 z-50 border-b border-transparent backdrop-blur-md ${scrolled ? 'shadow-soft' : ''}`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <NavLink to="/" className="text-xl font-semibold tracking-tight text-slate-800 md:text-2xl">
          AURIX
        </NavLink>

        <nav className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="group relative py-1 text-xs font-medium text-slate-600 md:text-sm">
              {({ isActive }) => (
                <>
                  <span className={`transition-colors duration-300 ${isActive ? 'text-slate-900' : 'group-hover:text-slate-800'}`}>
                    {item.label}
                  </span>
                  <motion.span
                    layoutId="navActive"
                    className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-amber-500 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}

                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}

          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="rounded-full bg-white p-2 text-gray-700 shadow-soft"
          aria-label="Open cart"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 7h12l-1.2 11H7.2L6 7Z" />
            <path d="M9 7V5a3 3 0 0 1 6 0v2" />
          </svg>

          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-soft md:px-4 md:text-sm"
        >
          Cart ({cartCount})

        </motion.button>
      </div>
    </motion.header>
  );
}



export default Navbar;

