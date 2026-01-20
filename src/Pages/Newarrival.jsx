import React, { useState, useRef } from "react";

// Product data with proper structure
const Products = [
    {
      id: 1,
      name: "Ribbed Tank Top",
      price: 16.95,
      category: "Fashion",
      inStock: true,
      img1: "../src/assets/images/imgi_18_white-1.jpg",
      img2: "../src/assets/images/imgi_18_white-1.jpg",
      colors: ["orange", "black", "white"],
      description: "Comfortable ribbed tank top for everyday wear"
    },
    {
      id: 2,
      name: "Ribbed Modal T-shirt",
      price: 18.95,
      category: "Fashion",
      inStock: true,
      img1: "../src/assets/images/imgi_38_green.jpg",
      img2: "../src/assets/images/imgi_37_purple.jpg",
      colors: ["brown", "pink", "lightgreen"],
      description: "Soft modal fabric t-shirt with ribbed texture"
    },
    {
      id: 3,
      name: "Oversized Printed T-shirt",
      price: 10.0,
      category: "Men",
      inStock: true,
      img1: "../src/assets/images/imgi_20_white-3.jpg",
      img2: "../src/assets/images/imgi_21_white-4.jpg",
      colors: [],
      description: "Trendy oversized printed t-shirt"
    },
    {
      id: 4,
      name: "Oversized Printed T-shirt",
      price: 16.95,
      category: "Women",
      inStock: false,
      img1: "../src/assets/images/imgi_22_white-2.jpg",
      img2: "../src/assets/images/imgi_23_pink-1.jpg",
      colors: ["white", "violet", "black"],
      description: "Stylish oversized t-shirt with unique prints"
    },
    {
      id: 5,
      name: "V-neck linen T-shirt",
      price: 16.95,
      category: "Men",
      inStock: true,
      img1: "../src/assets/images/imgi_25_brown-2.jpg",
      img2: "../src/assets/images/imgi_26_brown-3.jpg",
      colors: ["orange", "black", "white"],
      description: "Breathable linen t-shirt with v-neck design"
    },
    {
      id: 6,
      name: "Loose Fit Sweatshirt",
      price: 18.95,
      category: "Fashion",
      inStock: true,
      img1: "../src/assets/images/imgi_39_light-green-1.jpg",
      img2: "../src/assets/images/imgi_40_light-green-2.jpg",
      colors: ["brown", "pink", "lightgreen"],
      description: "Comfortable loose fit sweatshirt"
    },
    {
      id: 7,
      name: "Regular Fit oxford Shirt",
      price: 10.0,
      category: "Men",
      inStock: true,
      img1: "../src/assets/images/imgi_51_white-7.jpg",
      img2: "../src/assets/images/imgi_47_black-5.jpg",
      colors: [],
      description: "Classic oxford shirt for formal occasions"
    },
    {
      id: 8,
      name: "Loose Fit Hoodie",
      price: 16.95,
      category: "Fashion",
      inStock: true,
      img1: "../src/assets/images/imgi_52_white-8.jpg",
      img2: "../src/assets/images/imgi_53_black-6.jpg",
      colors: ["white", "violet", "black"],
      description: "Cozy loose fit hoodie for casual wear"
    },
    {
      id: 9,
      name: "Patterned scarf",
      price: 16.95,
      category: "Fashion",
      inStock: false,
      img1: "../src/assets/images/imgi_56_brown-4.jpg",
      img2: "../src/assets/images/imgi_57_black-8.jpg",
      colors: ["orange", "black", "white"],
      description: "Stylish patterned scarf for all seasons"
    },
    {
      id: 10,
      name: "Slim Fit Fine-Knit Turtleneck Sweater",
      price: 18.95,
      category: "Denim",
      inStock: true,
      img1: "../src/assets/images/imgi_58_black-9.jpg",
      img2: "../src/assets/images/imgi_59_black-10.jpg",
      colors: ["brown", "pink", "lightgreen"],
      description: "Elegant turtleneck sweater with slim fit"
    },
    {
      id: 11,
      name: "Slim Fit Fine-Knit Turtleneck Sweater",
      price: 10.0,
      category: "Dress",
      inStock: true,
      img1: "../src/assets/images/imgi_61_grey-2.jpg",
      img2: "../src/assets/images/imgi_62_grey.jpg",
      colors: [],
      description: "Fine-knit turtleneck in neutral colors"
    },
    {
      id: 12,
      name: "Slim Fit Fine-Knit Turtleneck Sweater",
      price: 16.95,
      category: "Fashion",
      inStock: true,
      img1: "../src/assets/images/imgi_65_black-11.jpg",
      img2: "../src/assets/images/imgi_66_black-12.jpg",
      colors: ["white", "violet", "black"],
      description: "Versatile turtleneck sweater for winter"
    },
];

