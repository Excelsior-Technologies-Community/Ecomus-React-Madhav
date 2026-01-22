import React, { useState } from "react";
import ProductTabs from "../Components/ProductTabs";

const product = {
    name: "Ribbed Tank Top",
    price: 8,
    oldPrice: 30,
    images: [
        "/src/assets/images/imgi_18_white-1.jpg",
        "/src/assets/images/imgi_17_orange-1.jpg",
        "/src/assets/images/imgi_19_black-1.jpg",
        "/src/assets/images/imgi_20_white-3.jpg",
    ],
    colors: ["#d6c1a3", "#000000", "#9db0c9", "#ffffff"],
    sizes: ["S", "M", "L", "XL"],
};

export default function ProductDetail() {
    const [activeImage, setActiveImage] = useState(product.images[0]);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState("S");
    const [qty, setQty] = useState(1);

    return (
        <>
            <div className="max-w-7xl mx-auto p-4 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* ================= LEFT: IMAGES ================= */}
                    <div className="flex gap-4">

                        {/* Thumbnails */}
                        <div className="flex flex-col gap-3">
                            {product.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    onClick={() => setActiveImage(img)}
                                    className={`w-20 h-24 object-cover rounded cursor-pointer border ${activeImage === img ? "border-black" : "border-gray-200"}`} />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden h-[600px]">
                            <img
                                src={activeImage}
                                className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                    </div>

                    {/* ================= RIGHT: INFO ================= */}
                    <div>

                        {/* Title */}
                        <h1 className="text-2xl font-semibold">{product.name}</h1>

                        {/* Price */}
                        <div className="flex items-center gap-4 mt-2">
                            <span className="text-2xl font-bold text-red-500">${product.price}.00</span>
                            <span className="line-through text-gray-400">${product.oldPrice}.00</span>
                            <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">20% OFF</span>
                        </div>

                        {/* Fake Info */}
                        <p className="mt-2 text-sm text-gray-600">🔥 Selling fast! 56 people have this in their carts.</p>

                        {/* Countdown Box */}
                        <div className="border border-red-500 text-red-500 text-center p-2">
                            <p className="font-semibold">HURRY UP! SALE ENDS IN:</p>
                            <p className="font-bold">11Days : 15Hours : 48Mins : 24Secs</p>
                        </div>

                        {/* Colors */}
                        <div className="mt-3">
                            <p className="font-medium mb-2">Color:</p>
                            <div className="flex gap-1">
                                {product.colors.map((c, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedColor(i)}
                                        className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === i ? "ring-2 ring-black" : ""}`}
                                        style={{ background: c }} />
                                ))}
                            </div>
                        </div>

                        {/* Size */}
                        <div className="mt-3">
                            <p className="font-medium mb-2">Size:</p>
                            <div className="flex gap-3">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedSize(s)}
                                        className={`px-4 py-2 border ${selectedSize === s ? "bg-black text-white" : ""}`}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-3">
                            <p className="font-medium mb-2">Quantity:</p>
                            <div className="flex items-center border w-max">
                                <button className="px-4 py-2" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                                <span className="px-6">{qty}</span>
                                <button className="px-4 py-2" onClick={() => setQty(q => q + 1)}>+</button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex gap-2">
                            <button className="flex-1 bg-black text-white py-2 font-semibold hover:bg-gray-800">
                                Add to cart - ${product.price * qty}
                            </button>
                            <button className="w-14 border text-xl">♡</button>
                        </div>

                        {/* PayPal */}
                        <button className="w-full bg-yellow-400 py-2 mt-3 font-bold">Buy with PayPal</button>

                        <p className="text-center text-sm text-gray-500 mt-2 underline cursor-pointer">
                            More payment options
                        </p>

                        {/* ================= EXTRA INFO SECTION ================= */}
                        <div className="mt-8 space-y-6">

                            {/* Top Actions */}
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
                                <button className="flex items-center gap-2 hover:text-black">
                                    🎨 Compare color
                                </button>
                                <button className="flex items-center gap-2 hover:text-black">
                                    ❓ Ask a question
                                </button>
                                <button className="flex items-center gap-2 hover:text-black">
                                    🚚 Delivery & Return
                                </button>
                                <button className="flex items-center gap-2 hover:text-black">
                                    🔗 Share
                                </button>
                            </div>

                            {/* Info Boxes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* Delivery Box */}
                                <div className="border rounded-lg p-5 flex gap-4 items-start">
                                    <div className="text-3xl">📦</div>
                                    <div className="text-sm text-gray-700">
                                        <p>
                                            Estimate delivery times:{" "}
                                            <span className="font-semibold text-black">12–26 days</span> (International),
                                            <span className="font-semibold text-black"> 3–6 days</span> (United States).
                                        </p>
                                    </div>
                                </div>

                                {/* Return Box */}
                                <div className="border rounded-lg p-5 flex gap-4 items-start">
                                    <div className="text-3xl">🔄</div>
                                    <div className="text-sm text-gray-700">
                                        <p>
                                            Return within <span className="font-semibold text-black">30 days</span> of purchase.
                                            <br />
                                            Duties & taxes are non-refundable.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Guarantee Safe Checkout */}
                            <div>
                                <p className="font-semibold mb-3">Guarantee Safe Checkout</p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <img src="/src/assets/images/visa.png" className="h-8" />
                                    <img src="/src/assets/images/paypal.png" className="h-8" />
                                    <img src="/src/assets/images/mastercard.png" className="h-8" />
                                    <img src="/src/assets/images/amex.png" className="h-8" />
                                    <img src="/src/assets/images/discover.png" className="h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductTabs />

        </>
    );
}
