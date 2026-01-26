import { useEffect, useState } from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import Collection from './Pages/Collection.jsx';
import Newarrival from './Pages/Newarrival.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import Shoppingcart from './Pages/Shoppingcart.jsx';
import Checkout from './Pages/Checkout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // 📖 Load wishlist
  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  // 💾 Save wishlist
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // 📖 Load cart
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // 💾 Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ❤️ Toggle wishlist (Home)
  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // ❌ Remove from wishlist (Wishlist page)
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  // 🔍 Check wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // 🛒 Add to cart
  const addToCart = (product) => {
    const newItem = {
      id: `${product.id}-${product.selectedColor || "default"}-${product.selectedSize || "default"}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      img: product.images?.[product.selectedColor] || product.img1 || product.img,
      color: product.selectedColor || "default",
      size: product.selectedSize || "default",
      qty: product.qty || 1,
    };

    setCart(prev => {
      const existing = prev.find(item => item.id === newItem.id);

      if (existing) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, qty: item.qty + newItem.qty }
            : item
        );
      }

      return [...prev, newItem];
    });
  };



  return (
    <BrowserRouter>
      <Header wishlistCount={wishlist.length} cart={cart} setCart={setCart} />

      <Routes>
        <Route path="/" element={<Home toggleWishlist={toggleWishlist} isInWishlist={isInWishlist} addToCart={addToCart} />} />

        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/newarrival" element={<Newarrival addToCart={addToCart} isInWishlist={isInWishlist} />} />

        <Route path='/product/:id' element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} isInWishlist={isInWishlist} />} />

        <Route path="/shoppingcart" element={<Shoppingcart cart={cart} setCart={setCart} addToCart={addToCart} wishlist={wishlist} setWishlist={setWishlist}/>} />
        
        <Route path="/checkout" element={<Checkout cart={cart} />}/>
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;