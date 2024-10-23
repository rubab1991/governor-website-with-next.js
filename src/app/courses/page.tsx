import Link from "next/link";
import Image from "next/image";
export default function Courses(){
    return(
        <div>
        

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
    )
}