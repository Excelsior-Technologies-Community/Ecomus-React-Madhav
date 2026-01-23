import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PeopleAlsoBought({ addToCart, toggleWishlist, isInWishlist }) {

    // ================= SAMPLE DATA =================
    const products = [
        {
            id: 1,
            name: "Ribbed Tank Top",
            price: 16.95,
            images: {
                orange: "../src/assets/images/imgi_36_brown.jpg",
                black: "../src/assets/images/imgi_37_purple.jpg",
                white: "../src/assets/images/imgi_38_green.jpg",
            },
            colors: ["orange", "black"],
            sizes: ["S", "M", "L", "XL"],
            discount: null,
        },
        {
            id: 2,
            name: "Ribbed Modal T-shirt",
            price: 18.95,
            images: {
                brown: "../src/assets/images/imgi_39_light-green-1.jpg",
                pink: "../src/assets/images/imgi_40_light-green-2.jpg",
                green: "../src/assets/images/imgi_41_black-3.jpg",
            },
            colors: ["brown", "pink", "green"],
            sizes: ["S", "M", "L", "XL"],
            discount: "-33%",
        },
        {
            id: 3,
            name: "Oversized printed T-sirt",
            price: 16.95,
            images: {
                orange: "../src/assets/images/imgi_42_blue.jpg",
            },
            colors: ["orange"],
            sizes: ["S", "M", "L", "XL"],
            discount: null,
        },
        {
            id: 4,
            name: "Oversized printed T-sirt",
            price: 16.95,
            images: {
                orange: "../src/assets/images/imgi_43_dark-blue.jpg",
                black: "../src/assets/images/imgi_44_white-6.jpg",
                white: "../src/assets/images/imgi_45_light-grey.jpg",
            },
            colors: ["orange", "black", "white"],
            sizes: ["S", "M", "L", "XL"],
            discount: null,
        },
        {
            id: 5,
            name: "V-neck linen t-sirt",
            price: 16.95,
            images: {
                orange: "../src/assets/images/imgi_46_black-4.jpg",
                black: "../src/assets/images/imgi_47_black-5.jpg",
                white: "../src/assets/images/imgi_48_dark-blue-2.jpg",
            },
            colors: ["orange", "black", "white"],
            sizes: ["S", "M", "L", "XL"],
            discount: null,
        },
        {
            id: 6,
            name: "Loose fit sweetshirt",
            price: 16.95,
            images: {
                orange: "../src/assets/images/imgi_49_beige.jpg",
                black: "../src/assets/images/imgi_50_light-blue.jpg",
                white: "../src/assets/images/imgi_51_white-7.jpg",
            },
            colors: ["orange", "black", "white"],
            sizes: ["S", "M", "L", "XL"],
            discount: null,
        },
    ];

    // ================= STATES =================
    const [hovered, setHovered] = useState(null);
    const [quickView, setQuickView] = useState(null);

    const [activeColor, setActiveColor] = useState({});
    const [qvColor, setQvColor] = useState(null);
    const [qvSize, setQvSize] = useState("M");
    const [qvQty, setQvQty] = useState(1);

    // ================= UI =================
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 my-24">

                <h2 className="text-4xl font-semibold text-center mb-10">
                    People Also Bought
                </h2>

                <div className="relative group/swiper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: '.custom-prev-btn',
                            nextEl: '.custom-next-btn',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1.2 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {products.map((p) => {
                            const currentColor = activeColor[p.id] || p.colors[0];

                            return (
                                <SwiperSlide key={p.id}>
                                    <div
                                        className="group"
                                        onMouseEnter={() => setHovered(p.id)}
                                        onMouseLeave={() => setHovered(null)}
                                    >

                                        {/* ================= IMAGE CARD ================= */}
                                        <div className="relative bg-gray-100 rounded-xl overflow-hidden">

                                            {p.discount && (
                                                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full z-10">
                                                    {p.discount}
                                                </span>
                                            )}

                                            <img
                                                src={p.images[currentColor]}
                                                className="w-full h-[420px] object-cover transition-all duration-500"
                                                alt={p.name}
                                            />

                                            {/* ================= HOVER ACTIONS ================= */}
                                            <div
                                                className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300
                                                ${hovered === p.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                                            `}
                                            >
                                                {/* ADD TO CART */}
                                                <button
                                                    onClick={() =>
                                                        addToCart({
                                                            ...p,
                                                            selectedColor: currentColor,
                                                            selectedSize: p.sizes[0],
                                                            qty: 1,
                                                        })
                                                    }
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                >
                                                    <i className="fa-solid fa-cart-plus"></i>
                                                </button>

                                                {/* WISHLIST */}
                                                <button
                                                    onClick={() => toggleWishlist(p)}
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                >
                                                    <i
                                                        className={`fa-heart ${isInWishlist(p.id)
                                                            ? "fa-solid text-red-500"
                                                            : "fa-regular"
                                                            }`}
                                                    ></i>
                                                </button>

                                                {/* QUICK VIEW */}
                                                <button
                                                    onClick={() => {
                                                        setQuickView(p);
                                                        setQvColor(p.colors[0]);
                                                        setQvSize(p.sizes[0]);
                                                        setQvQty(1);
                                                    }}
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                >
                                                    <i className="fa-regular fa-eye"></i>
                                                </button>
                                            </div>
                                        </div>

                                        {/* ================= INFO ================= */}
                                        <div className="mt-4">
                                            <h4 className="text-sm">{p.name}</h4>
                                            <p className="font-semibold">${p.price}</p>

                                            {/* COLORS */}
                                            <div className="flex gap-2 mt-2">
                                                {p.colors.map((c) => (
                                                    <span
                                                        key={c}
                                                        className={`w-4 h-4 rounded-full border cursor-pointer ${currentColor === c ? "ring-2 ring-black" : ""
                                                            }`}
                                                        style={{ background: c }}
                                                        onMouseEnter={() =>
                                                            setActiveColor((prev) => ({ ...prev, [p.id]: c }))
                                                        }
                                                    ></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* ================= CUSTOM NAVIGATION BUTTONS ================= */}
                    <button
                        className="custom-prev-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/swiper:opacity-100 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <button
                        className="custom-next-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/swiper:opacity-100 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                {/* ================= QUICK VIEW POPUP ================= */}
                {quickView && (
                    <div
                        className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
                        onClick={() => setQuickView(null)}
                    >
                        <div
                            className="bg-white rounded-xl max-w-4xl w-full overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setQuickView(null)}
                                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark text-xl"></i>
                            </button>

                            <div className="grid md:grid-cols-2 gap-6 p-6">

                                <div className="bg-gray-100 rounded-xl overflow-hidden">
                                    <img
                                        src={quickView.images[qvColor]}
                                        className="w-full h-[400px] object-cover"
                                        alt={quickView.name}
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold">{quickView.name}</h2>
                                    <p className="text-xl font-bold my-2">${quickView.price}</p>

                                    {/* COLORS */}
                                    <div className="my-4">
                                        <p className="text-sm font-medium mb-2">Color:</p>
                                        <div className="flex gap-2">
                                            {quickView.colors.map((c) => (
                                                <span
                                                    key={c}
                                                    className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${qvColor === c ? "ring-2 ring-offset-2 ring-black scale-110" : "hover:scale-105"
                                                        }`}
                                                    style={{ background: c }}
                                                    onClick={() => setQvColor(c)}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SIZES */}
                                    <div className="my-4">
                                        <p className="text-sm font-medium mb-2">Size:</p>
                                        <div className="flex gap-2">
                                            {quickView.sizes.map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => setQvSize(s)}
                                                    className={`border px-4 py-2 rounded transition-all ${qvSize === s ? "bg-black text-white border-black" : "hover:border-black"
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* QTY */}
                                    <div className="my-4">
                                        <p className="text-sm font-medium mb-2">Quantity:</p>
                                        <div className="flex items-center gap-0 border rounded w-max">
                                            <button
                                                onClick={() => setQvQty((q) => Math.max(1, q - 1))}
                                                className="px-4 py-2 hover:bg-gray-100 transition"
                                            >
                                                <i className="fa-solid fa-minus text-sm"></i>
                                            </button>
                                            <span className="px-6 py-2 border-x min-w-[60px] text-center font-semibold">{qvQty}</span>
                                            <button
                                                onClick={() => setQvQty((q) => q + 1)}
                                                className="px-4 py-2 hover:bg-gray-100 transition"
                                            >
                                                <i className="fa-solid fa-plus text-sm"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* ACTIONS */}
                                    <div className="flex gap-3 mt-6">
                                        <button
                                            className="flex-1 bg-black text-white py-3 font-semibold rounded hover:bg-gray-800 transition-all duration-300"
                                            onClick={() => {
                                                addToCart({
                                                    ...quickView,
                                                    selectedColor: qvColor,
                                                    selectedSize: qvSize,
                                                    qty: qvQty,
                                                });
                                                setQuickView(null);
                                            }}
                                        >
                                            Add to Cart — ${(quickView.price * qvQty).toFixed(2)}
                                        </button>

                                        <button
                                            className="w-14 border rounded hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                                            onClick={() => toggleWishlist(quickView)}
                                        >
                                            <i
                                                className={`fa-heart text-xl ${isInWishlist(quickView.id)
                                                    ? "fa-solid text-red-500"
                                                    : "fa-regular"
                                                    }`}
                                            ></i>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className="max-w-7xl mx-auto px-4 my-24">

                <h1 className="text-4xl font-semibold text-center mb-10">
                    Recntly Viewed
                </h1>

                <div className="relative group/swiper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: '.custom-prev-btn',
                            nextEl: '.custom-next-btn',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1.2 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {products.map((p) => {
                            const currentColor = activeColor[p.id] || p.colors[0];

                            return (
                                <SwiperSlide key={p.id}>
                                    <div
                                        className="group"
                                        onMouseEnter={() => setHovered(p.id)}
                                        onMouseLeave={() => setHovered(null)}
                                    >

                                        {/* ================= IMAGE CARD ================= */}
                                        <div className="relative bg-gray-100 rounded-xl overflow-hidden">

                                            {p.discount && (
                                                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full z-10">
                                                    {p.discount}
                                                </span>
                                            )}

                                            <img
                                                src={p.images[currentColor]}
                                                className="w-full h-[420px] object-cover transition-all duration-500"
                                                alt={p.name}
                                            />

                                            {/* ================= HOVER ACTIONS ================= */}
                                            <div
                                                className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300
                                                ${hovered === p.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                                            `}
                                            >
                                                {/* ADD TO CART */}
                                                <button
                                                    onClick={() =>
                                                        addToCart({
                                                            ...p,
                                                            selectedColor: currentColor,
                                                            selectedSize: p.sizes[0],
                                                            qty: 1,
                                                        })
                                                    }
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                >
                                                    <i className="fa-solid fa-cart-plus"></i>
                                                </button>

                                                {/* WISHLIST */}
                                                <button
                                                    onClick={() => toggleWishlist(p)}
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                >
                                                    <i
                                                        className={`fa-heart ${isInWishlist(p.id)
                                                            ? "fa-solid text-red-500"
                                                            : "fa-regular"
                                                            }`}
                                                    ></i>
                                                </button>

                                                {/* QUICK VIEW */}
                                                <button
                                                    onClick={() => {
                                                        setQuickView(p);
                                                        setQvColor(p.colors[0]);
                                                        setQvSize(p.sizes[0]);
                                                        setQvQty(1);
                                                    }}
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                >
                                                    <i className="fa-regular fa-eye"></i>
                                                </button>
                                            </div>
                                        </div>

                                        {/* ================= INFO ================= */}
                                        <div className="mt-4">
                                            <h4 className="text-sm">{p.name}</h4>
                                            <p className="font-semibold">${p.price}</p>

                                            {/* COLORS */}
                                            <div className="flex gap-2 mt-2">
                                                {p.colors.map((c) => (
                                                    <span
                                                        key={c}
                                                        className={`w-4 h-4 rounded-full border cursor-pointer ${currentColor === c ? "ring-2 ring-black" : ""
                                                            }`}
                                                        style={{ background: c }}
                                                        onMouseEnter={() =>
                                                            setActiveColor((prev) => ({ ...prev, [p.id]: c }))
                                                        }
                                                    ></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* ================= CUSTOM NAVIGATION BUTTONS ================= */}
                    <button
                        className="custom-prev-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/swiper:opacity-100 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <button
                        className="custom-next-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/swiper:opacity-100 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                {/* ================= QUICK VIEW POPUP ================= */}
                {quickView && (
                    <div
                        className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
                        onClick={() => setQuickView(null)}
                    >
                        <div
                            className="bg-white rounded-xl max-w-4xl w-full overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setQuickView(null)}
                                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark text-xl"></i>
                            </button>

                            <div className="grid md:grid-cols-2 gap-6 p-6">

                                <div className="bg-gray-100 rounded-xl overflow-hidden">
                                    <img
                                        src={quickView.images[qvColor]}
                                        className="w-full h-[400px] object-cover"
                                        alt={quickView.name}
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold">{quickView.name}</h2>
                                    <p className="text-xl font-bold my-2">${quickView.price}</p>

                                    {/* COLORS */}
                                    <div className="my-4">
                                        <p className="text-sm font-medium mb-2">Color:</p>
                                        <div className="flex gap-2">
                                            {quickView.colors.map((c) => (
                                                <span
                                                    key={c}
                                                    className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${qvColor === c ? "ring-2 ring-offset-2 ring-black scale-110" : "hover:scale-105"
                                                        }`}
                                                    style={{ background: c }}
                                                    onClick={() => setQvColor(c)}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SIZES */}
                                    <div className="my-4">
                                        <p className="text-sm font-medium mb-2">Size:</p>
                                        <div className="flex gap-2">
                                            {quickView.sizes.map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => setQvSize(s)}
                                                    className={`border px-4 py-2 rounded transition-all ${qvSize === s ? "bg-black text-white border-black" : "hover:border-black"
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* QTY */}
                                    <div className="my-4">
                                        <p className="text-sm font-medium mb-2">Quantity:</p>
                                        <div className="flex items-center gap-0 border rounded w-max">
                                            <button
                                                onClick={() => setQvQty((q) => Math.max(1, q - 1))}
                                                className="px-4 py-2 hover:bg-gray-100 transition"
                                            >
                                                <i className="fa-solid fa-minus text-sm"></i>
                                            </button>
                                            <span className="px-6 py-2 border-x min-w-[60px] text-center font-semibold">{qvQty}</span>
                                            <button
                                                onClick={() => setQvQty((q) => q + 1)}
                                                className="px-4 py-2 hover:bg-gray-100 transition"
                                            >
                                                <i className="fa-solid fa-plus text-sm"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* ACTIONS */}
                                    <div className="flex gap-3 mt-6">
                                        <button
                                            className="flex-1 bg-black text-white py-3 font-semibold rounded hover:bg-gray-800 transition-all duration-300"
                                            onClick={() => {
                                                addToCart({
                                                    ...quickView,
                                                    selectedColor: qvColor,
                                                    selectedSize: qvSize,
                                                    qty: qvQty,
                                                });
                                                setQuickView(null);
                                            }}
                                        >
                                            Add to Cart — ${(quickView.price * qvQty).toFixed(2)}
                                        </button>

                                        <button
                                            className="w-14 border rounded hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                                            onClick={() => toggleWishlist(quickView)}
                                        >
                                            <i
                                                className={`fa-heart text-xl ${isInWishlist(quickView.id)
                                                    ? "fa-solid text-red-500"
                                                    : "fa-regular"
                                                    }`}
                                            ></i>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}