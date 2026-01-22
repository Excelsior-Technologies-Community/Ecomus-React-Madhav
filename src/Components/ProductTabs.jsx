import React, { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "review", label: "Review" },
    { id: "shipping", label: "Shipping" },
    { id: "return", label: "Return Policies" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 my-16 py-3 border">
      {/* ================= TAB HEADER ================= */}
      <div className="border-b overflow-x-auto">
        <div className="flex gap-8 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-sm md:text-base font-medium relative whitespace-nowrap
                ${activeTab === tab.id ? "text-black" : "text-gray-500 hover:text-black"}
              `}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-black"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ================= TAB CONTENT ================= */}
      <div className="py-10">

        {/* ========== DESCRIPTION ========== */}
        {activeTab === "description" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">

            {/* Left */}
            <div className="space-y-6">
              <p className="fs-[10px]">
                Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey,
                crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly
                sourced wood-based fibres produced through a process that reduces impact on forests,
                biodiversity and water supply.
              </p>

              <div>
                <h3 className="font-semibold mb-3 text-black">Features</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Front button placket</li>
                  <li>Adjustable sleeve tabs</li>
                  <li>Babaraton embroidered crest at placket and hem</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-black">Materials Care</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                  <li>Care: Hand wash</li>
                  <li>Imported</li>
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5">
              <h3 className="font-semibold text-black">Materials Care</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl">🧺</span>
                  <p>Machine wash max. 30°C. Short spin.</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xl">♨️</span>
                  <p>Iron maximum 110°C.</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xl">🚫</span>
                  <p>Do not bleach.</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xl">🧪</span>
                  <p>Do not dry clean.</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xl">🌀</span>
                  <p>Tumble dry, medium heat.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== ADDITIONAL INFO ========== */}
        {activeTab === "additional" && (
          <div className="text-gray-700 space-y-4">
            <p><b>Fabric:</b> Premium soft cotton blend</p>
            <p><b>Fit:</b> Regular fit</p>
            <p><b>Neck:</b> Round Neck</p>
            <p><b>Sleeve:</b> Half Sleeve</p>
          </div>
        )}

        {/* ========== REVIEW ========== */}
        {activeTab === "review" && (
          <div className="text-gray-700">
            <p className="mb-4">⭐ 4.8 out of 5 based on 124 reviews</p>
            <p>No reviews yet. Be the first to review this product.</p>
          </div>
        )}

        {/* ========== SHIPPING ========== */}
        {activeTab === "shipping" && (
          <div className="text-gray-700 space-y-3">
            <p>🚚 Shipping takes 3–6 days in United States.</p>
            <p>🌍 International delivery takes 12–26 days.</p>
            <p>📦 Tracking number will be provided after order.</p>
          </div>
        )}

        {/* ========== RETURN POLICIES ========== */}
        {activeTab === "return" && (
          <div className="text-gray-700 space-y-3">
            <p>🔁 Return within 30 days of purchase.</p>
            <p>❌ Duties & taxes are non-refundable.</p>
            <p>📦 Product must be unused & original packaging.</p>
          </div>
        )}

      </div>
    </div>
  );
}
