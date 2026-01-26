import React from 'react'

function Checkout({ cart }) {
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    return (
        <>
            <div className="w-full text-center py-16 bg-pink-50">
                <h2 className="text-4xl">Check Out</h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* ================= LEFT : BILLING DETAILS ================= */}
                    <div className="lg:col-span-7">

                        <h2 className="text-3xl font-semibold mb-8">Billing details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    First Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Themesflat"
                                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:border-black outline-none"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Last Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:border-black outline-none"
                                />
                            </div>

                            {/* Country */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold mb-2">
                                    Country / Region<span className="text-red-500">*</span>
                                </label>
                                <select className="w-full border px-4 py-3 rounded">
                                    <option value="">Select Country</option>
                                    {[
                                        "India", "United States", "China", "Russia", "United Kingdom", "Germany", "France", "Japan", "Canada", "Australia",
                                        "Brazil", "Italy", "Spain", "Mexico", "South Korea", "Indonesia", "Turkey", "Saudi Arabia", "South Africa",
                                        "United Arab Emirates", "Singapore", "Malaysia", "Thailand", "Vietnam", "Philippines", "Pakistan", "Bangladesh",
                                        "Sri Lanka", "Nepal", "Bhutan", "Afghanistan", "Iran", "Iraq", "Israel", "Qatar", "Kuwait", "Oman", "Egypt", "Nigeria",
                                        "Kenya", "Morocco", "Algeria", "Argentina", "Chile", "Colombia", "Peru", "New Zealand", "Netherlands", "Sweden", "Switzerland"
                                    ].map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>

                            </div>

                            {/* City */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold mb-2">
                                    Town / City<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:border-black outline-none"
                                />
                            </div>

                            {/* Address */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold mb-2">
                                    Address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:border-black outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold mb-2">
                                    Phone Number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:border-black outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold mb-2">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:border-black outline-none"
                                />
                            </div>

                            {/* Order Notes */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold mb-2">
                                    Order notes (optional)
                                </label>
                                <textarea
                                    rows="5"
                                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:border-black outline-none"
                                ></textarea>
                            </div>

                        </div>
                    </div>

                    {/* ================= RIGHT : ORDER SUMMARY ================= */}
                    <div className="lg:col-span-5">

                        <h2 className="text-3xl font-semibold mb-8">Your order</h2>

                        <div className="bg-gray-50 p-6 rounded-lg">

                            {/* Products */}
                            <div className="space-y-4">

                                {cart.length === 0 && (
                                    <p className="text-gray-500">Your cart is empty</p>
                                )}

                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center border-b pb-4">
                                        <div className="flex gap-4 items-center">
                                            <img
                                                src={item.img}
                                                className="w-16 h-20 object-cover rounded"
                                                alt={item.name}
                                            />
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    {item.color} / {item.size} × {item.qty}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="font-medium">
                                            ${(item.price * item.qty).toFixed(2)}
                                        </p>
                                    </div>
                                ))}

                            </div>


                            {/* Coupon */}
                            <div className="flex gap-3 my-6">
                                <input
                                    type="text"
                                    placeholder="Discount code"
                                    className="flex-1 border px-4 py-3 rounded-md"
                                />
                                <button className="bg-black text-white px-6 rounded-md">
                                    Apply
                                </button>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between text-xl font-semibold border-t pt-4 mb-4">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            {/* Payment Methods */}
                            <div className="space-y-3 mb-4">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="payment" defaultChecked />
                                    Direct bank transfer
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="payment" />
                                    Cash on delivery
                                </label>
                            </div>

                            {/* Terms */}
                            <p className="text-sm text-gray-500 mb-4">
                                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
                                <u>privacy policy</u>.
                            </p>

                            <label className="flex items-center gap-2 mb-6">
                                <input type="checkbox" />
                                <span className="text-sm">
                                    I have read and agree to the website <u>terms and conditions</u>.
                                </span>
                            </label>

                            {/* Place Order */}
                            <button className="w-full bg-black text-white py-2 rounded-md text-lg font-semibold hover:bg-gray-800 transition">
                                Place order
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Checkout