/* eslint-disable react/no-unescaped-entities */
"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";
import Button from "../components/Button";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { setTitle } from "../../utils/titleSetter";
import { useInView } from "react-intersection-observer";
import { featureSection } from "../_common/featureSection.data";
import Link from "next/link";
import Image from "next/image";
import Card from "../components/Card";

export default function Home() {

  const { ref: mealsRef, inView: mealsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: ngosRef, inView: ngosInView } = useInView({ triggerOnce: true });
  const { ref: livesRef, inView: livesInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setTitle("Home | Sahayata");
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>

      {/* Hero Section */}
      <section className="w-full h-[700px] bg-banner bg-cover bg-no-repeat flex justify-center items-start flex-col lg:pl-10 pl-6 md:pl-6 lg:bg-right md:bg-left bg-center">
        <Title title="Join Hands to Reduce" />
        <Title title="Food Waste and Fight Hunger!" />
        <Subtitle
          data-aos="zoom-in"
          subtitle="Donate leftover food to NGOs effortlessly."
        />
        <div
          className="lg:w-1/4 md:w-1/3 pt-3 flex justify-between items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Button
            className="bg-white/80 shadow-lg ring-1 ring-black/5 md:w-[45%] w-[47%] h-12 rounded-md hover:bg-white/60 md:text-base text-sm"
            isLink={true}
            linkTo="/"
            content="Donate Food"
          />
          <Button
            className="bg-white/80 shadow-lg ring-1 ring-black/5 md:w-[45%] w-[47%] h-12 rounded-md hover:bg-white/60 md:text-base text-sm"
            isLink={true}
            linkTo="/ngos"
            content="View NGOs"
          />
        </div>
      </section>

      {/*  Features Section */}
      <section
        style={{
          background: "C9E9D2",
        }}
        className="bg-softGray py-12"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="md:text-4xl text-3xl font-bold text-darkGray">
            How Sahayata Works
          </h2>
          <p className="mt-4 md:text-lg text-md text-gray-600">
            Join the mission to reduce food waste and feed those in need.
          </p>
        </div>
        <div className="flex justify-evenly items-center md:flex-row gap-y-8 flex-col md:w-[95%] mx-auto">
          {featureSection.map((section, index) => {
            return (
              <Card
                style={section.style}
                description={section.description}
                title={section.title}
                image={section.svg}
                ImageAlt="Donate"
                key={index}
              />
            );
          })}
        </div>
        <div className="text-center mt-12 mb-5">
          <Link
            href="/ngos"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition"
          >
            Start Donating Today
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="bg-softGray flex md:flex-row flex-col"
        data-aos="fade-up"
        data-aos-duration="2200"
      >
        <div className="md:w-1/2 w-full">
          <Image
            src="/4.jpg"
            alt="food donating black white"
            className="rounded-md h-full"
            width={750}
            height={15}
          />
        </div>
        <div className="md:w-1/2 w-full md:mt-0 pt-5">
          <h2 className="lg:text-4xl xl:text-5xl md:text-2xl text-xl font-bold text-center text-darkGray xl:mb-16 lg:mb-10 md:mb-7 mb-4">
            Our Impact in Numbers
          </h2>
          <div className="flex justify-evenly items-center flex-col xl:gap-10 gap-8">
            <div
              ref={mealsRef}
              data-aos="fade-up"
              data-aos-duration="2200"
              className="bg-white shadow-lg rounded-lg xl:p-6 lg:p-5 p-2 text-center md:w-3/5 w-4/5 xl:h-[155px]"
            >
              <h3 className="text-primary xl:text-6xl lg:text-4xl text-2xl font-bold">
                {mealsInView && (
                  <CountUp
                    start={12000}
                    end={12500}
                    duration={6}
                    separator=","
                  />
                )}
                +
              </h3>
              <p className="text-darkGray mt-2 xl:text-2xl lg:text-lg md:text-base text-lg">
                Meals Donated
              </p>
            </div>
            <div
              ref={ngosRef}
              data-aos="fade-up"
              data-aos-duration="2200"
              className="bg-white shadow-lg rounded-lg xl:p-6 lg:p-5 p-2 text-center md:w-3/5 w-4/5 xl:h-[155px]"
            >
              <h3 className="text-primary xl:text-6xl lg:text-4xl text-2xl font-bold">
                {ngosInView && (
                  <CountUp start={200} end={300} duration={6} separator="," />
                )}
                +
              </h3>
              <p className="text-darkGray mt-2 xl:text-2xl lg:text-lg md:text-base text-lg">
                NGOs Empowered
              </p>
            </div>
            <div
              ref={livesRef}
              data-aos="fade-up"
              data-aos-duration="2200"
              className="bg-white shadow-lg rounded-lg xl:p-6 lg:p-5 p-2 text-center md:w-3/5 w-4/5 xl:h-[155px]"
            >
              <h3 className="text-primary xl:text-6xl lg:text-4xl text-2xl font-bold">
                {livesInView && (
                  <CountUp
                    start={49000}
                    end={50000}
                    duration={6}
                    separator=","
                  />
                )}
                +
              </h3>
              <p className="text-darkGray mt-2 xl:text-2xl lg:text-lg md:text-base text-lg">
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        data-aos="zoom-in"
        data-aos-duration="2200"
        className="bg-softGray py-16 w-full"
      >
        <div className="mx-auto px-5 w-11/12">
          <h2 className="text-4xl font-bold text-center text-darkGray mb-10">
            What People Say About Us
          </h2>
          <div className="relative w-full">
            <div className="carousel flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6">
              {/* Testimonial 1 */}
              <div className="snap-center flex-shrink-0 bg-white shadow-lg rounded-lg p-6 max-w-md">
                <p className="text-lg italic text-darkGray">
                  "Sahayata has made it so easy for us to donate leftover food.
                  Knowing it reaches those in need gives us immense
                  satisfaction."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div>
                    <h3 className="text-primary font-bold">Green Fork Diner</h3>
                    <p className="text-darkGray text-sm">Restaurant Owner</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="snap-center flex-shrink-0 bg-white shadow-lg rounded-lg p-6 max-w-md">
                <p className="text-lg italic text-darkGray">
                  "Thanks to Sahayata, we can serve more meals to people in need
                  without worrying about food shortages."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div>
                    <h3 className="text-primary font-bold">
                      Helping Hands NGO
                    </h3>
                    <p className="text-darkGray text-sm">NGO Representative</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="snap-center flex-shrink-0 bg-white shadow-lg rounded-lg p-6 max-w-md">
                <p className="text-lg italic text-darkGray">
                  &quot;Thanks to Sahayata, we can serve more meals to people in need
                  without worrying about food shortages.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div>
                    <h3 className="text-primary font-bold">
                      Helping Hands NGO
                    </h3>
                    <p className="text-darkGray text-sm">NGO Representative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
