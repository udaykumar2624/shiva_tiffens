import React, { useState, useEffect } from "react";
import { MenuItem } from "../entities/MenuItem";
import { Button } from "../components/ui/Button";
import MenuItemCard from "../components/menu/MenuItemCard";
import { Badge } from "../components/ui/Badge";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    loadMenuItems();
    loadCart();
  }, []);

  const loadMenuItems = async () => {
    try {
      const items = await MenuItem.list();
      setMenuItems(items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadCart = () => {
    const saved = localStorage.getItem('shiva-tiffin-cart');
    if (saved) setCart(JSON.parse(saved));
  };

  const saveCart = (c) => {
    localStorage.setItem('shiva-tiffin-cart', JSON.stringify(c));
    setCart(c);
  };

  const addToCart = (item, isHalf=false) => {
    const id = `${item.id}-${isHalf?'half':'full'}`;
    const existing = cart.find(ci => ci.id === id);
    let newCart;
    if (existing) {
      newCart = cart.map(ci => ci.id===id ? {...ci, quantity: ci.quantity+1} : ci);
    } else {
      newCart = [...cart, { id, menu_item_id: item.id, name: item.name, price: isHalf ? item.half_price : item.full_price, is_half: isHalf, quantity: 1, image_url: item.image_url }];
    }
    saveCart(newCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      saveCart(cart.filter(c => c.id !== itemId));
    } else {
      saveCart(cart.map(c => c.id === itemId ? {...c, quantity: newQuantity} : c));
    }
  };

  const categories = ['all','breakfast','snacks','beverages'];
  const filtered = activeCategory === 'all' ? menuItems : menuItems.filter(m => m.category===activeCategory);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Our Menu</h1>
        {cart.length>0 && <div className="bg-orange-500 text-white px-3 py-2 rounded">Cart ({cart.reduce((a,b)=>a+b.quantity,0)})</div>}
      </div>

      <div className="mb-4 flex gap-2">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-2 rounded ${activeCategory===cat ? 'bg-orange-500 text-white' : 'bg-white border'}`}>{cat}</button>
        ))}
      </div>

      {loading ? <div>Loading...</div> : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <MenuItemCard key={item.id} item={item} onAddToCart={addToCart} cart={cart} onUpdateQuantity={updateQuantity} />
          ))}
        </div>
      )}
    </div>
  );
}
