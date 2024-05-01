import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
// import { Card } from './components/card';


const navigation = [
  // { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Tookhy
      </h1>
      <div className="my-8 text-center animate-fade-in">
        <div className="my-8 text-center animate-fade-in">
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" className="w-full block h-full">
              {/* <img alt="card image" src="/path/to/image.jpg" className="max-h-40 w-full object-cover"/> */}
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-indigo-500 text-md font-medium">
                  Notice
                </p>
                {/* <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Notice
                </p> */}
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  Please be informed that this site is currently unavailable and under development. Please contact me on my email address @osamaaltookhy@gmail.com.
                  Thank you and have a great day!
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
      </div>
    </div>
  );
}