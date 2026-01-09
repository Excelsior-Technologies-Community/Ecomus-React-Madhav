import React, { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  const [openCurrency, setOpenCurrency] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="container-fluid mt-20 bg-white">
        {/* MAIN */}
        <div className="container border-t max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold mb-5">ecomus</h2>

            <p className="text-gray-600 text-sm mb-2">Address: 1234 Fashion Street, Suite 567,</p>
            <p className="text-gray-600 text-sm mb-2">New York, NY 10001</p>
            <p className="text-gray-600 text-sm mb-2">Email: info@fashionshop.com</p>
            <p className="text-gray-600 text-sm mb-4">Phone: (212) 555-1234</p>

            <a href="" className="border-b no-underline text-black inline-flex items-center gap-1">
              Get direction ↗
            </a>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {/* Facebook */}
              <a className="w-10 h-10 border rounded-full flex items-center justify-center text-black hover:text-white cursor-pointer transition no-underline">
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              {/* X */}
              <a className="w-10 h-10 border rounded-full flex items-center justify-center text-black no-underline hover:text-white cursor-pointer transition">
                <i class="fa-brands fa-x-twitter"></i>
              </a>

              {/* Instagram */}
              <a className="w-10 h-10 border rounded-full flex items-center justify-center text-black no-underline hover:text-white cursor-pointer transition">
                <i class="fa-brands fa-instagram"></i>
              </a>

              {/* TikTok */}
              <a className="w-10 h-10 border rounded-full flex items-center justify-center text-black no-underline hover:text-white cursor-pointer transition">
                <i class="fa-brands fa-tiktok"></i>
              </a>

              {/* Pinterest */}
              <a className="w-10 h-10 border rounded-full flex items-center justify-center text-black no-underline hover:text-white cursor-pointer transition">
                <i class="fa-brands fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          {/* HELP */}
          <div>
            <h3 className="font-semibold mb-5">Help</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Privacy Policy</li>
              <li>Returns + Exchanges</li>
              <li>Shipping</li>
              <li>Terms & Conditions</li>
              <li>FAQ’s</li>
              <li>Compare</li>
              <li>My Wishlist</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold mb-5">About us</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Our Story</li>
              <li>Visit Our Store</li>
              <li>Contact Us</li>
              <li>Account</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-5">Sign Up for Email</h3>
            <p className="text-gray-600 text-sm mb-4">
              Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
            </p>

            <div
              className="position-relative"
              onMouseEnter={() => setOpenCurrency(true)}
              onMouseLeave={() => setOpenCurrency(false)}>
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
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Ecomus Store. All Rights Reserved
            </p>

            <div className="flex gap-3">
              <img src="../src/assets/images/imgi_84_visa.jpeg" className="h-6" />
              <img src="../src/assets/images/imgi_85_img-1.jpeg" className="h-6" />
              <img src="../src/assets/images/imgi_86_img-2.jpeg" className="h-6" />
              <img src="../src/assets/images/imgi_87_img-3.jpeg" className="h-6" />
              <img src="../src/assets/images/imgi_88_img-4.jpeg" className="h-6" />
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL TOP BUTTON */}
      {showTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 w-12 h-12 border rounded bg-white shadow hover:bg-black hover:text-white transition z-50">
          ↑
        </button>
      )}
    </>
  );
}