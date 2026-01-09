import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import products from '../Data/Product';
import categories from '../Data/Categories';

function Home() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
            onClick={() => swiperRef.current?.slidePrev()}
          >
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

              <div className="discover-btn">
                ↗
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Best saller */}
      <div className="container-fluid m-20">
        <div className="container items-center text-center">
          <h2 className='text-4xl font-normal py-2'>Best Sellers</h2>
          <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          {products.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3">
              {/* CARD */}
              <div className="product-card">
                <div className="product-img">
                  <img src={p.img1} className="img-1" alt="" />
                  <img src={p.img2} className="img-2" alt="" />
                  {/* ACTIONS */}
                  <div className="product-actions">
                    <div className="action-btn">
                      <i class="fa-solid fa-cart-plus"></i>
                    </div>
                    <div className="action-btn">
                      <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className="action-btn">
                      <i class="fa-solid fa-code-compare"></i>
                    </div>
                    <div className="action-btn">
                      <i class="fa-regular fa-eye"></i>
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
      </div>
    </>
  )
}

export default Home