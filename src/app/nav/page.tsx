"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (href: string) => {
        setIsMenuOpen(false);
        router.push(href); // Navigate to the desired page
    };

    return (
        <nav className="w-full flex flex-col sm:flex-row bg-sky-900 p-5 relative sm:items-center sm:justify-between z-50">
            {/* Logo */}
            <div
                className={`absolute sm:static left-5 sm:left-0 top-5 sm:top-0 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            >
                <Image
                    src="/images/logo.png"
                    width={70}
                    height={70}
                    alt="Tuition Free Education Program Logo"
                />
            </div>

            {/* Description */}
            <p className="text-sky-200 lg:text-xl px-5 md:px-32 sm:px-5 font-bold text-center sm:text-left">
                <span className="block md:hidden">Tuition Free Program</span>
                <span className="hidden md:block">
                    Tuition Free Education Program on Latest Technologies
                </span>
            </p>

            {/* Toggle Button */}
            <button
                onClick={toggleMenu}
                className="absolute right-5 top-5 sm:hidden flex flex-col items-center justify-center w-10 h-10"
            >
                <span
                    className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                        isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                    className={`block w-8 h-1 bg-white my-1 transition-opacity duration-300 ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                        isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
            </button>

            {/* Navigation Bar */}
            <ul
                className={`sm:flex sm:flex-row sm:justify-end w-full sm:w-auto sm:items-center space-y-5 sm:space-y-0 sm:space-x-5 text-white bg-sky-900 sm:bg-transparent absolute sm:static top-16 left-0 right-0 p-5 sm:p-0 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                {/* Navigation Links */}
                <li>
                    <button
                        onClick={() => closeMenu("/")}
                        className="hover:text-sky-300 text-left w-full sm:w-auto"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => closeMenu("/apply")}
                        className="hover:text-sky-300 text-left w-full sm:w-auto"
                    >
                        Apply
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => closeMenu("/jobs")}
                        className="hover:text-sky-300 text-left w-full sm:w-auto"
                    >
                        Jobs
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => closeMenu("/results")}
                        className="hover:text-sky-300 text-left w-full sm:w-auto"
                    >
                        Result
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => closeMenu("/courses")}
                        className="hover:text-sky-300 text-left w-full sm:w-auto"
                    >
                        Courses
                    </button>
                </li>
            </ul>
        </nav>
    );
}
