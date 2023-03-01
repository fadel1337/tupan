import React from "react";
import Headers from "../Component/Headers";
import Footer from "./Footer";

export default function Library() {
  const DataModul = [
    
    {
      title: "Materi Literasi C++ By Harielzal",
      cover: "Assets/Materi-Literasi-C++-Cover.png",
      url: "Assets/PDF/Materi-Literasi-C++-Cover.pdf",
    },
    {
      title: "Materi Literasi Desain Grafis By Harielzal ",
      cover: "Assets/Materi-Literasi-Desain-Grafis-Cover.png",
      url: "Assets/PDF/Materi-Literasi-Desain-Grafis-Cover.pdf",
    },
    {
      title: "Materi Literasi Python By Harielzal",
      cover: "Assets/Materi-Literasi-Python-Cover.png",
      url: "Assets/PDF/Materi-Literasi-Python-Cover.pdf",
    },
    {
      title: "Materi Literasi Teknologi Jaringan By Harielzal",
      cover: "Assets/Materi-Literasi-Teknologi-Jaringan-cover.png",
      url: "Assets/PDF/Materi-Literasi-Teknologi-Jaringan-cover.pdf",
    },
    {
      title: "Materi Hardware Komputer By Umar",
      cover: "Assets/Cover Materi 1- Hardware Komputer.jpg",
      url: "Assets/PDF/Materi 1- Hardware Komputer.pdf",
    },
    {
      title: "Bahasa Pemograman Populer",
      cover: "Assets/Cover Materi 2 - Bahasa Pemrograman Populer.jpg",
      url: "Assets/PDF/Materi 2 - Bahasa Pemrograman Populer.pdf",
    },
    {
      title: "Materi Software Desain Grafis dan Video Editing By Umar",
      cover: "Assets/Cover Materi 3 - Software Desain Grafis dan Video Editing.jpg",
      url: "Assets/PDF/Materi 3 - Software Desain Grafis dan Video Editing.pdf",
    },
    {
      title: "Mengenal Sejarah Teknologi Komputer",
      cover: "Assets/ayo mengenal sejarah komputer.png",
      url: "Assets/PDF/SEJARAH SINGKAT TEKNOLOGI KOMPUTER.pdf",
    },
    {
      title: "Mengenal Operating System Windows",
      cover: "Assets/poster ayo mengenal windows.png",
      url: "Assets/PDF/MENGENAL APA ITU WINDOWS.pdf",
    },
    {
        title: "Materi Literasi Java Script By Harielzal",
        cover: "Assets/Screenshot_20230302-053900444_1.jpg",
        url: "Assets/PDF/Materi-Literasi-Java-Sript-Cover.pdf",
      },
  ];
  return (
    <div className="bg-[#DCDCDC]">
      <Headers />
      <div className="min-h-[93vh]">
        <p className="font-bold text-center pt-20 text-2xl">LIBRARY</p>
        <div className="flex flex-wrap justify-between mb-4 gap-4 px-10 pt-6">
          {DataModul.map((item) => (
            <div className="bg-white h-fit flex-col sm:flex-row lg:w-[49%] w-full sm:flex-nowrap flex-wrap items-center rounded-lg shadow-lg overflow-hidden flex">
              <img
                src={item.cover}
                alt="Placeholder"
                className="sm:w-[200px] sm:h-fit object-contain  w-full h-[100px]"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold mb-2">{item.title}</h2>
                <a
                  href={item.url}
                  target="_blank"
                  className="text-[12px] underline"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
