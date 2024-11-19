"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow images array
  const slideShowImages = [
    "/images/slideShow1.jpg",
    "/images/slideShow2.jpg",
    "/images/slideShow3.jpg",
    "/images/slideShow5.jpg",
    "/images/slideShow6.jpg",
    "/images/slideShow7.jpg",
  ];

  // Change images every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideShowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [slideShowImages.length]);

  // Calculate second image index, wrapping around if necessary
  const secondIndex = (currentIndex + 1) % slideShowImages.length;

  return (
    <div className="sm:flex flex-col flex-grow min-h-screen bg-gray-100 w-full sm:justify-between">
      <main className="w-full relative flex-grow">
        {/* Background wrapper for the main content */}
        <div className="main-content-bg relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bg_house.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="background"
              className="opacity-20"
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col sm:flex-row z-10 bg-gray-100 whitespace-normal min-h-screen pt-16 px-5 sm:px-10">
            {/* Left side text */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left space-y-5">
              <h1 className="font-extrabold text-sky-800 text-2xl md:text-6xl">
                Governor Sindh
              </h1>
              <p className="text-sky-800 text-2xl md:text-4xl">
                Kamran Khan Tessori
              </p>
              <p className="text-sky-500 font-extrabold text-2xl md:text-4xl">
                Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
              </p>
              <p className="text-sky-800 font-extrabold p-1 sm:text-2xl">
                Earn up to $5,000 / month <br />
                Now admissions are open in Hyderabad
              </p>
              <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-5 md:space-y-0">
              <Link href="/apply">
  <a className="bg-sky-800 text-white font-extrabold px-8 py-3 rounded-md hover:bg-sky-700 transition-all">
    APPLY NOW
  </a>
</Link>
                <div>
                  <span className="sm:text-4xl text-2xl font-extrabold text-sky-800">
                    562,143
                  </span>
                  <p className="text-sky-800">Accepted Applications</p>
                </div>
              </div>
            </div>

            {/* Right side image */}
            <div className="w-full sm:w-1/2 flex justify-center items-center mt-10 sm:mt-0">
              <Image
                src="/images/governor.png"
                width={400}
                height={400}
                alt="governor"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="bg-white py-10 px-5 sm:px-10">
          <p className="text-xl sm:text-3xl text-center font-extrabold text-sky-800">
            Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
            <br />
            Developing Billion-Dollar Valued Developers and Solopreneurs
          </p>
          <p className="text-sm sm:text-xl text-gray-600 text-justify mt-5">
            The pace of technological change is accelerating. Big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained in
            this program will win by automating work typically outsourced to
            employees, directly connecting to customers by eliminating the
            middleman, and developing vertical metaverses, paving the way for
            billion-dollar solopreneur businesses.
          </p>

          {/* Three Images in a Row */}
          <div className="flex flex-wrap flex-grow justify-center gap-5 pt-10">
            {["/images/image1.png", "/images/image2.png", "/images/image3.png"].map(
              (src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`image${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl shadow-black"
                />
              )
            )}
          </div>

          {/* Slideshow */}
          <div className="pt-10 flex flex-col flex-wrap md:flex-row justify-center items-center gap-5">
            <Image
              src={slideShowImages[currentIndex]}
              alt={`slideshow-${currentIndex}`}
              width={400}
              height={400}
              className="rounded-lg shadow-2xl shadow-black object-cover"
            />
            <Image
              src={slideShowImages[secondIndex]}
              alt={`slideshow-${secondIndex}`}
              width={400}
              height={400}
              className="rounded-lg shadow-2xl shadow-black object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
