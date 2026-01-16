import React, { useState } from 'react'

export default function Newarrival() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeGrid, setActiveGrid] = useState(4);


    return (
        <>
            <div className="container-fluid text-center py-16 bg-[#fef3f1]">
                <h2 className='text-4xl'>New Arrival</h2>
                <p className=''>Shop through our latest selection of Fashion</p>
            </div>

            {/* TOP BAR */}
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
                        <button key={num} onClick={() => setActiveGrid(num)} className={`flex gap-1 ${activeGrid === num ? "text-black" : "text-gray-400"}`}>
                            {Array.from({ length: num }).map((_, i) => (
                                <span key={i} className={`w-2 h-2 rounded-full ${activeGrid === num ? "bg-black" : "bg-gray-400"}`}></span>
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

            {/* FILTER SIDEBAR */}
            <div
                className={`fixed inset-0 z-[999] transition ${isFilterOpen ? "visible" : "invisible"
                    }`}
            >
                {/* BACKDROP */}
                <div
                    className={`absolute inset-0 bg-black/40 transition ${isFilterOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setIsFilterOpen(false)}
                ></div>

                {/* SIDEBAR */}
                <div
                    className={`absolute left-0 top-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="font-bold">Filter</h3>
                        <button onClick={() => setIsFilterOpen(false)}>✕</button>
                    </div>

                    <div className="p-4">
                        <p className="font-medium mb-2">Categories</p>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>Women</p>
                            <p>Men</p>
                            <p>Kids</p>
                        </div>

                        <hr className="my-4" />

                        <p className="font-medium mb-2">Price</p>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>Under ₹1000</p>
                            <p>₹1000 - ₹3000</p>
                            <p>Above ₹3000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
