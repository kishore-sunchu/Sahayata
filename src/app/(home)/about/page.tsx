"use client"
import { setTitle } from "@/utils/titleSetter";
import AOS from "aos";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    setTitle('About | Sahayata')
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <header className="py-10 m-auto">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Sahayata</h1>
          <p className="text-lg mt-4">Our mission is to bridge the gap between surplus food and hunger.</p>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-10 w-[90%] md:w-4/5 m-auto">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primaryDark mb-6">Our Story</h2>
          <p className="text-darkGray leading-relaxed">
            Sahayata was born out of the desire to address two critical issues: food waste and hunger.
            Our journey began with a small group of individuals committed to making a difference.
            Over time, we have grown into a platform that empowers restaurants, NGOs, and individuals to come together
            and create meaningful change in their communities.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 w-[90%] md:w-4/5 m-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary text-neutral p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 leading-relaxed">
              Reducing food waste by connecting surplus food to those who need it the most.
            </p>
          </div>
          <div className="bg-secondary text-neutral p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 leading-relaxed">
              A world where no food goes to waste, and no one goes to bed hungry.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-[600px] bg-AboutUsBanner bg-cover bg-no-repeat flex justify-center items-start flex-col bg-center" data-aos='fade-up' data-aos-duration="700">
        <div className="bg-white/1 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6 text-center mx-auto w-4/5 h-4/5 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">Join the Movement</h2>
          <p className="mt-4">Become a part of Sahayata and help us make a difference in the world.</p>
          <button className="mt-6 px-8 py-3 bg-primary text-darkGray font-semibold rounded-full shadow-md hover:bg-primaryDark">
            Register Now
          </button>
        </div>
      </section>


      {/* Team Section */}
      {/* <section className="py-10 w-[90%] md:w-4/5 m-auto" data-aos='fade-up' data-aos-duration="700">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primaryDark mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-softGray rounded-full">
                <img src={kishore} alt="" className="rounded-full" />
              </div>
              <h4 className="text-lg font-bold mt-4">Kishore Sunchu</h4>
              <p className="text-sm text-darkGray">Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-softGray rounded-full">
                <img src={Sanju} alt="" className="rounded-full" />
              </div>
              <h4 className="text-lg font-bold mt-4">Ramashankar Pandey</h4>
              <p className="text-sm text-darkGray">Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-softGray rounded-full">
                <img src={Komal} alt="" className="rounded-full" />
              </div>
              <h4 className="text-lg font-bold mt-4">Komal Patil</h4>
              <p className="text-sm text-darkGray">Operations Lead</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-10 w-[90%] md:w-4/5 m-auto" data-aos='fade-up' data-aos-duration="700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Join the Movement</h2>
          <p className="mt-4">Become a part of Sahayata and help us make a difference in the world.</p>
          <button className="mt-6 px-8 py-3 bg-primary text-darkGray font-semibold rounded-full shadow-md hover:bg-primaryDark">
            Register Now
          </button>
        </div>
      </section>
    </main>
  );
}
