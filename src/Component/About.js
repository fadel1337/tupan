import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { SiGmail, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-[#DCDCDC] text-center py-32 about-container">
      <h1 className="font-bold text-3xl">ABOUT US</h1>
      <div className="flex items-center rounded-lg hover:shadow-lg w-3/4 ml-10 mb-6 mr-auto p-6 card-about">
        <img className="h-[325px]" src="Assets/Fadel.svg" alt="Fadel" />
        <div className="px-8 text-start headline-p">
          <h3 className="text-md font-medium mb-2 text-[#DE953C]">
            FADEL - LEADER TEAM
          </h3>
          <p className="text-[#181B3F] font-semibold text-md w-3/4 uppercase mb-2">
            Desain bukan hanya tentang tampilan dan perasaan. Desain adalah
            tentang bagaimana itu bekerja.
          </p>
          <p className="text-[12px] text-[#8E8E8E]">
            Halo, perkenalkan nama saya Fadel Huzein Adlar. Saya berusia 18
            Tahun dan saat ini bersekolah di SMK Tunas Pembangunan, kelas 12
            TKJ. Saya memiliki beberapa keahlian dalam menggunakan software
            jaringan seperti Cisco Packet Tracer dan Mikrotik, serta kemampuan
            dalam bahasa pemrograman seperti Python dan PHP. Selain itu, saya
            juga memiliki hobi membaca komik fantasy, menonton film, desain, dan
            mencari kerentanan bug pada suatu sistem. Saya tertarik untuk terus
            belajar dan mengembangkan keahlian saya dalam bidang teknologi
            informasi, terutama dalam bidang jaringan dan keamanan sistem.
          </p>
          <div className="flex gap-x-4 mt-4 icon-about">
            <Link to={"mailto:fadelhuzeinadlar@gmail.com"}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <SiGmail /> fadelhuzeinadlar@gmail.com
              </span>
            </Link>

            <Link
              to={"https://instagram.com/fadel_haxor1337?igshid=ZDdkNTZiNTM="}
            >
              <span className="flex items-center gap-x-1 text-[12px]">
                <SiInstagram /> @fadel_haxor1337
              </span>
            </Link>
            <Link to={"https://youtube.com/@fadelhuzeinadlar311"}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <IoLogoYoutube /> @fadelhuzeinadlar311
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-lg hover:shadow-lg w-3/4 mr-10 mb-6 ml-auto p-6 card-about card-reverse">
        <div className="px-8 text-end headline-p">
          <h3 className="text-md font-medium mb-2 text-[#DE953C]">
            CHANDIKA - DESIGNER
          </h3>
          <p className="text-[#181B3F] font-semibold text-md  uppercase mb-2 quote-person">
            jika hari ini kamu gagal masih ada hari esok jika esok tetap gagal
            masih ada hari selanjutnya teruslah berusaha hingga kamu berhasil.
          </p>
          <p className="text-[12px] text-[#8E8E8E]">
            Halo, perkenalkan nama saya Chandika Ramadhan dan biasanya dipanggil
            Chandika. Saya berusia 16 tahun dan lahir di Jakarta pada tanggal 20
            Oktober 2006. Saat ini, saya sedang bersekolah di SMK Tunas
            Pembangunan dan masih berada di kelas 10 dengan jurusan Teknik
            Jaringan Komputer dan Telekomunikasi (TJKT). Saya memiliki keahlian
            dalam mendesain menggunakan aplikasi Canva dan Pixellab. Selain itu,
            hobi saya adalah bermain bola voli dan bermain game online.
          </p>
          <div className="flex gap-x-4 mt-4 justify-end icon-about">
            <Link to={"mailto:dikandoygaming@gmail.com"}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <SiGmail /> dikandoygaming@gmail.com
              </span>
            </Link>

            <Link to={"https://youtube.com/@chandikaramadhan200"}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <IoLogoYoutube /> @chandikaramadhan200
              </span>
            </Link>
          </div>
        </div>
        <img className="h-[325px]" src="Assets/Chandika.svg" alt="Fadel" />
      </div>

      <div className="flex items-center rounded-lg hover:shadow-lg w-3/4 ml-10 mb-6 mr-auto p-6 card-about">
        <img className="h-[325px]" src="Assets/Harielzal.svg" alt="Fadel" />
        <div className="px-8 text-start headline-p">
          <h3 className="text-md font-medium mb-2 text-[#DE953C]">
            HARIELZAL - DESIGNER
          </h3>
          <p className="text-[#181B3F] font-semibold text-md w-3/4 uppercase mb-2">
            Binalah dirimu dengan penuh rasa tanggung jawab
          </p>
          <p className="text-[12px] text-[#8E8E8E]">
            Halo, perkenalkan nama saya Harielzal Setyo Nugroho. Saya berusia 18
            tahun dan saat ini bersekolah di SMK Tunas Pembangunan, kelas 12
            jurusan TKJ. Saya memiliki keahlian dalam Cisco Paket Tracer dan
            hobi saya adalah bermain bola dan coding. Saya dikenal sebagai
            seorang pekerja keras, rajin, dan senang mempelajari hal-hal baru.
          </p>
          <div className="flex gap-x-4 mt-4 icon-about">
            <Link to={"mailto:harielzalsetyonugroho904@gmail.com"}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <SiGmail /> harielzalsetyonugroho904@gmail.com
              </span>
            </Link>

            <Link to={"https://instagram.com/riellss_1?igshid=YmMyMTA2M2Y="}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <SiInstagram /> @riellss_1
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-lg hover:shadow-lg w-3/4 mr-10 mb-6 ml-auto p-6 card-about card-reverse">
        <div className="px-8 text-end headline-p">
          <h3 className="text-md font-medium mb-2 text-[#DE953C]">
            UMAR - PRESENTATOR
          </h3>
          <p className="text-[#181B3F] font-semibold text-md  uppercase mb-2 quote-person">
            Stop jadi normal, normal itu gak seru
          </p>
          <p className="text-[12px] text-[#8E8E8E]">
            Halo, perkenalkan nama saya Umar Latief. Saya adalah siswa SMK Tunas
            Pembangunan kelas 12 TKJ. Saya memiliki kemampuan dalam desain
            grafis menggunakan Pixellab, video editing menggunakan CapCut, dan
            mengembangkan website statis menggunakan Google Drive atau Microsoft
            OneDrive. Saya juga memiliki kemampuan berbahasa Inggris. Hobi saya
            adalah bermain game, menonton anime, dan membuat beberapa proyek
            untuk kepentingan pribadi atau membantu orang lain.
          </p>
          <div className="flex gap-x-4 mt-4 justify-end icon-about">
            <Link to={"mailto:moonlight.fighter28@gmail.com"}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <SiGmail /> moonlight.fighter28@gmail.com
              </span>
            </Link>

            <Link to={"https://instagram.com/nss_nacel?igshid=ZDdkNTZiNTM="}>
              <span className="flex items-center gap-x-1 text-[12px]">
                <SiInstagram /> @nss_nacel
              </span>
            </Link>

            <Link to={"https://youtube.com/@nssnacel5846"}>
              <p className="flex items-center gap-x-1 text-[12px]">
                <IoLogoYoutube /> @nssnacel5846
              </p>
            </Link>
          </div>
        </div>
        <img className="h-[325px]" src="Assets/Umar.svg" alt="Fadel" />
      </div>
    </div>
  );
}
