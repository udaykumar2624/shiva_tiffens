// Mock MenuItem API used by Menu.js
const sample = [
  {
    id: '1',
    name: 'Special Dosa',
    description: 'Crispy dosa served with sambhar and chutneys',
    full_price: 40,
    half_price: 25,
    image_url: 'https://images.unsplash.com/photo-1604908177522-7f2d8a7f3a48?q=80&w=800&auto=format&fit=crop',
    category: 'breakfast',
    is_available: true,
    is_half_available: true
  },
  {
    id: '2',
    name: 'Idli Plate',
    description: 'Soft, fluffy idlis with sambar',
    full_price: 30,
    half_price: 20,
    image_url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop',
    category: 'breakfast',
    is_available: true,
    is_half_available: true
  },
  {
    id: '3',
    name: 'Filter Coffee',
    description: 'Fresh filter coffee',
    full_price: 20,
    image_url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop',
    category: 'beverages',
    is_available: true,
    is_half_available: false
  }
];

export const MenuItem = {
  list: async () => {
    // simulate network
    await new Promise(res => setTimeout(res, 200));
    return sample;
  }
};
