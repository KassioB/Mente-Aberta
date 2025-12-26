import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Booklet } from "../pages/Booklet";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Booklet />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}
