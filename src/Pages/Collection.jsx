import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Women",
      image: "/src/assets/images/collection-14.jpg",
      bg: "bg-[#f8f8ec]",
    },
    {
      id: 2,
      title: "Women",
      image: "/src/assets/images/collection-9.jpg",
      bg: "bg-[#e6dfd9]",
    },
    {
      id: 3,
      title: "Women",
      image: "/src/assets/images/collection-10.jpg",
      bg: "bg-[#ececea]",
    },
    {
      id: 4,
      title: "Women",
      image: "/src/assets/images/collection-11.jpg",
      bg: "bg-[#f4f4f4]",
    },
    {
      id: 5,
      title: "Women",
      image: "/src/assets/images/collection-12.jpg",
      bg: "bg-[#f4f4f4]",
    },
    {
      id: 6,
      title: "Women",
      image: "/src/assets/images/collection-13.jpg",
      bg: "bg-[#efe6dd]",
    },
  ];
  const navigate = useNavigate();


  return (
    <>
      <h2 className="text-center fs-30 py-16 bg-red-200">Collections</h2>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded ${item.bg} group cursor-pointer`}
            >
              {/* IMAGE */}
              <div className="h-[420px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-cover transition-transform hover:scale-105 duration-[1200ms] ease-in-out" />
              </div>

              {/* BUTTON */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <button className="btn1" onClick={() => navigate("/newarrival")} style={{ cursor: "pointer" }}>
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center py-10">
        <div className="flex items-center gap-3">

          {/* ACTIVE */}
          <button className="w-11 h-11 bg-black text-white border rounded flex items-center justify-center">
            1
          </button>

          {/* NORMAL */}
          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">
            2
          </button>

          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">
            3
          </button>

          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">
            4
          </button>

          {/* NEXT */}
          <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-black hover:text-white transition">
            <i class="bi bi-caret-right-fill"></i>
          </button>

        </div>
      </div>

    </>
  );
}
