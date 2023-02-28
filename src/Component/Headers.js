import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function Headers() {
  const nav = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Gallery",
      url: "/gallery",
    },
    {
      label: "Library",
      url: "/library",
    },
  ];

  const location = useLocation();

  const [clicked, setClicked] = useState(false);

  const navbarClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <nav className="flex md:justify-center items-center m-auto text-[#979797] fixed top-0 w-full py-6 h-fit justify-end md:p-0 px-5">
      <div
        className={`md:flex md:translate-y-0 md:items-center md:h-fit md:flex-row md:bg-transparent md:py-6 absolute flex flex-col gap-y-5 h-screen top-0 left-0 bg-slate-800 w-screen items-center justify-center transition-all ${
          clicked ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {nav.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className={`mx-2 px-3 py-2 rounded ${
              location.pathname === item.url
                ? "text-[#DE953C]"
                : "text-[#979797]"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <NavHashLink
          smooth
          to={"/#contact"}
          className={"mx-2 px-3"}
          activeClassName="selected"
          activeStyle={{ color: "#DE953C" }}
        >
          Contact
        </NavHashLink>
      </div>
      <div className="md:hidden flex z-50">
        <HiOutlineBars3BottomRight
          className="w-7 h-7 text-white"
          onClick={() => navbarClick()}
        />
      </div>
    </nav>
  );
}
