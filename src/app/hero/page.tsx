"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

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
            setCurrentIndex((prevIndex: number) =>
                prevIndex === slideShowImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [slideShowImages.length]);

    // Calculate second image index, wrapping around if necessary
    const secondIndex = (currentIndex + 1) % slideShowImages.length;

    return (
        <div className="flex flex-col flex-grow min-h-screen justify-between">
            <main className="relative flex-grow">
                {/* Background image */}
                <div className="absolute inset-0 z-0 ">
                    <Image
                        src="/images/bg_house.jpg"
                        fill
                        style={{ objectFit: "cover" }}
                        alt="background"
                        className="opacity-20"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-screen pt-16 px-10">
                    {/* Left side text */}
                    <div className="w-1/2">
                        <p className="font-extrabold text-sky-800 text-6xl">Governor Sindh</p>
                        <p className="text-sky-800 text-4xl">Kamran Khan Tessori</p>
                        <br />
                        <p className="text-sky-500 font-extrabold text-4xl">
                            Certified Cloud
                            <br />
                            Applied Generative AI
                            <br />
                            Engineer (GenEng)
                        </p>
                        <p className="text-sky-800 font-extrabold text-2xl">
                            Earn up to $5,000 / month
                            <br />
                            Now admissions are open in Hyderabad
                        </p>
                        <br />
                        <div className="flex items-center space-x-10">
                            <button className="bg-sky-800 text-white font-extrabold px-16 py-3 rounded-md">
                                APPLY NOW
                            </button>

                            <div>
                                <span className="text-4xl font-extrabold text-sky-800">562,143</span>
                                <p className="text-sky-800">Accepted Applications</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="w-2/3 flex justify-end items-start right-0">
                        <Image
                            src="/images/governor.png"
                            width={800}
                            height={800}
                            alt="governor"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="relative inset-0 z-0  bg-white">
                    <p className="text-3xl text-center font-extrabold text-sky-800 pt-20">
                        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
                        <br /> Developing Billion-Dollar Valued Developers and Solopreneurs
                    </p>

                    <p className="text-balance p-20 pt-10 text-xl">
                        {/* Content here */}
                    </p>
                </div>
<div className="relative inset-0 z-0  bg-white">
                {/* 3 images horizontally */}
                <div className="flex justify-center space-x-5">
                    <Image
                        src="/images/image1.png"
                        alt="image2"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-2xl shadow-black"
                    />
                    <Image
                        src="/images/image2.png"
                        alt="image1"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-2xl shadow-black"
                    />
                    <Image
                        src="/images/image3.png"
                        alt="image3"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-2xl shadow-black"
                    />
                </div>

                <br />

                {/* Slideshow of pictures showing two images at a time */}
                <div className="pt-10 flex justify-center space-x-5 p-10">
                    <div className="w-1/2">
                        <Image
                            src={slideShowImages[currentIndex]}
                            alt={`slideshow-${currentIndex}`}
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-black object-cover"
                        />
                    </div>

                    <div className="w-1/2">
                        <Image
                            src={slideShowImages[secondIndex]}
                            alt={`slideshow-${secondIndex}`}
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-black object-cover"
                        />
                    </div>
                </div>

                <br className="pt-5" />
                {/* Divider Line */}
                <div>
                    <hr className="border-gray-300" />
                    <p className="text-sky-800 text-4xl font-sans font-extrabold pt-10">Core Courses Sequence</p>
                </div>

                <div className="flex justify-center space-x-5 p-10 text-gray-600">
                    <Link href="/programming" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/images/programming_fundamentals.jpg"
                                alt="Programming Fundamentals"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-center">Programming Fundamentals</h2>
                        </div>
                    </Link>

                    <Link href="/web3" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/images/nextjs1.jpg"
                                alt="Web3"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-center">Web2 Using Next.JS</h2>
                        </div>
                    </Link>

                    <Link href="/earnaslearn" className="block max-w-xs border rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/images/earn_as_your_learn.jpg"
                                alt="Earn As You Learn"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-center">Earn As You Learn</h2>
                        </div>
                    </Link>
                </div>
                </div>
            </main>
        </div>
    )
}
