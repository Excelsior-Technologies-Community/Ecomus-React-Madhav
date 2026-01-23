import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductTabs from "../Components/ProductTabs";
import Newdatas from "../Data/Newdata";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by id from URL
  const product = useMemo(() => {
    return Newdatas.find((p) => String(p.id) === String(id));
  }, [id]);

  // If product not found
  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          className="mt-4 px-6 py-2 bg-black text-white"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  const images = [
    product.img1,
    product.img2,
    ...(product.colorImages ? Object.values(product.colorImages) : []),
  ].filter(Boolean);

  const [activeImage, setActiveImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "S");
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ================= LEFT: IMAGES ================= */}
          <div className="flex gap-4">

            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-24 object-cover rounded cursor-pointer border ${
                    activeImage === img ? "border-black" : "border-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden h-[600px]">
              <img
                src={activeImage}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* ================= RIGHT: INFO ================= */}
          <div>
            <h1 className="text-2xl font-semibold">{product.name}</h1>

            <div className="flex items-center gap-4 mt-2">
              <span className="text-2xl font-bold text-red-500">
                ${product.price}
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mt-3">
                <p className="font-medium mb-2">Color:</p>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedColor(c);
                        if (product.colorImages?.[c]) {
                          setActiveImage(product.colorImages[c]);
                        }
                      }}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                        selectedColor === c ? "ring-2 ring-black" : ""
                      }`}
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size */}
            {product.sizes?.length > 0 && (
              <div className="mt-3">
                <p className="font-medium mb-2">Size:</p>
                <div className="flex gap-3">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2 border ${
                        selectedSize === s ? "bg-black text-white" : ""
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-3">
              <p className="font-medium mb-2">Quantity:</p>
              <div className="flex items-center border w-max">
                <button
                  className="px-4 py-2"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-6">{qty}</span>
                <button
                  className="px-4 py-2"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-2">
              <button className="flex-1 bg-black text-white py-2 font-semibold hover:bg-gray-800">
                Add to cart - ${product.price * qty}
              </button>
              <button className="w-14 border text-xl">♡</button>
            </div>

            <button className="w-full bg-yellow-400 py-2 mt-3 font-bold">
              Buy with PayPal
            </button>
          </div>
        </div>
      </div>

      <ProductTabs />
    </>
  );
}
