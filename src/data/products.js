export const products = [
  {
    id: 1,

    name: 'Arc One Wireless Headphones',
    brand: 'Aureon Audio',
    price: 499,
    category: 'audio',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Lumen 8K Smart TV',
    brand: 'Nova Vision',
    price: 2899,
    category: 'display',
    image:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Orbit Pro Laptop',
    brand: 'Vertex',
    price: 2499,
    category: 'computing',
    image:
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Pulse Smartwatch Titanium',
    brand: 'Helio',
    price: 799,
    category: 'wearables',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Prism Mirrorless Camera',
    brand: 'Kairo Optics',
    price: 1799,
    category: 'imaging',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Ether Home Speaker',
    brand: 'Aureon Audio',
    price: 649,
    category: 'audio',
    image:
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1200&q=80',
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'audio', label: 'Audio' },
  { id: 'display', label: 'Display' },
  { id: 'computing', label: 'Computing' },
  { id: 'wearables', label: 'Wearables' },
  { id: 'imaging', label: 'Imaging' },
];

    name: 'Aurora Pro Max Smartphone',
    brand: 'Aurix',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
    category: 'Smartphones',
  },
  {
    id: 2,
    name: 'Nebula Ultra Laptop 16"',
    brand: 'Vantor',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    category: 'Laptops',
  },
  {
    id: 3,
    name: 'Pulse Studio Headphones',
    brand: 'Nexa',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    category: 'Audio',
  },
  {
    id: 4,
    name: 'Orbit Smartwatch S',
    brand: 'Helio',
    price: 699,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
    category: 'Wearables',
  },
  {
    id: 5,
    name: 'Vertex Mirrorless Camera',
    brand: 'Lumina',
    price: 1899,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    category: 'Cameras',
  },
  {
    id: 6,
    name: 'Nova Home Speaker',
    brand: 'Nexa',
    price: 329,
    image:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
    category: 'Audio',
  },
];

export const categories = ['All', ...new Set(products.map((product) => product.category))];

