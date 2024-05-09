import { Help, Home, Offer } from "@/pages";
import { AuthModal, CartPopupButton } from "@/shared/components";
import Navbar from "@/shared/layout/Navbar";
import Sidebar from "@/shared/layout/Sidebar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [openAuthModal, setAuthModal] = useState(false);

    return (
        <>
            <Navbar setShowSidebar={setShowSidebar} setAuthModal={setAuthModal} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <AuthModal openAuthModal={openAuthModal} setAuthModal={setAuthModal} />
            <CartPopupButton />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/offer" index element={<Offer />} />
                <Route path="/help" index element={<Help />} />
            </Routes>
        </>
    )
}

export default Router