import React from "react";

import AdminPanel from "../api/admin/adminPanel";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;