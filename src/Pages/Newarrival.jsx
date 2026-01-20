import React, { useState, useRef } from "react";
import Products from "../Data/Product";
import { useNavigate } from "react-router-dom";

export default function Newarrival() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeGrid, setActiveGrid] = useState(4);
  const [products, setProducts] = useState(Products);

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("wishlistItems") : null;
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const toggleWishlist = (product) => {
    let updated;
    if (wishlistItems.some((i) => i.id === product.id)) {
      updated = wishlistItems.filter((i) => i.id !== product.id);
    } else {
      updated = [...wishlistItems, product];
    }
    setWishlistItems(updated);
    try {
      localStorage.setItem("wishlistItems", JSON.stringify(updated));
    } catch {
      // ignore storage errors
    }
  };

  const addToCart = (product) => {
    // Replace with real cart logic later
    alert("Added to cart: " + product.name);
  };

  // kept for possible future features
  const swiperRef = useRef(null);
  const [activePopup, setActivePopup] = useState(null);
  const togglePopup = (id) => setActivePopup(activePopup === id ? null : id);
  const navigate = useNavigate();

  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outStockOnly, setOutStockOnly] = useState(false);
  const [price, setPrice] = useState(500);

  const [openCategory, setOpenCategory] = useState(true);
  const [openAvailability, setOpenAvailability] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);

  const applyFilter = (
    category = selectedCategory,
    inStock = inStockOnly,
    outStock = outStockOnly,
    maxPrice = price
  ) => {
    const numericMaxPrice = Number(maxPrice);
    let filtered = Products;

    if (category) filtered = filtered.filter((p) => p.category === category);
    if (inStock && !outStock) filtered = filtered.filter((p) => p.inStock === true);
    if (!inStock && outStock) filtered = filtered.filter((p) => p.inStock === false);

    filtered = filtered.filter((p) => Number(p.price) <= numericMaxPrice);

    setProducts(filtered);
  };

  return (
    <div>
      {/* HEADER */}
      <div className="container-fluid text-center py-16 bg-[#fef3f1]">
        <h2 className="text-4xl">New Arrival</h2>
        <p>Shop through our latest selection of Fashion</p>
      </div>

      {/* TOP BAR */}
      <div className="w-full flex items-center justify-between gap-4 px-4 py-4 border-b flex-wrap">
        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 border px-4 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          ☰ FILTER
        </button>

        <div className="hidden md:flex items-center gap-3">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setActiveGrid(num)}
              className={`flex gap-1 ${activeGrid === num ? "text-black" : "text-gray-400"}`}
            >
              {Array.from({ length: num }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${activeGrid === num ? "bg-black" : "bg-gray-400"}`}
                />
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

      {/* PRODUCT GRID */}
      <div
        className={`max-w-7xl mx-auto p-6 grid gap-6 ${
          activeGrid === 1
            ? "grid-cols-1"
            : activeGrid === 2
            ? "grid-cols-2"
            : activeGrid === 3
            ? "grid-cols-3"
            : activeGrid === 4
            ? "grid-cols-4"
            : activeGrid === 5
            ? "grid-cols-5"
            : "grid-cols-6"
        }`}
      >
        {products.map((p) => (
          <div key={p.id} className="group relative">
            {/* CARD */}
            <div className="relative overflow-hidden rounded-xl bg-[#f5f5f5]">
              {/* IMAGE WRAPPER */}
              <div className="relative w-full h-[380px]">
                <img
                  src={p.img1}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={p.img2}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              {/* ACTION BUTTONS (z-20 so they are above normal content) */}
              <div
                className="
                  absolute bottom-4 left-1/2 -translate-x-1/2
                  flex gap-2
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300
                  z-20
                "
              >
                {/* Note: icons have pointer-events-none so button receives clicks reliably */}
                <button
                  type="button"
                  onClick={() => addToCart(p)}
                  aria-label={`Add ${p.name} to cart`}
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  <i className="fa-solid fa-cart-plus pointer-events-none" />
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(p)}
                  aria-label={isInWishlist(p.id) ? "Remove from wishlist" : "Add to wishlist"}
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  <i
                    className={`fa-heart pointer-events-none ${isInWishlist(p.id) ? "fa-solid text-red-500" : "fa-regular"}`}
                  />
                </button>

                <button
                  type="button"
                  aria-label="Compare"
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                  onClick={() => {
                    // placeholder compare action
                    alert(`Compare ${p.name}`);
                  }}
                >
                  <i className="fa-solid fa-code-compare pointer-events-none" />
                </button>

                <button
                  type="button"
                  aria-label="Quick view"
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                  onClick={() => togglePopup(p.id)}
                >
                  <i className="fa-regular fa-eye pointer-events-none" />
                </button>
              </div>
            </div>

            {/* INFO */}
            <h6 className="mt-3 text-sm">{p.name}</h6>
            <p className="font-bold">${p.price}</p>

            {/* COLORS */}
            <div className="flex gap-2">
              {p.colors?.map((c, i) => (
                <span key={i} className="w-4 h-4 rounded-full border" style={{ background: c }} />
              ))}
            </div>

            {/* Optional quick view popup (simple inline render) */}
            {activePopup === p.id && (
              <div className="absolute inset-0 bg-white/90 p-4 z-30 flex flex-col">
                <button
                  type="button"
                  onClick={() => setActivePopup(null)}
                  className="self-end mb-4"
                >
                  Close
                </button>
                <div className="flex gap-4">
                  <img src={p.img1} alt={p.name} className="w-40 h-40 object-cover" />
                  <div>
                    <h4 className="font-bold">{p.name}</h4>
                    <p>${p.price}</p>
                    <p className="text-sm mt-2">{p.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FILTER SIDEBAR - only render when open so it can't block clicks when closed */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-[350px] bg-white shadow-lg transform transition-transform duration-300 translate-x-0">
            {/* HEADER */}
            <div className="p-4 border-b flex justify-between items-center">
              <div className="font-medium">☰ FILTER</div>
              <button type="button" onClick={() => setIsFilterOpen(false)}>✕</button>
            </div>

            <div className="p-4 space-y-6 overflow-y-auto h-full">
              {/* Product categories */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenCategory((s) => !s)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  Product categories <span>{openCategory ? "⌃" : "⌄"}</span>
                </button>

                {openCategory && (
                  <div className="mt-4 space-y-2">
                    {["Fashion", "Men", "Women", "Denim", "Dress"].map((cat) => (
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
                <button
                  type="button"
                  onClick={() => setOpenAvailability((s) => !s)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  Availability <span>{openAvailability ? "⌃" : "⌄"}</span>
                </button>

                {openAvailability && (
                  <div className="mt-4 space-y-3 text-sm">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setInStockOnly(checked);
                          if (checked) setOutStockOnly(false);
                          applyFilter(selectedCategory, checked, false, price);
                        }}
                      />
                      In stock
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={outStockOnly}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setOutStockOnly(checked);
                          if (checked) setInStockOnly(false);
                          applyFilter(selectedCategory, false, checked, price);
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
                <button
                  type="button"
                  onClick={() => setOpenPrice((s) => !s)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
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
                        const val = Number(e.target.value);
                        setPrice(val);
                        applyFilter(selectedCategory, inStockOnly, outStockOnly, val);
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

              <button
                type="button"
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
      )}
    </div>
  );
}