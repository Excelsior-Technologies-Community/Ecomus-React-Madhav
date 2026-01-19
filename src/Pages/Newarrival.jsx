import React, { useState } from "react";
import Products from '../Data/Product';

export default function Newarrival() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeGrid, setActiveGrid] = useState(4);

  // ================= PRODUCTS =================
  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem("wishlistItems")) || []
  );

  const toggleWishlist = (product) => {
    let updated;
    if (wishlistItems.some(i => i.id === product.id)) {
      updated = wishlistItems.filter(i => i.id !== product.id);
    } else {
      updated = [...wishlistItems, product];
    }
    setWishlistItems(updated);
    localStorage.setItem("wishlistItems", JSON.stringify(updated));
  };

  const [products, setProducts] = useState(Products);

  // ================= FILTER STATES =================
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outStockOnly, setOutStockOnly] = useState(false);
  const [price, setPrice] = useState(500);

  const [openCategory, setOpenCategory] = useState(true);
  const [openAvailability, setOpenAvailability] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);

  // ================= FILTER LOGIC =================
  const applyFilter = (
    category = selectedCategory,
    inStock = inStockOnly,
    outStock = outStockOnly,
    maxPrice = price
  ) => {
    let filtered = Products;

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (inStock && !outStock) {
      filtered = filtered.filter(p => p.inStock === true);
    }

    if (!inStock && outStock) {
      filtered = filtered.filter(p => p.inStock === false);
    }

    filtered = filtered.filter(p => p.price <= maxPrice);

    setProducts(filtered);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <div className="container-fluid text-center py-16 bg-[#fef3f1]">
        <h2 className="text-4xl">New Arrival</h2>
        <p>Shop through our latest selection of Fashion</p>
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="w-full flex items-center justify-between gap-4 px-4 py-4 border-b flex-wrap">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 border px-4 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          ☰ FILTER
        </button>

        <div className="hidden md:flex items-center gap-3">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setActiveGrid(num)}
              className={`flex gap-1 ${activeGrid === num ? "text-black" : "text-gray-400"}`}
            >
              {Array.from({ length: num }).map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${activeGrid === num ? "bg-black" : "bg-gray-400"}`}></span>
              ))}
            </button>
          ))}
        </div>

        <select className="border px-4 py-2 text-sm outline-none">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <div className={`max-w-7xl mx-auto p-6 grid gap-6
          ${activeGrid === 1 ? "grid-cols-1" :
          activeGrid === 2 ? "grid-cols-2" :
            activeGrid === 3 ? "grid-cols-3" :
              activeGrid === 4 ? "grid-cols-4" :
                activeGrid === 5 ? "grid-cols-5" :
                  "grid-cols-6"}`}>

        {products.map((p) => (
          <div key={p.id} className="group">
            {/* CARD */}
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              {/* IMAGES */}
              <div className="relative w-full h-[350px]">
                <img src={p.img1}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                <img src={p.img2}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* ACTION BUTTONS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition">

                {/* CART */}
                <button onClick={() => addToCart(p)}
                  className="w-10 h-10 bg-white rounded-lg shadow hover:bg-black hover:text-white">
                  <i className="fa-solid fa-cart-plus"></i>
                </button>

                {/* WISHLIST */}
                <button
                  onClick={() => toggleWishlist(p)}
                  className="w-10 h-10 bg-white rounded-lg shadow hover:bg-black hover:text-white">
                  <i className={`fa-heart ${wishlistItems.some(i => i.id === p.id) ? "fa-solid text-red-500" : "fa-regular"}`}></i>
                </button>

                {/* COMPARE */}
                <button
                  onClick={() => addToCompare(p)}
                  className="w-10 h-10 bg-white rounded-lg shadow hover:bg-black hover:text-white">
                  <i className="fa-solid fa-code-compare"></i>
                </button>

                {/* QUICK VIEW */}
                <button
                  onClick={() => setQuickViewProduct(p)}
                  className="w-10 h-10 bg-white rounded-lg shadow hover:bg-black hover:text-white">
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>

            {/* INFO */}
            <h6 className="mt-3 text-sm">{p.name}</h6>
            <p className="font-bold">${p.price}</p>

            {/* COLORS */}
            <div className="flex gap-2 mt-2">
              {p.colors?.map((c, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border"
                  style={{ background: c }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* ================= FILTER SIDEBAR ================= */}
      <div className={`fixed inset-0 z-[999] ${isFilterOpen ? "visible" : "invisible"}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)}></div>

        <div className={`absolute left-0 top-0 h-full w-[350px] bg-white shadow-lg transform transition-transform duration-300 ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}>

          {/* HEADER */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="font-medium">☰ FILTER</div>
            <button onClick={() => setIsFilterOpen(false)}>✕</button>
          </div>

          <div className="p-4 space-y-6 overflow-y-auto h-full">

            {/* PRODUCT CATEGORIES */}
            <div>
              <button onClick={() => setOpenCategory(!openCategory)} className="w-full flex justify-between items-center text-lg font-medium">
                Product categories <span>{openCategory ? "⌃" : "⌄"}</span>
              </button>

              {openCategory && (
                <div className="mt-4 space-y-2">
                  {["Fashion", "Men", "Women", "Denim", "Dress"].map(cat => (
                    <p
                      key={cat}
                      className={`cursor-pointer ${selectedCategory === cat ? "text-red-500" : ""}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        applyFilter(cat, inStockOnly, outStockOnly, price);
                      }}
                    >
                      {cat}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <hr />

            {/* AVAILABILITY */}
            <div>
              <button onClick={() => setOpenAvailability(!openAvailability)} className="w-full flex justify-between items-center text-lg font-medium">
                Availability <span>{openAvailability ? "⌃" : "⌄"}</span>
              </button>

              {openAvailability && (
                <div className="mt-4 space-y-3 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => {
                        setInStockOnly(e.target.checked);
                        setOutStockOnly(false);
                        applyFilter(selectedCategory, e.target.checked, false, price);
                      }}
                    />
                    In stock
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={outStockOnly}
                      onChange={(e) => {
                        setOutStockOnly(e.target.checked);
                        setInStockOnly(false);
                        applyFilter(selectedCategory, false, e.target.checked, price);
                      }}
                    />
                    Out of stock
                  </label>
                </div>
              )}
            </div>

            <hr />

            {/* PRICE */}
            <div>
              <button onClick={() => setOpenPrice(!openPrice)} className="w-full flex justify-between items-center text-lg font-medium">
                Price <span>{openPrice ? "⌃" : "⌄"}</span>
              </button>

              {openPrice && (
                <div className="mt-6">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                      applyFilter(selectedCategory, inStockOnly, outStockOnly, Number(e.target.value));
                    }}
                    className="w-full accent-red-500"
                  />

                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span>Price:</span>
                    <span className="border px-2 py-1">$0</span>
                    <span>-</span>
                    <span className="border px-2 py-1">${price}</span>
                  </div>
                </div>
              )}
            </div>

            <hr />

            {/* CLEAR */}
            <button
              onClick={() => {
                setProducts(Products);
                setSelectedCategory(null);
                setInStockOnly(false);
                setOutStockOnly(false);
                setPrice(500);
                setIsFilterOpen(false);
              }}
              className="border w-full py-2 hover:bg-black hover:text-white transition"
            >
              Clear Filters
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
