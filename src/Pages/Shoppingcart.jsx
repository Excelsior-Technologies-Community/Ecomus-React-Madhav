import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

export default function Shoppingcart({ cart, setCart, addToCart, wishlist, setWishlist }) {
    const removeItem = (id) => {
        setCart(cart.filter((i) => i.id !== id));
    };

    const updateQty = (id, newQty) => {
        if (newQty < 1) {
            removeItem(id);
            return;
        }

        setCart(prev =>
            prev.map(i => i.id === id ? { ...i, qty: newQty } : i)
        );
    };

    const subtotal = cart.reduce(
        (sum, i) => sum + i.price * i.qty,
        0
    );

    const freeShippingLimit = 100;
    const progress = Math.min((subtotal / freeShippingLimit) * 100, 100);
    const [openEstimate, setOpenEstimate] = useState(false);

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
            name: "Oversized printed T-shirt",
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
            name: "Oversized printed T-shirt",
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
            name: "V-neck linen T-shirt",
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
            name: "Loose fit sweatshirt",
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
    const [activeColor, setActiveColor] = useState({});
    const [qvColor, setQvColor] = useState(null);
    const [qvSize, setQvSize] = useState("M");
    const [qvQty, setQvQty] = useState(1);
    const [hovered, setHovered] = useState(null);
    const [quickView, setQuickView] = useState(null);

    const toggleWishlist = (product) => {
        const exists = wishlist.find(item => item.id === product.id);
        if (exists) {
            setWishlist(wishlist.filter(item => item.id !== product.id));
        } else {
            setWishlist([...wishlist, product]);
        }
    };

    const isInWishlist = (id) => wishlist.some(item => item.id === id);




    return (
        <>
            <div className="w-full text-center py-16 bg-pink-50">
                <h2 className="text-4xl">Shopping cart</h2>
            </div>

            <div className="w-full text-center my-5">
                <p>
                    <span className="text-red-600 px-2">🔥</span>
                    These Product are limited, checkout within
                    <span className="bg-red-500 text-white px-2.5 py-1 rounded-full font-semibold ml-2">
                        00m:00s
                    </span>
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 my-5">
                {/* ================= CART ================= */}
                <h2 className="font-bold mb-4 text-2xl">Shopping Cart</h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* LEFT */}
                    <div className="lg:col-span-8">
                        {cart.length === 0 && (
                            <p className="text-gray-500">Your cart is empty</p>
                        )}
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-3 border-b py-4 items-center flex-wrap md:flex-nowrap">
                                <img
                                    src={item.img || item.img1}
                                    className="rounded"
                                    style={{ width: "90px", height: "120px", objectFit: "cover" }}
                                    alt={item.name} />
                                <div className="flex-grow">
                                    <h6 className="mb-1 font-semibold">{item.name}</h6>
                                    <p className="text-gray-500 mb-1 text-sm">
                                        {item.color && item.size ? `${item.color} / ${item.size}` : 'Standard'}
                                    </p>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-sm underline">
                                        Remove
                                    </button>
                                </div>

                                <div className="font-medium" style={{ width: "80px" }}>
                                    ${item.price}
                                </div>

                                {/* QTY */}
                                <div className="flex items-center border rounded">
                                    <button
                                        className="px-3 py-1 hover:bg-gray-100"
                                        onClick={() => updateQty(item.id, item.qty - 1)}>
                                        −
                                    </button>
                                    <span className="px-3">{item.qty}</span>
                                    <button
                                        className="px-3 py-1 hover:bg-gray-100"
                                        onClick={() => updateQty(item.id, item.qty + 1)}>
                                        +
                                    </button>
                                </div>

                                <div className="font-bold text-right" style={{ width: "90px" }}>
                                    ${(item.price * item.qty).toFixed(2)}
                                </div>
                            </div>
                        ))}

                        <h6 className="mt-4 mb-2 font-semibold">Add order Note</h6>
                        <textarea
                            className="w-full border rounded p-2"
                            rows="4"
                            placeholder="How can we help you?"
                            style={{ resize: "vertical" }}
                        ></textarea>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-4">
                        <div
                            className="bg-gray-100 p-4 sticky"
                            style={{ top: "100px" }}>

                            {/* ================= FREE SHIPPING BAR ================= */}
                            <div className="border rounded p-3 mb-4 bg-white">
                                <div className="relative mb-3">

                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                        <div
                                            className="bg-red-500 h-1.5 rounded-full"
                                            style={{ width: `${progress}%` }}>
                                        </div>
                                    </div>

                                    {/* Truck Icon */}
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 bg-white border-2 border-red-500 rounded p-1"
                                        style={{ left: `calc(${progress}% - 12px)` }}>
                                        🚚
                                    </div>
                                </div>

                                <p className="mb-0 text-sm">
                                    {subtotal >= freeShippingLimit
                                        ? "You got Free Shipping!"
                                        : `Buy $${(freeShippingLimit - subtotal).toFixed(2)} more to enjoy `}
                                    <strong>Free Shipping</strong>
                                </p>
                            </div>

                            {/* ================= ESTIMATE SHIPPING ================= */}
                            <div className="bg-white rounded p-3 mb-4">
                                <div
                                    className="flex justify-between items-center mb-3 cursor-pointer"
                                    onClick={() => setOpenEstimate(!openEstimate)}>
                                    <h6 className="mb-0 font-semibold">Estimate Shipping</h6>
                                    <span className="text-2xl">{openEstimate ? "−" : "+"}</span>
                                </div>

                                {openEstimate && (
                                    <>
                                        <hr className="my-3" />
                                        <div className="flex items-start gap-2 mb-3">
                                            <input type="checkbox" id="giftwrap" className="mt-1" />
                                            <label htmlFor="giftwrap" className="text-sm">
                                                Do you want a gift wrap? Only <strong>$5.00</strong>
                                            </label>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* ================= SUBTOTAL ================= */}
                            <div className="bg-white rounded p-3 mb-4">

                                <div className="flex justify-between items-center text-lg font-semibold mb-2">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)} USD</span>
                                </div>

                                <p className="text-sm text-gray-500 mb-3">
                                    Taxes and <u>shipping</u> calculated at checkout
                                </p>

                                <div className="flex items-start gap-2 mb-3">
                                    <input type="checkbox" id="terms" className="mt-1" />
                                    <label htmlFor="terms" className="text-sm">
                                        I agree with the <u>terms and conditions</u>
                                    </label>
                                </div>

                                <button className="w-full bg-black text-white rounded mb-3 hover:bg-gray-800">
                                    <Link to="/checkout" className="block text-center bg-black text-white py-2 no-underline rounded">
                                        Check out
                                    </Link>
                                </button>
                                <p className="text-center font-semibold mb-2 text-sm">Guarantee Safe Checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ================= HAPPY CLIENTS SECTION ================= */}
            <div className="w-full py-12 px-5 bg-white">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold">Happy Clients</h2>
                    <p className="text-gray-500 mt-2">Hear what they say about us</p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Nav Buttons */}
                    <button className="happy-prev absolute top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" style={{ left: '-20px' }}>
                        ‹
                    </button>

                    <button className="happy-next absolute top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" style={{ right: '-20px' }}>
                        ›
                    </button>


                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".happy-prev",
                            nextEl: ".happy-next",
                        }}
                        spaceBetween={30}
                        speed={700}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >

                        {/* SLIDE 1 */}
                        <SwiperSlide>
                            <div className="border rounded-lg p-4 h-full flex flex-col justify-between">

                                <div>
                                    <div className="text-yellow-500 text-xl mb-3">★ ★ ★ ★ ★</div>

                                    <h5 className="font-semibold mb-3">Best Online Fashion Site</h5>

                                    <p className="mb-4 text-lg">
                                        " I always find something stylish and affordable on this web fashion site "
                                    </p>

                                    <p className="font-semibold mb-0">Robert smith</p>
                                    <small className="text-gray-500">Customer from USA</small>
                                </div>
                                <hr className="border-t border-black my-3" />
                                <div className="flex items-center py-3 gap-3">
                                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                                        <img src="../src/assets/images/imgi_72_img-p3.jpeg" className="rounded w-full h-full object-cover" alt="" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Jersey thong body</div>
                                        <div className="font-semibold">$105.95</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* SLIDE 2 */}
                        <SwiperSlide>
                            <div className="border rounded-lg p-4 h-full flex flex-col justify-between">

                                <div>
                                    <div className="text-yellow-500 text-xl mb-3">★ ★ ★ ★ ★</div>

                                    <h5 className="font-semibold mb-3">Great Selection and Quality</h5>

                                    <p className="mb-4 text-lg">
                                        " I love the variety of styles and the high-quality clothing on this web fashion site. "
                                    </p>

                                    <p className="font-semibold mb-0">Allen Lyn</p>
                                    <small className="text-gray-500">Customer from France</small>
                                </div>
                                <hr className="border-t border-black my-3" />
                                <div className="flex items-center py-3 gap-3">
                                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                                        <img src="../src/assets/images/imgi_69_img-p4.jpeg" className="rounded w-full h-full object-cover" alt="" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Cotton jersey top</div>
                                        <div className="font-semibold">$7.95</div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        {/* SLIDE 3 */}
                        <SwiperSlide>
                            <div className="border rounded-lg p-4 h-full flex flex-col justify-between">

                                <div>
                                    <div className="text-yellow-500 text-xl mb-3">★ ★ ★ ★ ★</div>

                                    <h5 className="font-semibold mb-3">Best Customer Service</h5>

                                    <p className="mb-4 text-lg">
                                        "I finally found a web fashion site with stylish and flattering options in my size. "
                                    </p>

                                    <p className="font-semibold mb-0">Peter Rope</p>
                                    <small className="text-gray-500">Customer from USA</small>
                                </div>

                                <hr className="border-t border-black my-3" />

                                <div className="flex items-center py-3 gap-3">
                                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                                        <img src="../src/assets/images/imgi_71_img-p5.jpeg" className="rounded w-full h-full object-cover" alt="" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Ribbed modal T-shirt</div>
                                        <div className="font-semibold">From $18.95</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* SLIDE 4 */}
                        <SwiperSlide>
                            <div className="border rounded-lg p-4 h-full flex flex-col justify-between">

                                <div>
                                    <div className="text-yellow-500 text-xl mb-3">★ ★ ★ ★ ★</div>

                                    <h5 className="font-semibold mb-3">Amazing Quality & Fast Delivery</h5>

                                    <p className="mb-4 text-lg">
                                        "I always find something stylish and affordable on this web fashion site. "
                                    </p>

                                    <p className="font-semibold mb-0">Sophia Miller</p>
                                    <small className="text-gray-500">Customer from UK</small>
                                </div>

                                <hr className="border-t border-black my-3" />

                                <div className="flex items-center py-3 gap-3">
                                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                                        <img src="../src/assets/images/imgi_68_img-p2.jpeg" className="rounded w-full h-full object-cover" alt="" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Premium Summer Top</div>
                                        <div className="font-semibold">$29.95</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* ================= END HAPPY CLIENTS ================= */}

            <div className="max-w-7xl mx-auto px-4 my-24">

                <h1 className="text-4xl font-semibold text-center mb-10">
                    You may also like
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
                                                alt={p.name} />

                                            {/* ================= HOVER ACTIONS ================= */}
                                            <div
                                                className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300
                                                ${hovered === p.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                                            `}>
                                                {/* ADD TO CART */}
                                                <button
                                                    onClick={() => addToCart({
                                                        ...p,
                                                        selectedColor: currentColor,
                                                        selectedSize: p.sizes[0],
                                                        qty: 1,
                                                    })}
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                    title="Add to Cart">
                                                    🛒
                                                </button>

                                                {/* WISHLIST */}
                                                <button
                                                    onClick={() => toggleWishlist(p)}
                                                    className="w-11 h-11 bg-gray-50 text-gray-950 rounded-lg shadow flex items-center justify-center hover:bg-gray-950 hover:text-white transition-all duration-200 cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    {isInWishlist(p.id) ? "❤️" : "🤍"}
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
                                                    title="Quick View"
                                                >
                                                    👁️
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
                        ‹
                    </button>

                    <button
                        className="custom-next-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/swiper:opacity-100 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        ›
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
                                ✕
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
                                                −
                                            </button>
                                            <span className="px-6 py-2 border-x min-w-[60px] text-center font-semibold">{qvQty}</span>
                                            <button
                                                onClick={() => setQvQty((q) => q + 1)}
                                                className="px-4 py-2 hover:bg-gray-100 transition"
                                            >
                                                +
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
                                            }}>
                                            Add to Cart — ${(quickView.price * qvQty).toFixed(2)}
                                        </button>

                                        <button
                                            className="w-14 border rounded hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                                            onClick={() => toggleWishlist(quickView)}>
                                            {isInWishlist(quickView.id) ? "❤️" : "🤍"}
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