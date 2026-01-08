import { Autoplay } from "swiper/modules";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function Header() {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header className="w-full relative bg-white top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            <div className="">
              <img src="../src/assets/images/logo.svg" alt="" />
            </div>

            <nav className="hidden lg:flex items-center gap-8 font-medium">
              <Link to="/" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Home <i class="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Shop <i class="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Products <i class="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Pages <i class="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="flex items-center gap-1 text-black no-underline hover:border-b-2 hover:border-black hover:text-red-600">Blog <i class="fa-solid fa-angle-down"></i></Link>
              <Link to="" className="hover:text-red-600 text-black no-underline hover:border-b-2 hover:border-black">Buy now</Link>
            </nav>

            <div className="flex items-end gap-2">

              <button className="hover:text-red-600">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>

              <button className="hover:text-red-600">
                <i class="fa-regular fa-user"></i>
              </button>

              <button className="relative hover:text-red-600">
                <i class="fa-regular fa-heart"></i>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
              </button>

              <button className="relative hover:text-red-600">
                <i class="fa-solid fa-bag-shopping"></i>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
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
    </>
  );
}

export default Header;
