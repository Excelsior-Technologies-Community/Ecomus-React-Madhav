import React from "react";

export default function Wishlist({ wishlist, removeFromWishlist, addToCart }) {
  return (
    <>
      <h2 className="mb-4 text-center py-5 bg-red-100">Your Wishlist</h2>
      <div className="container my-5">

        {wishlist.length === 0 ? (
          <p>No products in wishlist</p>
        ) : (
          <div className="row g-4">
            {wishlist.map((p) => (
              <div key={p.id} className="col-6 col-md-4 col-lg-3">
                <div className="product-card">
                  <div className="product-img">
                    <img src={p.img1} className="img-1" alt="" />
                    <img src={p.img2} className="img-2" alt="" />

                    <div className="product-actions">
                      {/* 🛒 ADD TO CART */}
                      <div className="action-btn" onClick={() => addToCart(p)}>
                        <i className="fa-solid fa-cart-plus"></i>
                      </div>

                      {/* 🗑️ REMOVE */}
                      <div
                        className="action-btn"
                        onClick={() => removeFromWishlist(p.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <h6 className="mt-3 mb-1">{p.name}</h6>
                <p className="fw-bold mb-1">${p.price}</p>

                <div className="d-flex gap-2">
                  {p.colors.map((c, i) => (
                    <span
                      key={i}
                      className="color-dot"
                      style={{ background: c }}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
