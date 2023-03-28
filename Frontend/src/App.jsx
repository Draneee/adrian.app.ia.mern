import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./page";

const App = () => (
  <BrowserRouter>
    <header className=" w-full flex justify-between gap-10 items-center  sm:px-8 px-4 py-4 ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-58 object-contain " />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 bg-[#121212] px-4 py-8 w-full min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <div className="noise"></div>
  </BrowserRouter>
);

export default App;
