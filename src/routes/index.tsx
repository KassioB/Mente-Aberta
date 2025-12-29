import React from "react";
import { Route, Routes } from "react-router-dom";
import { Booklet } from "../pages/Booklet";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Booklet />} />
        </Routes>
    )
}
