import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Product data with proper structure
const Products = [
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    category: "Fashion",
    inStock: true,
    img1: "../src/assets/images/imgi_18_white-1.jpg",
    img2: "../src/assets/images/imgi_19_black-1.jpg",
    colorImages: {
      orange: "../src/assets/images/imgi_17_orange-1.jpg",
      black: "../src/assets/images/imgi_19_black-1.jpg",
      white: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["orange", "black", "white"],
    sizes: ["S", "M", "L"],
    description: "Comfortable ribbed tank top for everyday wear"
  },
  {
    id: 2,
    name: "Ribbed Modal T-shirt",
    price: 18.95,
    category: "Fashion",
    inStock: true,
    img1: "../src/assets/images/imgi_38_green.jpg",
    img2: "../src/assets/images/imgi_36_brown.jpg",
    colorImages: {
      brown: "../src/assets/images/imgi_17_orange-1.jpg",
      pink: "../src/assets/images/imgi_19_black-1.jpg",
      lightgreen: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["brown", "pink", "lightgreen"],
    sizes: ["S", "M", "L"],
    description: "Soft modal fabric t-shirt with ribbed texture"
  },
  {
    id: 3,
    name: "Oversized Printed T-shirt",
    price: 10.0,
    category: "Men",
    inStock: true,
    img1: "../src/assets/images/imgi_20_white-3.jpg",
    img2: "../src/assets/images/imgi_37_purple.jpg",
    colorImages: {},
    colors: [],
    sizes: ["S", "M", "L"],
    description: "Trendy oversized printed t-shirt"
  },
  {
    id: 4,
    name: "Oversized Printed T-shirt",
    price: 16.95,
    category: "Women",
    inStock: false,
    img1: "../src/assets/images/imgi_22_white-2.jpg",
    img2: "../src/assets/images/imgi_38_green.jpg",
    colorImages: {
      white: "../src/assets/images/imgi_17_orange-1.jpg",
      violet: "../src/assets/images/imgi_19_black-1.jpg",
      black: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["white", "violet", "black"],
    sizes: ["S", "M", "L"],
    description: "Stylish oversized t-shirt with unique prints"
  },
  {
    id: 5,
    name: "V-neck linen T-shirt",
    price: 16.95,
    category: "Men",
    inStock: true,
    img1: "../src/assets/images/imgi_25_brown-2.jpg",
    img2: "../src/assets/images/imgi_39_light-green-1.jpg",
    colorImages: {
      orange: "../src/assets/images/imgi_17_orange-1.jpg",
      black: "../src/assets/images/imgi_19_black-1.jpg",
      white: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["orange", "black", "white"],
    sizes: ["S", "M", "L"],
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
    colorImages: {
      brown: "../src/assets/images/imgi_17_orange-1.jpg",
      pink: "../src/assets/images/imgi_19_black-1.jpg",
      lightgreen: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["brown", "pink", "lightgreen"],
    sizes: ["S", "M", "L"],
    description: "Comfortable loose fit sweatshirt"
  },
  {
    id: 7,
    name: "Regular Fit oxford Shirt",
    price: 10.0,
    category: "Men",
    inStock: true,
    img1: "../src/assets/images/imgi_51_white-7.jpg",
    img2: "../src/assets/images/imgi_41_black-3.jpg",
    colorImages: {},
    colors: [],
    sizes: ["S", "M", "L"],
    description: "Classic oxford shirt for formal occasions"
  },
  {
    id: 8,
    name: "Loose Fit Hoodie",
    price: 16.95,
    category: "Fashion",
    inStock: true,
    img1: "../src/assets/images/imgi_52_white-8.jpg",
    img2: "../src/assets/images/imgi_42_blue.jpg",
    colorImages: {
      white: "../src/assets/images/imgi_17_orange-1.jpg",
      violet: "../src/assets/images/imgi_19_black-1.jpg",
      black: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["white", "violet", "black"],
    sizes: ["S", "M", "L"],
    description: "Cozy loose fit hoodie for casual wear"
  },
  {
    id: 9,
    name: "Patterned scarf",
    price: 16.95,
    category: "Fashion",
    inStock: false,
    img1: "../src/assets/images/imgi_56_brown-4.jpg",
    img2: "../src/assets/images/imgi_42_blue.jpg",
    colorImages: {
      orange: "../src/assets/images/imgi_17_orange-1.jpg",
      black: "../src/assets/images/imgi_19_black-1.jpg",
      white: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["orange", "black", "white"],
    sizes: ["S", "M", "L"],
    description: "Stylish patterned scarf for all seasons"
  },
  {
    id: 10,
    name: "Slim Fit Fine-Knit Turtleneck Sweater",
    price: 18.95,
    category: "Denim",
    inStock: true,
    img1: "../src/assets/images/imgi_58_black-9.jpg",
    img2: "../src/assets/images/imgi_43_dark-blue.jpg",
    colorImages: {
      brown: "../src/assets/images/imgi_17_orange-1.jpg",
      pink: "../src/assets/images/imgi_19_black-1.jpg",
      lightgreen: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["brown", "pink", "lightgreen"],
    sizes: ["S", "M", "L"],
    description: "Elegant turtleneck sweater with slim fit"
  },
  {
    id: 11,
    name: "Slim Fit Fine-Knit Turtleneck Sweater",
    price: 10.0,
    category: "Dress",
    inStock: true,
    img1: "../src/assets/images/imgi_61_grey-2.jpg",
    img2: "../src/assets/images/imgi_44_white-6.jpg",
    colorImages: {},
    colors: [],
    sizes: ["S", "M", "L"],
    description: "Fine-knit turtleneck in neutral colors"
  },
  {
    id: 12,
    name: "Slim Fit Fine-Knit Turtleneck Sweater",
    price: 16.95,
    category: "Fashion",
    inStock: true,
    img1: "../src/assets/images/imgi_65_black-11.jpg",
    img2: "../src/assets/images/imgi_45_light-grey.jpg",
    colorImages: {
      white: "../src/assets/images/imgi_17_orange-1.jpg",
      violet: "../src/assets/images/imgi_19_black-1.jpg",
      black: "../src/assets/images/imgi_18_white-1.jpg"
    },
    colors: ["white", "violet", "black"],
    sizes: ["S", "M", "L"],
    description: "Versatile turtleneck sweater for winter"
  },
];

export default function Newarrival({ addToCart, toggleWishlist, isInWishlist }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  const [quickViewImage, setQuickViewImage] = useState(null);

  const [products, setProducts] = useState(Products);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [activeGrid, setActiveGrid] = useState(4);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [activePopup, setActivePopup] = useState(null);
  const togglePopup = (id) => {
    setQuickViewImage(null);
    setSelectedColor(null);
    setSelectedSize(null);
    setQty(1);
    setActivePopup(activePopup === id ? null : id);
  };

  const [hoverImage, setHoverImage] = useState({});

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
    maxPrice = price,
    brands = selectedBrands,
    colors = selectedColors,
    sizes = selectedSizes
  ) => {
    let filtered = Products;

    if (category) filtered = filtered.filter((p) => p.category === category);

    if (inStock && !outStock) filtered = filtered.filter((p) => p.inStock === true);
    if (!inStock && outStock) filtered = filtered.filter((p) => p.inStock === false);

    filtered = filtered.filter((p) => Number(p.price) <= Number(maxPrice));

    if (brands.length) filtered = filtered.filter((p) => brands.includes(p.brand));

    if (colors.length) filtered = filtered.filter((p) => p.colors?.some((c) => colors.includes(c)));

    if (sizes.length) filtered = filtered.filter((p) => p.sizes?.some((s) => sizes.includes(s)));

    setProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="w-full text-center py-16 bg-pink-50">
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
          <option>Best Selling</option>
          <option>Alphabetically, A-Z</option>
          <option>Alphabetically, Z-A</option>
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
          <option>Date, old to new</option>
          <option>Date, new to old</option>
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
            {/* ================= GRID 1 SPECIAL LAYOUT ================= */}
            {activeGrid === 1 ? (
              <div className="flex flex-col md:flex-row gap-8 border-b pb-10">
                {/* IMAGE */}
                <div className="w-full md:w-[420px] bg-gray-100 rounded-xl overflow-hidden">
                  <img src={p.img1} alt={p.name} className="w-full h-[520px] object-cover" />
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">{p.name}</h2>
                  <p className="text-xl font-bold">{`$${p.price}`}</p>

                  <p className="text-gray-600 mt-4 max-w-xl">{p.description}</p>

                  {/* COLORS */}
                  <div className="flex gap-3 mt-6">
                    {p.colors?.map((c, i) => (
                      <span
                        key={i}
                        className="w-6 h-6 rounded-full border cursor-pointer"
                        style={{ background: c }}
                      />
                    ))}
                  </div>

                  {/* SIZES */}
                  <div className="flex gap-4 mt-6 text-sm">
                    {["S", "M", "L", "XL"].map((s) => (
                      <button key={s} className="border px-3 py-1 hover:border-black">
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => addToCart(p)}
                      className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => toggleWishlist(p)}
                      className="w-12 h-12 border flex items-center justify-center text-xl hover:bg-black hover:text-white transition"
                    >
                      <i className={`fa-heart ${isInWishlist(p.id) ? "fa-solid text-red-500" : "fa-regular"}`} />
                    </button>

                    <button
                      onClick={() => togglePopup(p.id)}
                      className="w-12 h-12 border flex items-center justify-center text-xl hover:bg-black hover:text-white transition"
                    >
                      <i className="fa-regular fa-eye" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* ================= NORMAL GRID CARD ================= */
              <div className="relative overflow-hidden rounded-xl bg-gray-100 min-h-[380px]">
                {/* IMAGE WRAPPER WITH FIXED HEIGHT */}
                <div className="product-img1">
                  <img
                    src={hoverImage[p.id] || p.img1}
                    alt={p.name}
                    className="img-main1"
                    onError={(e) => {
                      e.currentTarget.style.background = "#ddd";
                      e.currentTarget.alt = "Image not found";
                    }}
                  />

                  <img
                    src={p.img2}
                    alt={p.name}
                    className="img-hover1"
                    onError={(e) => {
                      e.currentTarget.style.background = "#ddd";
                      e.currentTarget.alt = "Image not found";
                    }}
                  />
                </div>

                {/* ACTION BUTTONS - POSITIONED ABSOLUTELY OVER IMAGES */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 gap-1 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 hidden group-hover:flex">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(p);
                    }}
                    aria-label={`Add ${p.name} to cart`}
                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-lg">
                      <i className="fa-solid fa-cart-plus" />
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist(p);
                    }}
                    aria-label={isInWishlist(p.id) ? "Remove from wishlist" : "Add to wishlist"}
                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-lg">
                      <i className={`fa-heart ${isInWishlist(p.id) ? "fa-solid text-danger" : "fa-regular"}`} />
                    </span>
                  </button>

                  <button
                    type="button"
                    aria-label="Compare"
                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      alert(`Compare ${p.name}`);
                    }}
                  >
                    <span className="text-lg">
                      <i className="fa-solid fa-code-compare" />
                    </span>
                  </button>

                  <button
                    type="button"
                    aria-label="Quick view"
                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      togglePopup(p.id);
                    }}
                  >
                    <span className="text-lg">
                      <i className="fa-regular fa-eye" />
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* INFO (card footer) */}
            <h6 className="mt-3 text-sm">{p.name}</h6>
            <p className="font-bold">{`$${p.price}`}</p>

            {/* COLORS */}
            <div className="flex gap-2 mt-2">
              {p.colors?.map((c, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border cursor-pointer"
                  style={{ background: c }}
                  onMouseEnter={() => {
                    if (p.colorImages?.[c]) {
                      setHoverImage((prev) => ({ ...prev, [p.id]: p.colorImages[c] }));
                    }
                  }}
                  onMouseLeave={() => {
                    setHoverImage((prev) => ({ ...prev, [p.id]: null }));
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center py-10">
        <div className="flex items-center gap-3">
          {/* ACTIVE */}
          <button className="w-11 h-11 bg-black text-white border rounded flex items-center justify-center">1</button>

          {/* NORMAL */}
          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">2</button>

          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">3</button>

          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">4</button>

          {/* NEXT */}
          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">
            <i className="bi bi-caret-right-fill" />
          </button>
        </div>
      </div>

      {/* Quick view popup - FIXED POSITION MODAL */}
      {activePopup && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const product = products.find((pp) => pp.id === activePopup);
              if (!product) return null;

              return (
                <>
                  {/* CLOSE */}
                  <button onClick={() => setActivePopup(null)} className="absolute top-4 right-4 text-2xl z-50 hover:text-red-500">
                    <i className="bi bi-x" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* LEFT IMAGE */}
                    <div className="relative bg-gray-100">
                      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="w-full h-full">
                        {/* Main image */}
                        <SwiperSlide>
                          <div className="overflow-hidden">
                            <img
                              src={quickViewImage || product.img1}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                        </SwiperSlide>

                        {/* Second image (if exists) */}
                        {product.img2 && (
                          <SwiperSlide>
                            <div className="overflow-hidden">
                              <img
                                src={product.img2}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                          </SwiperSlide>
                        )}

                        {/* Color images */}
                        {product.colorImages &&
                          Object.values(product.colorImages).map((img, i) => (
                            <SwiperSlide key={i}>
                              <div className="overflow-hidden">
                                <img src={img} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                              </div>
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </div>

                    {/* RIGHT INFO */}
                    <div className="p-8 overflow-y-auto max-h-[90vh]">
                      <h2 className="text-2xl font-semibold my-2">{product.name}</h2>

                      {/* Badge */}
                      <div className="flex items-center gap-2 mb-1">
                        <p className="border px-3 py-1 text-xs font-medium">BEST SELLER</p>
                        <p className="text-red-500 text-sm flex items-center gap-1">⚡ Selling fast! 48 people have this in their carts.</p>
                      </div>

                      <p className="text-2xl font-bold">{`$${product.price}`}</p>

                      <p className="text-gray-500 text-sm leading-relaxed">
                        {product.description || "Premium quality product with modern design and perfect fitting."}
                      </p>

                      {/* COLORS */}
                      <div className="flex gap-2 my-4">
                        {product.colors?.map((c, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-full border-2 cursor-pointer transition ${selectedColor === c ? "ring-2 ring-black scale-110" : ""}`}
                            style={{ background: c }}
                            onClick={() => {
                              setSelectedColor(c);
                              if (product.colorImages?.[c]) {
                                setQuickViewImage(product.colorImages[c]);
                              }
                            }}
                          />
                        ))}
                      </div>

                      {/* SIZE */}
                      <div className="my-2">
                        <p className="font-semibold">Size:</p>
                        <div className="flex gap-2">
                          {["S", "M", "L", "XL"].map((s) => (
                            <button
                              key={s}
                              onClick={() => setSelectedSize(s)}
                              className={`border px-3 py-1 ${selectedSize === s ? "border-black bg-black text-white" : "hover:border-black"}`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* QTY */}
                      <div className="my-2">
                        <p className="font-medium">Quantity:</p>
                        <div className="flex items-center border w-max">
                          <button className="px-4 py-2" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                          <span className="px-4">{qty}</span>
                          <button className="px-4 py-2" onClick={() => setQty((q) => q + 1)}>+</button>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex gap-2 my-2">
                        <button
                          className="flex-1 bg-black text-white py-2 font-medium hover:bg-gray-800 transition"
                          onClick={() => {
                            addToCart({
                              ...product,
                              selectedColor,
                              selectedSize,
                              qty
                            });
                            setActivePopup(null);
                          }}
                        >
                          {`Add to cart — $${product.price}`}
                        </button>

                        <button
                          className="w-14 border flex items-center justify-center text-xl hover:bg-black hover:text-white transition"
                          onClick={() => toggleWishlist(product)}
                        >
                          <i className={`fa-heart ${isInWishlist(product.id) ? "fa-solid text-red-500" : "fa-regular"}`} />
                        </button>

                        <button className="w-14 border flex items-center justify-center text-xl">⇄</button>
                      </div>

                      {/* Paypal fake button */}
                      <button className="w-full bg-yellow-400 py-2 font-semibold text-black">Buy with PayPal</button>

                      <p className="text-center text-sm text-gray-500 mt-3 underline cursor-pointer">More payment options</p>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* FILTER SIDEBAR */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[998]">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />

          <div className="absolute left-0 top-0 h-full w-[350px] bg-white shadow-lg overflow-y-auto">
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
                      <span className="border px-2 py-1">{`$${price}`}</span>
                    </div>
                  </div>
                )}
              </div>

              <hr />

              {/* BRAND */}
              <div>
                <p className="text-lg font-medium mb-3">Brand</p>
                {["Ecomus", "M&H"].map((b) => (
                  <label key={b} className="flex items-center gap-2 text-sm cursor-pointer mb-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(b)}
                      onChange={() => {
                        const updated = selectedBrands.includes(b) ? selectedBrands.filter((x) => x !== b) : [...selectedBrands, b];

                        setSelectedBrands(updated);
                        applyFilter(selectedCategory, inStockOnly, outStockOnly, price, updated, selectedColors, selectedSizes);
                      }}
                    />
                    {b}
                  </label>
                ))}
              </div>

              <hr />

              {/* COLOR */}
              <div>
                <p className="text-lg font-medium mb-3">Color</p>
                <div className="space-y-3">
                  {["beige", "black", "blue", "brown", "cream", "white", "violet", "orange", "pink"].map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => {
                        const updated = selectedColors.includes(c) ? selectedColors.filter((x) => x !== c) : [...selectedColors, c];

                        setSelectedColors(updated);
                        applyFilter(selectedCategory, inStockOnly, outStockOnly, price, selectedBrands, updated, selectedSizes);
                      }}
                    >
                      <span
                        className={`w-5 h-5 rounded-full border ${selectedColors.includes(c) ? "ring-2 ring-black" : ""}`}
                        style={{ background: c }}
                      />
                      <span className="capitalize text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr />

              {/* SIZE */}
              <div>
                <p className="text-lg font-medium mb-3">Size</p>
                {["S", "M", "L", "XL"].map((s) => (
                  <label key={s} className="flex items-center gap-2 text-sm cursor-pointer mb-2">
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(s)}
                      onChange={() => {
                        const updated = selectedSizes.includes(s) ? selectedSizes.filter((x) => x !== s) : [...selectedSizes, s];

                        setSelectedSizes(updated);
                        applyFilter(selectedCategory, inStockOnly, outStockOnly, price, selectedBrands, selectedColors, updated);
                      }}
                    />
                    {s}
                  </label>
                ))}
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
                  setSelectedBrands([]);
                  setSelectedColors([]);
                  setSelectedSizes([]);
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