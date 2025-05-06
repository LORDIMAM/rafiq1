import React from "react";
import Home from "./index";
import Ourservices from "./services";
import About from "./about";
import Footer from "../components/footer";
import Contact from "./contact";
export default function Layout() {
    return (
        <>
            <Home />
            <Ourservices />
            <About />
            <Contact />
            <Footer />
        </>
    )
}