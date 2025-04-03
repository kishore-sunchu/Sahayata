"use client"
import { Ngo } from "@/app/_common/_types/ngo.type";
import NgoCard from "@/app/components/NgoCard";
import NgoCardLoader from "@/app/components/loaders/skelton/NgoCardLoader";
import { Response } from "@/utils/response";
import { setTitle } from "@/utils/titleSetter";
import AOS from "aos";
import axios from 'axios';
import { redirect, usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function NGOS() {

  const [NGO, SetNGO] = useState<Ngo[]>([])
  const [search, SetSearch] = useState<string>('');
  const [loader, SetLoader] = useState<boolean>(true)
  const pathname = usePathname()

  useEffect(() => {
    const controller = new AbortController();

    const loadNgo = async () => {
      try {
        const response: Response<{ ngo: Ngo[] }> = (await axios.get('api/ngos', { signal: controller.signal })).data;
        if (response.isSuccess) {
          SetNGO(response.payload?.ngo || [])
          setTimeout(() => {
            SetLoader(false)
          }, 800);
        } else {
          console.error(response.message, response.errorCode);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.warn('API call cancelled');
        } else {
          SetLoader(false);
          console.error('Error while fetching NGO data:', error);
          setTimeout(() => {
            redirect('/under-maintenance');
          }, 1500);
        }
      }
    }
    loadNgo()
    setTitle('NGOs | Sahayata')
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
    
    return () => {
      controller.abort();
    }
  }, [pathname]);



  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const controller = new AbortController();
    try {
      const response: Response<{ ngo: Ngo[] }> = (await axios.get(`api/ngos?search=${search}`, { signal: controller.signal })).data;
      if (response.isSuccess) {
        SetNGO(response.payload?.ngo || [])
      } else {
        console.error(response.message, response.errorCode);
        SetNGO([])
      }
    } catch (error) {
      console.error('Error while fetching ngo data ' + error)
    }
    finally {
      controller.abort();
    }
  }

  const handleClick = (id: string) => {
    redirect(`/ngos/${id}`);
  }

  return (
    <main className="h-auto">
      {/* Header Section */}
      <header className="py-10 w-4/5 m-auto" data-aos="fade-up" data-aos-duration="2000">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary">Our Partner NGOs</h1>
          <p className="text-lg mt-4">Connect with trusted NGOs working towards a better tomorrow.</p>
        </div>
      </header>

      {/*  Search Section */}
      <form className="w-full flex justify-center items-center py-2" data-aos="fade-up" data-aos-duration="2500" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          className="border-2 border-primary focus:ring-2 focus:ring-primaryDark mx-auto w-4/5 lg:w-2/3 py-2 px-4 rounded-lg bg-light-gray text-dark-gray placeholder:text-gray-400 outline-none transition duration-200 ease-in-out"
          placeholder="Search NGO"
          onChange={(e) => {
            SetSearch(e.target.value);
          }}
        />
      </form>

      <section className={`w-full flex flex-col justify-center items-center py-2`}>
        {NGO.length && !loader ? (
          NGO.map((ngo: Ngo,) => (
            <NgoCard key={ngo._id} ngo={ngo} handleClick={handleClick} />
          ))
        ) : (
          loader ?
            (<>
              <NgoCardLoader />
              <NgoCardLoader />
            </>) :
            <p className="text-center md:text-2xl text-darkGray">No NGOs found.</p>
        )}
      </section>

    </main >
  );
}
