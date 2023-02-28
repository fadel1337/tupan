import React from "react";
import Headers from "../Component/Headers";
import Footer from "./Footer";

export default function Library() {
  const DataModul = [
    {
      title: "MODUL ADMINISTRASI SISTEM JARINGAN – XI TKJ",
      cover: "Assets/MODUL ADMINISTRASI SISTEM JARINGAN – XI TKJ.jpg",
      url: "Assets/PDF/MODUL ADMINISTRASI SISTEM JARINGAN – XI TKJ.pdf",
    },
    {
      title: "Modul Administrasi Infrastruktur Jaringan – XI TKJ",
      cover: "Assets/Modul Administrasi Infrastruktur Jaringan – XI TKJ.jpg",
      url: "Assets/PDF/Modul Administrasi Infrastruktur Jaringan – XI TKJ.pdf",
    },
    {
      title: "Modul Administrasi Transaksi – XI BDP",
      cover: "Assets/Modul Administrasi Transaksi – XI BDP.jpg",
      url: "Assets/PDF/Modul Administrasi Transaksi – XI BDP.pdf",
    },
    {
      title: "Modul Adminstrasi Transaksi – XII BDP",
      cover: "Assets/Modul Adminstrasi Transaksi – XII BDP.jpg",
      url: "Assets/PDF/Modul Adminstrasi Transaksi – XII BDP.pdf",
    },
    {
      title: "Modul Dasar Desain Grafis – X TKJ",
      cover: "Assets/Modul Dasar Desain Grafis – X TKJ.jpg",
      url: "Assets/PDF/Modul Dasar Desain Grafis – X TKJ.pdf",
    },
    {
      title: "Modul Komputer dan Jaringan Dasar – X TKJ",
      cover: "Assets/Modul Komputer dan Jaringan Dasar – X TKJ.jpg",
      url: "Assets/PDF/Modul Komputer dan Jaringan Dasar – X TKJ.pdf",
    },
    {
      title: "Modul Produk Kreatif dan Kewirausahaan – XII OTKP",
      cover: "Assets/Modul Produk Kreatif dan Kewirausahaan – XII OTKP.jpg",
      url: "Assets/PDF/Modul Produk Kreatif dan Kewirausahaan – XII OTKP.pdf",
    },
    {
      title: "Modul Komunikasi Bisnis – X BDP",
      cover: "Assets/Modul Komunikasi Bisnis – X BDP.jpg",
      url: "Assets/PDF/Modul Komunikasi Bisnis – X BDP.pdf",
    },
    {
      title: "Modul Pendidikan Agama Islam dan Budi Pekerti – XI",
      cover: "Assets/Modul Pendidikan Agama Islam dan Budi Pekerti – XI.jpg",
      url: "Assets/PDF/Modul Pendidikan Agama Islam dan Budi Pekerti – XI.pdf",
    },
    {
      title: "Modul PJOK – Permainan Bola Basket – X",
      cover: "Assets/Modul PJOK – Permainan Bola Basket – X.jpg",
      url: "Assets/PDF/Modul PJOK – Permainan Bola Basket – X.pdf",
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
