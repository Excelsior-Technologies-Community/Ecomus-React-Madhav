import React, { useState } from "react";

export default function Newarrival() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeGrid, setActiveGrid] = useState(4);

  // ================= PRODUCTS =================
  const allProducts = [
    { id: 1, name: "Red Dress", category: "Fashion", price: 120, inStock: true },
    { id: 2, name: "Blue Jeans", category: "Denim", price: 180, inStock: true },
    { id: 3, name: "Men Shirt", category: "Men", price: 90, inStock: true },
    { id: 4, name: "Women Top", category: "Women", price: 250, inStock: true },
    { id: 5, name: "Dress Gown", category: "Dress", price: 320, inStock: false },
    { id: 6, name: "Denim Jacket", category: "Denim", price: 200, inStock: false },
    { id: 7, name: "Fashion Skirt", category: "Fashion", price: 150, inStock: true },
    { id: 8, name: "Men Shoes", category: "Men", price: 280, inStock: true },
  ];

  const [products, setProducts] = useState(allProducts);

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
    let filtered = allProducts;

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

        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found</p>
        ) : (
          products.map((p) => (
            <div key={p.id} className="border p-4 hover:shadow transition">
              <div className="h-40 bg-gray-100 mb-3 flex items-center justify-center">Image</div>
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>
              <p className="font-bold">${p.price}</p>
              <p className="text-xs">{p.inStock ? "In Stock" : "Out of Stock"}</p>
            </div>
          ))
        )}
      </div>

      {/* ================= FILTER SIDEBAR ================= */}
      <div className={`fixed inset-0 z-[999] ${isFilterOpen ? "visible" : "invisible"}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)}></div>

        <div className={`absolute left-0 top-0 h-full w-[320px] bg-white shadow-lg transform transition-transform duration-300 ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}>

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
                  {["Fashion","Men","Women","Denim","Dress"].map(cat => (
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
                setProducts(allProducts);
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
