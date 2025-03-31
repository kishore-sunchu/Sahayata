"use client"
import { setTitle } from "@/utils/titleSetter";
import AOS from "aos";
import { useEffect } from "react";

export default function NGOS() {

  useEffect(() => {
    setTitle('About | Sahayata')
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <h1 className="bg-blue-100  text-black">NGOS Page</h1>
  );
}
