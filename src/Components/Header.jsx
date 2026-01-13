import { Autoplay } from "swiper/modules";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import Wishlist from "../Pages/Wishlist";

function Header({ wishlistCount, cart, setCart }) {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMagnifyOpen, setIsMagnifyOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );


  return (
    <>
      {/* ================= TOP BAR (NOT STICKY) ================= */}
      <div className="container-fluid bg-white border-bottom">
        <div className="row align-items-center">

          {/* LEFT SOCIAL */}
          <div className="col-lg-4">
            {[
              "facebook-f",
              "x-twitter",
              "instagram",
              "tiktok",
              "youtube",
            ].map((icon, i) => (
              <button
                key={i}
                className="rounded-circle bg-light mx-1 my-2 p-2"
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </button>
            ))}
          </div>

          {/* CENTER SLIDER */}
          <div className="col-lg-4 d-flex justify-content-center py-2">
            <Swiper
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              className="w-100 text-center"
            >
              <SwiperSlide>Summer Sale discount off 70%</SwiperSlide>
              <SwiperSlide>Time to refresh your wardrobe</SwiperSlide>
              <SwiperSlide>
                Spring Fashion Sale{" "}
                <span className="text-danger border-bottom border-danger cursor-pointer">
                  Shop Now
                </span>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* RIGHT CURRENCY */}
          <div className="col-lg-4 text-end">
            <div className="d-flex justify-content-end align-items-center gap-4">

              {/* CURRENCY */}
              <div
                className="position-relative"
                onMouseEnter={() => setOpenCurrency(true)}
                onMouseLeave={() => setOpenCurrency(false)}
              >
                <div className="d-flex align-items-center gap-2 cursor-pointer">
                  <img src="https://flagcdn.com/w20/us.png" />
                  <span>USD</span>
                  <i className="fa-solid fa-angle-down"></i>
                </div>

                {openCurrency && (
                  <div className="position-absolute end-0 mt-3 bg-white shadow rounded p-3" style={{ width: "260px", zIndex: 999 }}>
                    <div className="d-flex gap-2 mb-2">
                      <img src="https://flagcdn.com/w20/fr.png" /> EUR € | France
                    </div>
                    <div className="d-flex gap-2 mb-2">
                      <img src="https://flagcdn.com/w20/de.png" /> EUR € | Germany
                    </div>
                    <div className="d-flex gap-2 mb-2 text-danger">
                      <img src="https://flagcdn.com/w20/us.png" /> USD $ | United States
                    </div>
                    <div className="d-flex gap-2">
                      <img src="https://flagcdn.com/w20/vn.png" /> VND ₫ | Vietnam
                    </div>
                  </div>
                )}
              </div>

              {/* LANGUAGE */}
              <div className="cursor-pointer">
                English <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="w-full relative bg-white top-0 z-50" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            <div className="">
              <img src="../src/assets/images/logo.svg" alt="" />
            </div>

            <nav className="hidden lg:flex items-center gap-8 font-medium">
              <Link to="/" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Home <i className="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Shop <i className="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Products <i className="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Pages <i className="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Blog <i className="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="hover:text-red-600 text-black no-underline hover:border-b-2 hover:border-black">Buy now</Link>
            </nav>

            <div className="flex items-end gap-2">

              <button className="hover:text-red-600" onClick={() => setIsMagnifyOpen(true)}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>

              <button className="hover:text-red-600">
                <i class="fa-regular fa-user"></i>
              </button>

              <Link to="/wishlist">
                <button className="relative hover:text-red-600">
                  <i class="fa-regular fa-heart text-dark"></i>
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </Link>

              <button className="relative hover:text-red-600" onClick={() => setIsCartOpen(true)}>
                <i class="fa-solid fa-bag-shopping"></i>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              </button>

              <button id="menuBtn" className="lg:hidden text-2xl">
                <img src="../src/assets/images/imgi_137_default.svg" alt="" />
              </button>

            </div>
          </div>
        </div>

        <div id="mobileMenu" className="lg:hidden hidden border-t">
          <div class="flex flex-col p-4 gap-4 font-medium">
            <Link to="/">Home</Link>
            <Link to="">Shop</Link>
            <Link to="">Products</Link>
            <Link to="">Pages</Link>
            <Link to="">Blog</Link>
            <Link to="">Buy now</Link>
          </div>
        </div>
      </header>

      {/* ================= CART SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-[999] ${isCartOpen ? "visible" : "invisible"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${isCartOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsCartOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold text-lg">Shopping cart</h3>
            <button onClick={() => setIsCartOpen(false)} className="text-xl">
              <i className="bi bi-x"></i>
            </button>
          </div>

          {/* Free Shipping */}
          <div className="p-4 border-b">
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-red-500 rounded"
                style={{
                  width: `${Math.min((subtotal / 75) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <p className="text-sm mt-2">
              Buy <b>$75.00</b> more to enjoy <b>Free Shipping</b>
            </p>
          </div>

          {/* CART ITEMS */}
          <div className="p-4 overflow-y-auto flex-1">
            {cart.length === 0 ? (
              <p className="text-center text-gray-400">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 mb-4 border-b pb-4"
                >
                  <img
                    src={item.img1}
                    className="w-20 h-24 object-cover rounded"
                    alt=""
                  />

                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="font-semibold">${item.price}</p>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border">
                        <button
                          className="px-2 py-1"
                          onClick={() =>
                            setCart((prev) =>
                              prev.map((p) =>
                                p.id === item.id
                                  ? { ...p, qty: Math.max(1, p.qty - 1) }
                                  : p
                              )
                            )
                          }
                        >
                          -
                        </button>

                        <span className="px-3">{item.qty}</span>

                        <button
                          className="px-2 py-1"
                          onClick={() =>
                            setCart((prev) =>
                              prev.map((p) =>
                                p.id === item.id
                                  ? { ...p, qty: p.qty + 1 }
                                  : p
                              )
                            )
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="text-sm underline text-gray-500"
                        onClick={() =>
                          setCart((prev) =>
                            prev.filter((p) => p.id !== item.id)
                          )
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom */}
          <div className="border-t p-4">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)} USD</span>
            </div>

            <p className="text-sm text-gray-500 mb-3">
              Taxes and shipping calculated at checkout
            </p>

            <div className="flex gap-3">
              <button className="flex-1 border py-3 rounded">
                <Link to="/" className="no-underline text-black">View cart</Link>
              </button>
              <button className="flex-1 bg-black text-white py-3 rounded">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= END CART SIDEBAR ================= */}

      {/* ================= SEARCH SIDEBAR ================= */}
      <div className={`fixed inset-0 z-[999] ${isMagnifyOpen ? "visible" : "invisible"}`}>

        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${isMagnifyOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMagnifyOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-full sm:w-[500px] bg-white shadow-xl transform transition-transform duration-300 ${isMagnifyOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold text-lg">Shopping cart</h3>
            <button onClick={() => setIsMagnifyOpen(false)} className="text-xl">✕</button>
          </div>

          {/* Free Shipping Bar */}
          <div className="p-4 border-b">
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="w-[60%] h-2 bg-red-500 rounded"></div>
            </div>
            <p className="text-sm mt-2">
              Buy <b>$75.00</b> more to enjoy <b>Free Shipping</b>
            </p>
          </div>

          {/* Suggestion */}
          <div className="p-4">
            <h4 className="font-semibold mb-3">You may also like</h4>

            <div className="flex gap-3 items-center border p-3 rounded-lg">
              <img src="/images/product1.jpg" className="w-20 h-24 object-cover rounded" />
              <div className="flex-1">
                <p className="font-medium">Loose Fit Hoodie</p>
                <p className="font-semibold">$25.00</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 w-full border-t p-4 bg-white">

            <div className="flex justify-between mb-3">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">$49.99 USD</span>
            </div>

            <p className="text-sm text-gray-500 mb-3">
              Taxes and shipping calculated at checkout
            </p>

            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" checked />
              <span className="text-sm">
                I agree with the <u>terms and conditions</u>
              </span>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 border py-3 rounded">View cart</button>
              <button className="flex-1 bg-black text-white py-3 rounded">Check out</button>
            </div>

          </div>

        </div>
      </div>
      {/* ================= END SEARCH SIDEBAR ================= */}
    </>
  );
}

export default Header;
