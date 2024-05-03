import { Home } from "@/pages";
import Navbar from "@/shared/layout/Navbar";
import Sidebar from "@/shared/layout/Sidebar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CartPopupButton } from "@/shared/components";

const Router = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Navbar setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <CartPopupButton />
            <Routes>
                <Route path="/" index element={<Home />} />
            </Routes>
        </>
    )
}

export default Router