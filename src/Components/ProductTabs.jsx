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
          <div className="grid grid-cols-1 text-gray-700">
            <div className="w-full">
              <p className="text-sm text-gray-500">
                Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h5 className="font-semibold text-lg mb-3">Featured</h5>
                <ul className="space-y-2">
                  <li>Front button placket</li>
                  <li>Adjustable sleeve tabs</li>
                  <li>Babaton embroidered crest at placket and hem</li>
                </ul>

                <h5 className="font-semibold text-lg mt-6 mb-3">Materials Care</h5>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                  <li>Care: Hand wash</li>
                  <li>Imported</li>
                </ol>
              </div>
              <div>
                <h5 className="font-semibold text-lg mb-3">Materials Care</h5>
                <ul className="space-y-2">
                  <li>Machine wash max. 30ºC. Short spin.</li>
                  <li>Iron maximum 110ºC.</li>
                  <li>Do not bleach/bleach.</li>
                  <li>Do not dry clean.</li>
                  <li>Tumble dry, medium hear.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========== ADDITIONAL INFO ========== */}
        {activeTab === "additional" && (
          <div className="w-full">
            <div className="border overflow-hidden rounded">
              <div className="grid grid-cols-1 sm:grid-cols-12 border-b">
                <div className="sm:col-span-4 bg-gray-100 px-4 py-3 font-semibold">
                  Color
                </div>
                <div className="sm:col-span-8 px-4 py-3 text-gray-600">
                  White, Pink, Black
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="sm:col-span-4 bg-gray-100 px-4 py-3 font-semibold">
                  Size
                </div>
                <div className="sm:col-span-8 px-4 py-3 text-gray-600">
                  S, M, L, XL
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== REVIEW ========== */}
        {activeTab === "review" && (
          <div className="w-full my-8">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">

              <div className="md:col-span-4 text-center md:text-left">
                <h1 className="text-6xl font-bold">4.8</h1>
                <div className="text-yellow-500 text-2xl my-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-gray-500">(168 Ratings)</p>
              </div>

              <div className="md:col-span-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-12">5 <i className="fa-solid fa-star text-yellow-500"></i></span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="w-8 text-right">59</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-12">4 <i className="fa-solid fa-star text-yellow-500"></i></span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="w-8 text-right">46</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-12">3 <i className="fa-solid fa-star text-yellow-500"></i></span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="w-8 text-right">0</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-12">2 <i className="fa-solid fa-star text-yellow-500"></i></span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="w-8 text-right">0</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-12">1 <i className="fa-solid fa-star text-yellow-500"></i></span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="w-8 text-right">0</span>
                </div>
              </div>

              <div className="md:col-span-3 text-center md:text-right">
                <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
                  Write a review
                </button>
              </div>

            </div>

            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h4 className="text-xl font-semibold">03 Comments</h4>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Sort by:</span>
                <select className="border px-3 py-1 rounded outline-none">
                  <option>Most Recent</option>
                  <option>Highest Rating</option>
                  <option>Lowest Rating</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <img
                src="https://i.pravatar.cc/60?img=32"
                alt="User avatar"
                className="rounded-full w-16 h-16 flex-shrink-0"
              />
              <div className="flex-1">
                <h6 className="font-bold mb-1">Superb quality apparel that exceeds expectations</h6>
                <p className="text-gray-500 text-sm mb-2">1 days ago</p>
                <p className="text-gray-600">
                  Great theme – we were looking for a theme with lots of built in features and flexibility and this was perfect...
                </p>

                <div className="flex gap-4 mt-4 pl-4 border-l-2 border-gray-300">
                  <img
                    src="https://i.pravatar.cc/50?img=12"
                    alt="Reply avatar"
                    className="rounded-full w-12 h-12 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h6 className="font-bold mb-1">Reply from Modave</h6>
                    <p className="text-gray-500 text-sm mb-2">1 days ago</p>
                    <p className="text-gray-600">
                      We love to hear it! Part of what we love most about Modave is how much it empowers store owners...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <img
                src="https://i.pravatar.cc/60?img=47"
                alt="User avatar"
                className="rounded-full w-16 h-16 flex-shrink-0"
              />
              <div className="flex-1">
                <h6 className="font-bold mb-1">Superb quality apparel that exceeds expectations</h6>
                <p className="text-gray-500 text-sm mb-2">1 days ago</p>
                <p className="text-gray-600">
                  Great theme – we were looking for a theme with lots of built in features and flexibility and this was perfect...
                </p>
              </div>
            </div>

          </div>

        )}

        {/* ========== SHIPPING ========== */}
        {activeTab === "shipping" && (
          <div className="text-gray-500">
            <h5 className="font-semibold text-gray-950">The Company Private Limited Policy</h5>
            <p>
              The Company Private Limited and each of their respective subsidiary, parent and affiliated companies is deemed to operate this Website (“we” or “us”) recognizes that you care how information about you is used and shared. We have created this Privacy Policy to inform you what information we collect on the Website, how we use your information and the choices you have about the way your information is collected and used. Please read this Privacy Policy carefully. Your use of the Website indicates that you have read and accepted our privacy practices, as outlined in this Privacy Policy.
            </p>
            <p>
              Please be advised that the practices described in this Privacy Policy apply to information gathered by us or our subsidiaries, affiliates or agents: (i) through this Website, (ii) where applicable, through our Customer Service Department in connection with this Website, (iii) through information provided to us in our free standing retail stores, and (iv) through information provided to us in conjunction with marketing promotions and sweepstakes.
            </p>
            <p>We are not responsible for the content or privacy practices on any websites.</p>
            <p>We reserve the right, in our sole discretion, to modify, update, add to, discontinue, remove or otherwise change any portion of this Privacy Policy, in whole or in part, at any time. When we amend this Privacy Policy, we will revise the “last updated” date located at the top of this Privacy Policy.</p>
            <p>If you provide information to us or access or use the Website in any way after this Privacy Policy has been changed, you will be deemed to have unconditionally consented and agreed to such changes. The most current version of this Privacy Policy will be available on the Website and will supersede all previous versions of this Privacy Policy.</p>
            <p>If you have any questions regarding this Privacy Policy, you should contact our Customer Service Department by email at marketing@company.com</p>
          </div>
        )}

        {/* ========== RETURN POLICIES ========== */}
        {activeTab === "return" && (
          <div className="container">
            <div className="text-center">
              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                <div className="fs-3">🚫</div>
                <div className="fs-3">🧺</div>
                <div className="fs-3">♨️</div>
                <div className="fs-3">🅿️</div>
                <div className="fs-3">⚫</div>
                <div className="fs-3">｜</div>
              </div>

              <p className="text-muted mb-0">
                LTOI: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt
              </p>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}