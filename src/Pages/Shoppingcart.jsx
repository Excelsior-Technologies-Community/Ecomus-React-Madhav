import React, { useState } from "react";

export default function Shoppingcart({ cart, setCart }) {

    const removeItem = (id) => {
        setCart(cart.filter((i) => i.id !== id));
    };

    const updateQty = (id, qty) => {
        if (qty < 1) return;
        setCart(
            cart.map((i) =>
                i.id === id ? { ...i, qty: qty } : i
            )
        );
    };

    const subtotal = cart.reduce(
        (sum, i) => sum + i.price * i.qty,
        0
    );

    const freeShippingLimit = 100;
    const progress = Math.min((subtotal / freeShippingLimit) * 100, 100);
    const [openEstimate, setOpenEstimate] = useState(false);


    return (
        <>
            <div className="w-full text-center py-16 bg-pink-50">
                <h2 className="text-4xl">Shopping cart</h2>
            </div>

            <div className="container-fluid text-center my-5">
                <p>
                    <span className="text-red-600 px-2">🔥</span>
                    These Product are limited, checkout within
                    <span className="bg-red-500 text-white px-2.5 py-1 rounded-full font-semibold ml-2">
                        00m:00s
                    </span>
                </p>
            </div>

            <div className="container my-5">
                {/* ================= CART ================= */}
                <h2 className="fw-bold mb-4">Shopping Cart</h2>
                <div className="row g-4">
                    {/* LEFT */}
                    <div className="col-12 col-lg-8">
                        {cart.length === 0 && (
                            <p className="text-muted">Your cart is empty</p>
                        )}
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="d-flex gap-3 border-bottom py-4 align-items-center flex-wrap flex-md-nowrap">
                                <img
                                    src={item.img || item.img1}
                                    className="rounded"
                                    style={{ width: "90px", height: "120px", objectFit: "cover" }}
                                    alt={item.name} />
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">{item.name}</h6>
                                    <p className="text-muted mb-1">
                                        {item.color && item.size ? `${item.color} / ${item.size}` : 'Standard'}
                                    </p>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="btn btn-link p-0 text-decoration-underline text-dark">
                                        Remove
                                    </button>
                                </div>

                                <div className="fw-medium" style={{ width: "80px" }}>
                                    ${item.price}
                                </div>

                                {/* QTY */}
                                <div className="d-flex align-items-center border rounded">
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => updateQty(item.id, item.qty - 1)}>
                                        −
                                    </button>
                                    <span className="px-3">{item.qty}</span>
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => updateQty(item.id, item.qty + 1)}>
                                        +
                                    </button>
                                </div>

                                <div className="fw-bold text-end" style={{ width: "90px" }}>
                                    ${(item.price * item.qty).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="col-12 col-lg-4">
                        <div
                            className="bg-light p-4 position-sticky"
                            style={{ top: "100px" }}>

                            {/* ================= FREE SHIPPING BAR ================= */}
                            <div className="border rounded p-3 mb-4 bg-white">
                                <div className="position-relative mb-3">

                                    <div className="progress" style={{ height: "6px" }}>
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: `${progress}%` }}>
                                        </div>
                                    </div>

                                    {/* Truck Icon */}
                                    <div
                                        className="position-absolute top-50 translate-middle-y bg-white border border-danger rounded p-1"
                                        style={{ left: `calc(${progress}% - 12px)` }}>
                                        🚚
                                    </div>
                                </div>

                                <p className="mb-0 small">
                                    {subtotal >= freeShippingLimit
                                        ? "You got Free Shipping!"
                                        : `Buy $${(freeShippingLimit - subtotal).toFixed(2)} more to enjoy `}
                                    <strong>Free Shipping</strong>
                                </p>
                            </div>

                            {/* ================= ESTIMATE SHIPPING ================= */}
                            <div className="bg-white rounded p-3 mb-4">
                                <div
                                    className="d-flex justify-content-between align-items-center mb-3"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setOpenEstimate(!openEstimate)}>
                                    <h6 className="mb-0 fw-semibold">Estimate Shipping</h6>
                                    <span className="fs-4">{openEstimate ? "−" : "+"}</span>
                                </div>

                                {openEstimate && (
                                    <>
                                        <hr />
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" id="giftwrap" />
                                            <label className="form-check-label" htmlFor="giftwrap">
                                                Do you want a gift wrap? Only <strong>$5.00</strong>
                                            </label>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* ================= SUBTOTAL ================= */}
                            <div className="bg-white rounded p-3 mb-4">

                                <div className="d-flex justify-content-between align-items-center fs-5 fw-semibold mb-2">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)} USD</span>
                                </div>

                                <p className="small text-muted mb-3">
                                    Taxes and <u>shipping</u> calculated at checkout
                                </p>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="terms" />
                                    <label className="form-check-label" htmlFor="terms">
                                        I agree with the <u>terms and conditions</u>
                                    </label>
                                </div>

                                <button className="btn btn-dark w-100 py-3 mb-3">
                                    Check out
                                </button>
                                <p className="text-center fw-semibold mb-2">Guarantee Safe Checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}