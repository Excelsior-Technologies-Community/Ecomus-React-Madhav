import React, { useState } from 'react'

export default function Newarrival() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeGrid, setActiveGrid] = useState(4);

    // ================= PRODUCTS =================
    const allProducts = [
        { id: 1, name: "Red Dress", category: "Women", price: 1200 },
        { id: 2, name: "Blue Jeans", category: "Men", price: 1800 },
        { id: 3, name: "Kids T-Shirt", category: "Kids", price: 600 },
        { id: 4, name: "Women Top", category: "Women", price: 2500 },
        { id: 5, name: "Men Shoes", category: "Men", price: 3200 },
        { id: 6, name: "Kids Shorts", category: "Kids", price: 800 },
        { id: 7, name: "Women Skirt", category: "Women", price: 1500 },
        { id: 8, name: "Men Shirt", category: "Men", price: 900 },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState(null);
    const [products, setProducts] = useState(allProducts);


    // ================= FILTER LOGIC =================
    const applyFilter = (category = selectedCategory, price = priceRange) => {
        let filtered = allProducts;

        if (category) {
            filtered = filtered.filter(p => p.category === category);
        }

        if (price === "under1000") {
            filtered = filtered.filter(p => p.price < 1000);
        }

        if (price === "1000to3000") {
            filtered = filtered.filter(p => p.price >= 1000 && p.price <= 3000);
        }

        if (price === "above3000") {
            filtered = filtered.filter(p => p.price > 3000);
        }

        setProducts(filtered);
    };

    return (
        <>
            {/* ================= HEADER ================= */}
            <div className="container-fluid text-center py-16 bg-[#fef3f1]">
                <h2 className='text-4xl'>New Arrival</h2>
                <p>Shop through our latest selection of Fashion</p>
            </div>

            {/* ================= TOP BAR ================= */}
            <div className="w-full flex items-center justify-between gap-4 px-4 py-4 border-b flex-wrap">

                {/* LEFT - FILTER BUTTON */}
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className="flex items-center gap-2 border px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                    <i className="bi bi-sliders"></i>
                    FILTER
                </button>

                {/* CENTER - GRID TABS */}
                <div className="hidden md:flex items-center gap-3">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                            key={num}
                            onClick={() => setActiveGrid(num)}
                            className={`flex gap-1 ${activeGrid === num ? "text-black" : "text-gray-400"}`}
                        >
                            {Array.from({ length: num }).map((_, i) => (
                                <span
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${activeGrid === num ? "bg-black" : "bg-gray-400"}`}
                                ></span>
                            ))}
                        </button>
                    ))}
                </div>

                {/* RIGHT - SORT */}
                <select className="border px-4 py-2 text-sm outline-none">
                    <option>Featured</option>
                    <option>Best Selling</option>
                    <option>Alphabetically, A-Z</option>
                    <option>Alphabetically, Z-A</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Date, Old to New</option>
                    <option>Date, New to Old</option>
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
                    <p className="col-span-full text-center text-gray-500">
                        No products found
                    </p>
                ) : (
                    products.map((p) => (
                        <div key={p.id} className="border p-4 hover:shadow transition">
                            <div className="h-40 bg-gray-100 mb-3 flex items-center justify-center">
                                Image
                            </div>
                            <h3 className="font-medium">{p.name}</h3>
                            <p className="text-sm text-gray-500">{p.category}</p>
                            <p className="font-bold">₹{p.price}</p>
                        </div>
                    ))
                )}
            </div>

            {/* ================= FILTER SIDEBAR ================= */}
            <div className={`fixed inset-0 z-[999] transition ${isFilterOpen ? "visible" : "invisible"}`}>
                {/* BACKDROP */}
                <div
                    className={`absolute inset-0 bg-black/40 transition ${isFilterOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsFilterOpen(false)}
                ></div>

                {/* SIDEBAR */}
                <div className={`absolute left-0 top-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    {/* HEADER */}
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="font-bold">Filter</h3>
                        <button onClick={() => setIsFilterOpen(false)}>✕</button>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4 space-y-6">
                        {/* CATEGORY */}
                        <div>
                            <p className="font-medium mb-2">Categories</p>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p className="cursor-pointer hover:text-black" onClick={() => {
                                    setSelectedCategory("Women");
                                    applyFilter("Women", null);
                                    setIsFilterOpen(false);
                                }}>Women</p>
                                <p className="cursor-pointer hover:text-black" onClick={() => {
                                    setSelectedCategory("Men");
                                    applyFilter("Men", null);
                                    setIsFilterOpen(false);
                                }}>Men</p>
                                <p className="cursor-pointer hover:text-black" onClick={() => {
                                    setSelectedCategory("Kids");
                                    applyFilter("Kids", null);
                                    setIsFilterOpen(false);
                                }}>Kids</p>
                            </div>
                        </div>

                        <hr />

                        {/* AVAILABILITY */}
                        <div>
                            <p className="font-medium mb-2">Availability</p>
                            <div className="space-y-3 text-sm text-gray-600">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={inStockOnly}
                                        onChange={(e) => {
                                            const val = e.target.checked;
                                            setInStockOnly(val);
                                            setOutOfStockOnly(false);
                                            applyFilter(null, null, val, false);
                                        }}
                                    />
                                    In stock (5)
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={outOfStockOnly}
                                        onChange={(e) => {
                                            const val = e.target.checked;
                                            setOutOfStockOnly(val);
                                            setInStockOnly(false);
                                            applyFilter(null, null, false, val);
                                        }}
                                    />
                                    Out of stock (3)
                                </label>
                            </div>
                        </div>


                        {/* PRICE */}
                        <div>
                            <p className="font-medium mb-2">Price</p>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p className="cursor-pointer hover:text-black" onClick={() => {
                                    setPriceRange("under1000");
                                    applyFilter(null, "under1000");
                                    setIsFilterOpen(false);
                                }}>Under ₹1000</p>

                                <p className="cursor-pointer hover:text-black" onClick={() => {
                                    setPriceRange("1000to3000");
                                    applyFilter(null, "1000to3000");
                                    setIsFilterOpen(false);
                                }}>₹1000 - ₹3000</p>

                                <p className="cursor-pointer hover:text-black" onClick={() => {
                                    setPriceRange("above3000");
                                    applyFilter(null, "above3000");
                                    setIsFilterOpen(false);
                                }}>Above ₹3000</p>
                            </div>
                        </div>

                        <hr />

                        {/* CLEAR */}
                        <button
                            onClick={() => {
                                setProducts(allProducts);
                                setSelectedCategory(null);
                                setPriceRange(null);
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
    )
}
