import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Link } from 'react-router-dom';


function Header() {
  const [openCurrency, setOpenCurrency] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container-fluid bg-white border-b border-gray-200">
        <div className="row">
          <div className="col-lg-4">
            <button className="rounded-full bg-gray-300 text-[15px] hover:bg-blue-700 hover:text-white mx-1 my-2 p-2 text-sm">
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button className="rounded-full bg-gray-300 text-[15px] hover:bg-blue-700 hover:text-white mx-1 my-2 p-2 text-sm">
              <i className="fa-brands fa-x-twitter"></i>
            </button>
            <button className="rounded-full bg-gray-300 text-[15px] hover:bg-blue-700 hover:text-white mx-1 my-2 p-2 text-sm">
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button className="rounded-full bg-gray-300 text-[15px] hover:bg-blue-700 hover:text-white mx-1 my-2 p-2 text-sm">
              <i className="fa-brands fa-tiktok"></i>
            </button>
            <button className="rounded-full bg-gray-300 text-[15px] hover:bg-blue-700 hover:text-white mx-1 my-2 p-2 text-sm">
              <i className="fa-brands fa-youtube"></i>
            </button>
          </div>

          <div className="col-lg-4 justify-center items-center flex py-2">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Autoplay]}

              className="mySwiper ">
              <SwiperSlide>Summer Sale discount off 70%</SwiperSlide>
              <SwiperSlide>Time to refresh your wardroble</SwiperSlide>
              <SwiperSlide  >spring Fashion Sale<span className='text-red-500 border-b-2 border-red-500'>Shop Now </span></SwiperSlide>
            </Swiper>
          </div>

          <div className="col-lg-4 text-end">
            <div className="flex justify-end items-center gap-6 relative">

              {/* CURRENCY */}
              <div
                className="relative inline-block"
                onMouseEnter={() => setOpenCurrency(true)}
                onMouseLeave={() => setOpenCurrency(false)}
              >
                {/* BUTTON */}
                <div className="flex items-center gap-2 px-4 py-1.5 cursor-pointer">
                  <img src="https://flagcdn.com/w20/us.png" className="w-5 h-4" />
                  <span className="font-medium">USD</span>
                  <i className="fa-solid fa-angle-down text-xs"></i>
                </div>

                {/* DROPDOWN */}
                {openCurrency && (
                  <div className="absolute right-0 top-full mt-4 w-72 bg-white rounded-xl shadow-xl transition-all duration-200 z-[9999]">

                    {/* ARROW */}
                    <div className="absolute -top-2 right-10 w-4 h-4 bg-white rotate-45"></div>

                    <div className="p-4 space-y-3 text-sm">

                      <div className="flex items-center gap-3 cursor-pointer hover:text-red-500">
                        <img src="https://flagcdn.com/w20/fr.png" />
                        <span>EUR € | France</span>
                      </div>

                      <div className="flex items-center gap-3 cursor-pointer hover:text-red-500">
                        <img src="https://flagcdn.com/w20/de.png" />
                        <span>EUR € | Germany</span>
                      </div>

                      <div className="flex items-center gap-3 cursor-pointer text-red-600">
                        <img src="https://flagcdn.com/w20/us.png" />
                        <span>USD $ | United States</span>
                      </div>

                      <div className="flex items-center gap-3 cursor-pointer hover:text-red-500">
                        <img src="https://flagcdn.com/w20/vn.png" />
                        <span>VND ₫ | Vietnam</span>
                      </div>

                    </div>
                  </div>
                )}

              </div>

              {/* LANGUAGE (can add same later) */}
              <div className="flex items-center gap-2 cursor-pointer">
                <span>English</span>
                <i className="fa-solid fa-angle-down text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? "bg-white shadow-sm" : "bg-transparent"
          }`}
        style={{ transition: "all 0.3s ease" }}
      >
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand fw-bold fs-3" to="/">
            ecomus
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">

            {/* Center Menu */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">

              {/* HOME */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">
                  Home
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Home 1</Link></li>
                  <li><Link className="dropdown-item" to="/">Home 2</Link></li>
                </ul>
              </li>

              {/* SHOP */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/shop" data-bs-toggle="dropdown">
                  Shop
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/shop">Shop Grid</Link></li>
                  <li><Link className="dropdown-item" to="/shop">Shop List</Link></li>
                </ul>
              </li>

              {/* PRODUCTS */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/products" data-bs-toggle="dropdown">
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/products">Product Detail</Link></li>
                </ul>
              </li>

              {/* PAGES */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/about">About</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                </ul>
              </li>

              {/* BLOG */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/blog" data-bs-toggle="dropdown">
                  Blog
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blog">Blog Grid</Link></li>
                </ul>
              </li>

              {/* BUY NOW */}
              <li className="nav-item">
                <Link className="nav-link" to="/buy">Buy now</Link>
              </li>

            </ul>

            {/* Right Icons */}
            <div className="d-flex align-items-center gap-4">

              <Link to="/search"><i className="fa-solid fa-magnifying-glass fs-5"></i></Link>
              <Link to="/account"><i className="fa-regular fa-user fs-5"></i></Link>

              <div className="position-relative">
                <Link to="/wishlist">
                  <i className="fa-regular fa-heart fs-5"></i>
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    0
                  </span>
                </Link>
              </div>

              <div className="position-relative">
                <Link to="/cart">
                  <i className="fa-solid fa-bag-shopping fs-5"></i>
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    0
                  </span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header