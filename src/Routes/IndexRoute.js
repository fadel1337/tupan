import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayoutIndex from "../Layout/LayoutIndex";
import Library from "../Component/Library";
import Gallery from "../Component/Gallery";

export default function IndexRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutIndex />} />
          <Route path="/library" element={<Library />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
