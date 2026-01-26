import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import products from '../Data/Product';
import categories from '../Data/Categories';
import gram1 from "../assets/images/gallery-3.jpg";
import gram2 from "../assets/images/gallery-5.jpg";
import gram3 from "../assets/images/gallery-6.jpg";
import gram4 from "../assets/images/gallery-7.jpg";
import gram5 from "../assets/images/gallery-8.jpg";

function Home({ toggleWishlist, isInWishlist, addToCart }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (id) => {
    setActivePopup(activePopup === id ? null : id);
  }

  const navigate = useNavigate();


  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="container-fluid bg-[url(../src/assets/images/fashion-slideshow-01.jpg)] h-[600px] bg-cover bg-center bg-no-repeat flex">
            <div className="container py-5 my-auto text-black">
              <h1 className='text-[90px] font-normal'>Glamorous <br /> Glam</h1>
              <p className='text-2xl py-3'>From casual to formal, we've got you covered</p>
              <button className='bg-gray-950 text-[18px] text-white text-center px-10 py-3 hover:bg-gray-800 transition'>Shop collection</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid bg-[url(../src/assets/images/fashion-slideshow-02.jpg)] h-[600px] bg-cover bg-center flex items-center">
            <div className="container">
              <h1 className='text-[90px] font-normal'>Glamorous <br /> Glam</h1>
              <p className='text-2xl py-3'>From casual to formal, we've got you covered</p>
              <button className='bg-gray-950 text-[18px] text-white text-center px-10 py-3 hover:bg-gray-800 transition'>Shop collection</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid bg-[url(../src/assets/images/fashion-slideshow-03.jpg)] h-[600px] bg-cover bg-center flex items-center">
            <div className="container">
              <h1 className='text-[90px] font-normal'>Simple <br /> Style</h1>
              <p className='text-2xl py-3'>From casual to formal, we've got you covered</p>
              <button className='bg-gray-950 text-[18px] text-white text-center px-10 py-3 hover:bg-gray-800 transition'>Shop collection</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* MARQUEE BAR */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <div className="d-flex">
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
          </div>
          <div className="d-flex">
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
            <div className="marquee-item">⚡ Spring Clearance Event: Save Up to 70%</div>
          </div>
        </div>
      </div>

      <div className="container my-5">

        {/* HEADER WITH NAV BUTTONS */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <div
            className={`swiper-nav-btn ${isBeginning ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.slidePrev()}>
            ←
          </div>

          <div
            className={`swiper-nav-btn ${isEnd ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.slideNext()}>
            →
          </div>

          <h4 className="mb-0 fw-semibold ms-3">SHOP BY CATEGORIES</h4>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* LEFT - SWIPER */}
          <div className="col-12 col-lg-9">

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div
                    className="category-card"
                    style={{ background: cat.bg, height: "420px" }}
                  >
                    <img src={cat.image} alt="" />
                    <div className="category-title">{cat.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* RIGHT - DISCOVER CARD */}
          <div className="col-12 col-lg-3">
            <div className="discover-card h-100">
              <h2 className="fw-normal">
                Discovery all new items
              </h2>

              <div className="discover-btn" onClick={() => navigate("/collection")} style={{ cursor: "pointer" }}>
                ↗
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Best saller */}
      <div className="container-fluid m-20" >
        <div className="container items-center text-center">
          <h2 className='text-4xl font-normal py-2' >Best Sellers</h2>
          <p >Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
        </div>
      </div>

      {/* PRODUCTS GRID - FIXED SECTION */}
      <div className="container my-5">
        <div className="row g-4">
          {products.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3">
              {/* Wrap each product card with Link */}
              <Link to={`/product/${p.id}`} className="no-underline text-black">
                {/* CARD */}
                <div className="product-card">
                  <div className="product-img">
                    <img src={p.img1} className="img-1" alt={p.name} />
                    <img src={p.img2} className="img-2" alt={p.name} />

                    {/* ACTIONS */}
                    <div className="product-actions">
                      <div 
                        className="action-btn" 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(p);
                        }}
                      >
                        <i className="fa-solid fa-cart-plus"></i>
                      </div>

                      <div 
                        className="action-btn" 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(p);
                        }}
                      >
                        <i className={`fa-heart ${isInWishlist(p.id) ? "fa-solid text-danger" : "fa-regular"}`}></i>
                      </div>

                      <div 
                        className="action-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <i className="fa-solid fa-code-compare"></i>
                      </div>

                      <div 
                        className="action-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <i className="fa-regular fa-eye"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* INFO */}
                <h6 className="mt-3 mb-1">{p.name}</h6>
                <p className="fw-bold mb-1">${p.price}</p>
                {/* COLORS */}
                <div className="d-flex gap-2">
                  {p.colors.map((c, i) => (
                    <span key={i} className="color-dot" style={{ background: c }}></span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SHOP THE LOOK SECTION ================= */}

      <div className="w-full">

        {/* HEADING */}
        <div className="text-center py-12">
          <h2 className="text-4xl font-semibold">Shop the look</h2>
          <p className="text-gray-500 mt-2">
            Inspire and let yourself be inspired, from one unique fashion to another.
          </p>
        </div>

        {/* IMAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="../src/assets/images/imgi_67_lookbook-3.jpg"
              className="w-full h-full object-cover"
              alt=""
            />

            {/* DOT 1 */}
            <div
              className="absolute top-[40%] left-[35%] w-5 h-5 bg-black rounded-full cursor-pointer border-4 border-white"
              onClick={() => togglePopup(1)}
            ></div>

            {activePopup === 1 && (
              <div className="absolute top-[30%] left-[40%] bg-white shadow-lg p-1 rounded-md w-64 z-50">
                <div className="flex gap-3 items-center">
                  <img src="../src/assets/images/imgi_68_img-p2.jpeg" className="w-10 h-10 object-cover" alt="" />
                  <div>
                    <p className="font-medium p-0 m-1">Ribbed modal T-shirt</p>
                    <p className="font-semibold p-0 m-1">$20.00</p>
                  </div>
                </div>
              </div>
            )}

            {/* DOT 2 */}
            <div
              className="absolute top-[65%] left-[50%] w-5 h-5 bg-black rounded-full cursor-pointer border-4 border-white"
              onClick={() => togglePopup(2)}
            ></div>

            {activePopup === 2 && (
              <div className="absolute top-[55%] left-[55%] bg-white shadow-lg p-1 rounded-md w-64 z-50">
                <div className="flex gap-3 items-center">
                  <img src="../src/assets/images/imgi_69_img-p4.jpeg" className="w-10 h-10 object-cover" alt="" />
                  <div>
                    <p className="font-medium p-0 m-1">Necklace</p>
                    <p className="font-semibold p-0 m-1">$15.00</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="../src/assets/images/imgi_70_lookbook-4.jpg"
              className="w-full h-full object-cover"
              alt=""
            />

            {/* DOT 3 */}
            <div
              className="absolute top-[33%] left-[60%] w-5 h-5 bg-black rounded-full cursor-pointer border-4 border-white"
              onClick={() => togglePopup(3)}
            ></div>

            {activePopup === 3 && (
              <div className="absolute top-[20%] left-[40%] bg-white shadow-lg p-1 rounded-md w-64 z-50">
                <div className="flex gap-3 items-center">
                  <img src="../src/assets/images/imgi_71_img-p5.jpeg" className="w-14 h-14 object-cover" alt="" />
                  <div>
                    <p className="font-medium p-0 m-1">Summer Hat</p>
                    <p className="font-semibold p-0 m-1">$25.00</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= HAPPY CLIENTS SECTION ================= */}
      <div className="container-fluid py-5 px-5 bg-white">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-semibold">Happy Clients</h2>
          <p className="text-muted mt-2">Hear what they say about us</p>
        </div>

        <div className="position-relative">
          {/* Nav Buttons */}
          <button className="happy-prev btn btn-outline-dark rounded-circle position-absolute top-50 start-[-25px] translate-middle-y z-3 font-semibold">
            <i className="bi bi-chevron-compact-left"></i>
          </button>

          <button className="happy-next btn btn-outline-dark rounded-circle position-absolute top-50 end-[-25px] translate-middle-y z-3">
            <i className="bi bi-chevron-compact-right"></i>
          </button>


          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".happy-prev",
              nextEl: ".happy-next",
            }}
            spaceBetween={30}
            speed={700}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >

            {/* SLIDE 1 */}
            <SwiperSlide>
              <div className="border rounded-4 p-4 h-100 d-flex flex-column justify-content-between position-relative group">

                <div>
                  <div className="text-warning fs-5 mb-3">★ ★ ★ ★ ★</div>

                  <h5 className="fw-semibold mb-3">Best Online Fashion Site</h5>

                  <p className=" mb-4 text-[18px] text-black">
                    " I always find something stylish and affordable on this web fashion site "
                  </p>

                  <p className="fw-semibold mb-0">Robert smith</p>
                  <small className="text-muted">Customer from USA</small>
                </div>
                <hr className='border border-black' />
                <div className="d-flex align-items-center py-3 gap-3">
                  <img src="../src/assets/images/imgi_72_img-p3.jpeg" className="rounded" width="64" height="64" alt="" />
                  <div>
                    <div className="fw-medium">Jersey thong body</div>
                    <div className="fw-semibold">$105.95</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
              <div className="border rounded-4 p-4 h-100 d-flex flex-column justify-content-between position-relative group">

                <div>
                  <div className="text-warning fs-5 mb-3">★ ★ ★ ★ ★</div>

                  <h5 className="fw-semibold mb-3">Great Selection and Quality</h5>

                  <p className=" mb-4 text-[18px] text-black">
                    " I love the variety of styles and the high-quality clothing on this web fashion site. "
                  </p>

                  <p className="fw-semibold mb-0">Allen Lyn</p>
                  <small className="text-muted">Customer from France</small>
                </div>
                <hr className='border border-black' />
                <div className="d-flex align-items-center py-3 gap-3">
                  <img src="../src/assets/images/imgi_69_img-p4.jpeg" className="rounded" width="64" height="64" alt="" />
                  <div>
                    <div className="fw-medium">Cotton jersey top</div>
                    <div className="fw-semibold">$7.95</div>
                  </div>
                </div>

              </div>
            </SwiperSlide>

            {/* SLIDE 3 */}
            <SwiperSlide>
              <div className="border rounded-4 p-4 h-100 d-flex flex-column justify-content-between position-relative group">

                <div>
                  <div className="text-warning fs-5 mb-3">★ ★ ★ ★ ★</div>

                  <h5 className="fw-semibold mb-3">Best Customer Service</h5>

                  <p className="mb-4 text-[18px] text-black">
                    "I finally found a web fashion site with stylish and flattering options in my size. "
                  </p>

                  <p className="fw-semibold mb-0">Peter Rope</p>
                  <small className="text-muted">Customer from USA</small>
                </div>

                <hr className='border border-black' />

                <div className="d-flex align-items-center py-3 gap-3">
                  <img src="../src/assets/images/imgi_71_img-p5.jpeg" className="rounded" width="64" height="64" alt="" />
                  <div>
                    <div className="fw-medium">Ribbed modal T-shirt</div>
                    <div className="fw-semibold">From $18.95</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 4 */}
            <SwiperSlide>
              <div className="border rounded-4 p-4 h-100 d-flex flex-column justify-content-between position-relative group">

                <div>
                  <div className="text-warning fs-5 mb-3">★ ★ ★ ★ ★</div>

                  <h5 className="fw-semibold mb-3">Amazing Quality & Fast Delivery</h5>

                  <p className="mb-4 text-[18px] text-black">
                    "I always find something stylish and affordable on this web fashion site. "
                  </p>

                  <p className="fw-semibold mb-0">Sophia Miller</p>
                  <small className="text-muted">Customer from UK</small>
                </div>

                <hr className='border border-black' />

                <div className="d-flex align-items-center py-3 gap-3">
                  <img src="../src/assets/images/imgi_68_img-p2.jpeg" className="rounded" width="64" height="64" alt="" />
                  <div>
                    <div className="fw-medium">Premium Summer Top</div>
                    <div className="fw-semibold">$29.95</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
      </div>
      {/* ================= END HAPPY CLIENTS ================= */}

      {/* ================= BRANDS SECTION ================= */}
      <div className="container-fluid px-5 my-10">

        <div className="border overflow-hidden">

          <div className="row g-0 text-center align-items-center">

            <div className="col-6 col-md-4 col-lg-2 border-end py-4">
              <img src="../src/assets/images/brand-01.png" className="img-fluid brand-logo" alt="SSENSE" />
            </div>

            <div className="col-6 col-md-4 col-lg-2 border-end py-4">
              <img src="../src/assets/images/brand-02.png" className="img-fluid brand-logo" alt="Burberry" />
            </div>

            <div className="col-6 col-md-4 col-lg-2 border-end py-4">
              <img src="../src/assets/images/brand-03.png" className="img-fluid brand-logo" alt="Nike" />
            </div>

            <div className="col-6 col-md-4 col-lg-2 border-end py-4">
              <img src="../src/assets/images/brand-04.png" className="img-fluid brand-logo" alt="Asos" />
            </div>

            <div className="col-6 col-md-4 col-lg-2 border-end py-4">
              <img src="../src/assets/images/brand-05.png" className="img-fluid brand-logo" alt="Pull & Bear" />
            </div>

            <div className="col-6 col-md-4 col-lg-2 py-4">
              <img src="../src/assets/images/brand-06.png" className="img-fluid brand-logo" alt="Gildan" />
            </div>
          </div>
        </div>
      </div>
      {/* ================= END BRANDS SECTION ================= */}

      {/* ================= SHOP GRAM SECTION ================= */}
      <div className="container-fluid my-5 px-5">

        {/* Heading */}
        <div className="text-center mt-5 mb-5">
          <h2 className="display-6 fw-semibold">Shop Gram</h2>
          <p className="text-muted">
            Inspire and let yourself be inspired, from one unique fashion to another.
          </p>
        </div>

        <div className="row justify-center g-2">
          {[gram1, gram2, gram3, gram4, gram5].map((img, i) => (
            <div key={i} className="col-6 col-md-2 gram-col flex items-center justify-center">
              <div className="gram-card position-relative overflow-hidden rounded-2">
                <img
                  src={img}
                  className=" gram-img"
                  alt=""
                />
                {/* Overlay Button */}
                <div className="gram-overlay d-flex align-items-center justify-content-center">
                  <button className="btn btn-light rounded-circle shadow">
                    <i className="bi bi-bag-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ================= END SHOP GRAM ================= */}

      {/* ================= FEATURES SECTION ================= */}
      <div className="container my-5 py-5">

        <div className="row g-4">

          {/* ITEM 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border rounded-4 p-4 h-100 text-center feature-card">
              <div className="mb-3 fs-1">
                <i className="bi bi-box"></i>
              </div>
              <h5 className="fw-semibold">Free Shipping</h5>
              <p className="text-muted mb-0">Free shipping over order $120</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border rounded-4 p-4 h-100 text-center feature-card">
              <div className="mb-3 fs-1">
                <i className="bi bi-credit-card"></i>
              </div>
              <h5 className="fw-semibold">Flexible Payment</h5>
              <p className="text-muted mb-0">Pay with Multiple Credit Cards</p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border rounded-4 p-4 h-100 text-center feature-card">
              <div className="mb-3 fs-1">
                <i className="bi bi-arrow-return-left"></i>
              </div>
              <h5 className="fw-semibold">14 Day Returns</h5>
              <p className="text-muted mb-0">Within 30 days for an exchange</p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border rounded-4 p-4 h-100 text-center feature-card">
              <div className="mb-3 fs-1">
                <i className="bi bi-headset"></i>
              </div>
              <h5 className="fw-semibold">Premium Support</h5>
              <p className="text-muted mb-0">Outstanding premium support</p>
            </div>
          </div>

        </div>

      </div>
      {/* ================= END FEATURES ================= */}


    </>
  );
}

export default Home;