export default function Newarrival() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeGrid, setActiveGrid] = useState(4);
  const [products, setProducts] = useState(Products);

  const [wishlistItems, setWishlistItems] = useState([]);

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const toggleWishlist = (product) => {
    let updated;
    if (wishlistItems.some((i) => i.id === product.id)) {
      updated = wishlistItems.filter((i) => i.id !== product.id);
    } else {
      updated = [...wishlistItems, product];
    }
    setWishlistItems(updated);
  };

  const addToCart = (product) => {
    alert("Added to cart: " + product.name);
  };

  const [activePopup, setActivePopup] = useState(null);
  const togglePopup = (id) => setActivePopup(activePopup === id ? null : id);

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
      <div className="container-fluid text-center py-16 bg-pink-50">
        <h2 className="text-4xl font-bold">New Arrival</h2>
        <p className="mt-2 text-gray-600">Shop through our latest selection of Fashion</p>
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
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              {/* IMAGE WRAPPER - FIXED: Added pointer-events-none to images */}
              <div className="relative w-full h-[380px]">
                <img
                  src={p.img1}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"
                />
                <img
                  src={p.img2}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                />
              </div>

              {/* ACTION BUTTONS */}
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
                <button
                  type="button"
                  onClick={() => addToCart(p)}
                  aria-label={`Add ${p.name} to cart`}
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  🛒
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(p)}
                  aria-label={isInWishlist(p.id) ? "Remove from wishlist" : "Add to wishlist"}
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  <span className={isInWishlist(p.id) ? "text-red-500" : ""}>
                    {isInWishlist(p.id) ? "❤️" : "🤍"}
                  </span>
                </button>

                <button
                  type="button"
                  aria-label="Compare"
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                  onClick={() => {
                    alert(`Compare ${p.name}`);
                  }}
                >
                  ⚖️
                </button>

                <button
                  type="button"
                  aria-label="Quick view"
                  className="w-11 h-11 bg-white rounded-lg shadow flex items-center justify-center hover:bg-black hover:text-white transition"
                  onClick={() => togglePopup(p.id)}
                >
                  👁️
                </button>
              </div>
            </div>

            {/* INFO */}
            <h6 className="mt-3 text-sm">{p.name}</h6>
            <p className="font-bold">${p.price}</p>

            {/* COLORS */}
            <div className="flex gap-2 mt-2">
              {p.colors?.map((c, i) => (
                <span key={i} className="w-4 h-4 rounded-full border" style={{ background: c }} />
              ))}
            </div>

            {/* Quick view popup */}
            {activePopup === p.id && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setActivePopup(null)}>
                <div className="bg-white rounded-lg p-6 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => setActivePopup(null)}
                    className="float-right text-2xl hover:text-red-500"
                  >
                    ✕
                  </button>
                  <div className="flex gap-4 mt-8">
                    <img src={p.img1} alt={p.name} className="w-40 h-40 object-cover rounded" />
                    <div>
                      <h4 className="font-bold text-xl">{p.name}</h4>
                      <p className="text-2xl font-bold mt-2">${p.price}</p>
                      <p className="text-sm mt-4 text-gray-600">{p.description}</p>
                      <button
                        onClick={() => addToCart(p)}
                        className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FILTER SIDEBAR */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-[350px] bg-white shadow-lg transform transition-transform duration-300 translate-x-0 overflow-y-auto">
            {/* HEADER */}
            <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <div className="font-medium">☰ FILTER</div>
              <button type="button" onClick={() => setIsFilterOpen(false)} className="text-xl">✕</button>
            </div>

            <div className="p-4 space-y-6">
              {/* Product categories */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenCategory((s) => !s)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  Product categories <span>{openCategory ? "−" : "+"}</span>
                </button>

                {openCategory && (
                  <div className="mt-4 space-y-2">
                    {["Fashion", "Men", "Women", "Denim", "Dress"].map((cat) => (
                      <p
                        key={cat}
                        className={`cursor-pointer hover:text-red-500 ${selectedCategory === cat ? "text-red-500 font-medium" : ""}`}
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
                  Availability <span>{openAvailability ? "−" : "+"}</span>
                </button>

                {openAvailability && (
                  <div className="mt-4 space-y-3 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
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

                    <label className="flex items-center gap-2 cursor-pointer">
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
                  Price <span>{openPrice ? "−" : "+"}</span>
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