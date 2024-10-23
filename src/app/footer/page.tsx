import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the email icon from the correct package

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-20 flex flex-row justify-between">
      <div>
        <p className="text-xl text-gray-800 font-bold">Core Courses</p>
        <ul className="space-y-2">
          <li>
            <Link
              href="/programming"
              className="text-gray-600 hover:text-gray-900"
            >
              Programming Fundamentals
            </Link>
          </li>
          <li>
            <Link href="/web3" className="text-gray-600 hover:text-gray-900">
              Web2 Using NextJS
            </Link>
          </li>
          <li>
            <Link
              href="/earnaslearn"
              className="text-gray-600 hover:text-gray-900"
            >
              Earn as You Learn
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <ul className="space-y-2">
          <li className="text-xl text-gray-800 font-bold">Advanced Courses</li>
          <li>
            <Link
              href="/programming"
              className="text-gray-600 hover:text-gray-900"
            >
              Web 3 and Metaverse
            </Link>
          </li>
          <li>
            <Link
              href="/programming"
              className="text-gray-600 hover:text-gray-900"
            >
              Cloud-Native Computing
            </Link>
          </li>
          <li>
            <Link
              href="/programming"
              className="text-gray-600 hover:text-gray-900"
            >
              Artificial Intelligence (AI) and Deep Learning
            </Link>
          </li>
          <li>
            <Link
              href="/programming"
              className="text-gray-600 hover:text-gray-900"
            >
              Ambient Computing and IoT
            </Link>
          </li>
          <li>
            <Link
              href="/programming"
              className="text-gray-600 hover:text-gray-900"
            >
              Genomics and Bioinformatics
            </Link>
          </li>
          <li>
            <Link
              href="/programming"
              className="text-gray-600 hover:text-gray-900"
            >
              Network Programmability and Automation
            </Link>
          </li>
        </ul>
      </div>

      <div>
        {/* Social Media Icons */}
        <div>
          <p className="text-xl font-bold text-gray-800 hover:text-gray-950">Social Links</p>
          <ul className="flex justify-center flex-row pt-2 space-x-4">
            <li>
              <Link href="https://www.facebook.com/TeamKTessori/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-900 w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-sky-600 hover:text-sky-900 w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@KamranTessorikk" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 hover:text-red-900 w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link href="https://www.governorsindh.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 hover:text-blue-900 w-8 h-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
