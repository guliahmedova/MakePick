import { Help, Home, Offer, Profile, Checkout } from "@/pages";
import { AuthModal, CartPopupButton } from "@/shared/components";
import Navbar from "@/shared/layout/Navbar";
import Sidebar from "@/shared/layout/Sidebar";
import { useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';

const Router = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [openAuthModal, setAuthModal] = useState(false);
    let location = useLocation();

    return (
        <>
            <Navbar setShowSidebar={setShowSidebar} setAuthModal={setAuthModal} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <AuthModal openAuthModal={openAuthModal} setAuthModal={setAuthModal} />
            {
                (location.pathname === "/" || location.pathname === "/offer") && <CartPopupButton />
            }
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/offer" index element={<Offer />} />
                <Route path="/help" index element={<Help />} />
                <Route path="/profile" index element={<Profile />} />
                <Route path="/checkout" index element={<Checkout />} />
            </Routes>
        </>
    )
}

export default Router