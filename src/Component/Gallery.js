import React from "react";
import Headers from "../Component/Headers";
import Footer from "./Footer";

export default function Gallery() {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url('/Assets/Bg-Gallery.svg')` }}
    >
      <Headers />
      <div className="min-h-[93vh] pt-24 wrapper-gallery">
        <div className="w-11/12 h-[500px] m-auto bg-[#DCDCDC] shadow-md hover:shadow-lg sec-wrapper-gallery">
          <div className="grid grid-rows-6 grid-cols-3 gap-2 p-8 h-full container-gallery">
            <div className="col-span-1 row-span-3 bg-gray-200">
              <img
                src={"Assets/image-1.png"}
                alt="card"
                className="h-full w-full object-fill"
              />
            </div>
            <div className="col-span-1 row-span-2">
              <img
                src={"Assets/image-4.png"}
                alt="card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-3">
              <img
                src={"Assets/image-3.png"}
                alt="card"
                className="h-full w-full object-fill"
              />
            </div>
            <div className="col-span-1 row-span-4">
              <img
                src={"Assets/image-5.png"}
                alt="card"
                className="h-full w-full object-fill"
              />
            </div>
            <div className="col-span-1 row-span-3">
              <img
                src={"Assets/image-2.png"}
                alt="card"
                className="h-full w-full object-fill"
              />
            </div>
            <div className="col-span-1 row-span-3 ">
              <img
                src={"Assets/image-6.png"}
                alt="card"
                className="h-full w-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
