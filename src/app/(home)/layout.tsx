"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import React from "react";
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer";
import { Bounce, ToastContainer } from "react-toastify";

export default function HomeLayout({ children }: {
    children: React.ReactNode;
}) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })


    return (
        <div className="relative">
            <motion.div
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    zIndex: 10,
                    backgroundColor: "#4CAF50",
                }}
            />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <Navbar />
            <main className="h-full">{children}</main>
            <Footer />
        </div>
    )
}