import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-sky-900 p-7 relative flex items-center justify-between">
            {/* Logo */}
            <div className="absolute left-5 top-5">
                <Image
                    src="/images/logo.png"
                    width={80}
                    height={80}
                    alt="Tuition Free Education Program Logo"
                />
            </div>

            {/* Navigation Bar */}
            <ul className="flex justify-end items-center space-x-5 w-full text-white font-bold">
                {/* Description */}
                <li className="text-sky-200 text-xl px-5 md:px-32 w-full md:w-auto text-center">
                    Tuition Free Education Program on Latest Technologies
                </li>

                {/* Navigation Links */}
                <li>
                    <Link href="/" className="hover:text-sky-300">Home</Link>
                </li>
                <li>
                    <Link href="/apply" className="hover:text-sky-300">Apply</Link>
                </li>
                <li>
                    <Link href="/jobs" className="hover:text-sky-300">Jobs</Link>
                </li>
                <li>
                    <Link href="/results" className="hover:text-sky-300">Result</Link>
                </li>
                <li>
                    <Link href="/courses" className="hover:text-sky-300">Courses</Link>
                </li>
            </ul>
        </nav>
    );
}
