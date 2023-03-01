import React from "react";

export default function Hero() {
  return (
    // <div className="min-h-[90vh] bg-[#181B3F] grid grid">
    //   <div className="m-auto w-[170px]">
    //     <p className="text-[#5D6199] font-semibold text-md">Tupan CodeArt</p>
    //     <p className="text-white font-semibold text-2xl whitespace-normal">
    //       Discover the Art of Coding with Tupan CodeArt
    //     </p>
    //   </div>
    //   <div className="">
    //    <div className="bg-white h-full">
    //    <img src="/Assets/Hero.svg" height={100} alt="Hero"></img>
    //    </div>
    //   </div>
    //   <div className=" m-auto w-[250px]">
    //     <img src="Assets/Line.svg" width={230} alt="Line" />
    //     <p className="text-white font-thin text-sm whitespace-normal mt-4">
    //       Sebuah tim Web Design dengan beranggota 4 orang yang berasal dari SMK
    //       Tunas Pembangunan. Tim ini terdiri dari seorang ketua ( Fadel )
    //       sebagai programmer, 3anggota (Chandika, Aril) sebagai desainer dan (
    //       Umar ) presentator. Mereka memiliki kemampuan dan pemrograman yang
    //       kuat, serta semangat untuk belajar dan berkembang. Tim ini berfokus
    //       pada desain User Interface
    //     </p>
    //   </div>
    // </div>
    <div class="min-h-[100vh] bg-[#181B3F] flex flex-col justify-center items-center hero-container">
      <div class="flex flex-row items-center mobile-hero">
        <div class="w-1/4 px-16 mt-20 grid-pertama">
          <p className="text-[#5D6199] font-semibold text-lg mb-4 h-fit">
            Tupan CodeArt
          </p>
          <p className="text-white font-semibold text-3xl whitespace-normal">
            Discover the Art of Coding with Tupan CodeArt
          </p>
        </div>
        <div class="w-2/4 mt-40 grid-akhir">
          <img class="h-[500px] m-auto" src="/Assets/Hero.svg" alt="gambar" />
        </div>
        <div class="w-1/4 p-6 mt-36 mr-6 grid-kedua">
          <img src="Assets/Line.svg" width={230} alt="Line" />
          <p className="text-white font-thin text-sm whitespace-normal mt-4">
            Sebuah tim Web Design dengan beranggota 4 orang yang berasal dari
            SMK Tunas Pembangunan. Tim ini terdiri dari seorang ketua ( Fadel )
            sebagai programmer, 3anggota (Chandika, Aril) sebagai desainer dan (
            Umar ) presentator. Mereka memiliki kemampuan dan pemrograman yang
            kuat, serta semangat untuk belajar dan berkembang. Tim ini berfokus
            pada desain User Interface
          </p>
        </div>
      </div>
    </div>
  );
}
