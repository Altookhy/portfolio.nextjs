import Link from "next/link";
import Particles from "./components/particles";



const navigation = [
  { name: "Progress", href: "/projects" },
  { name: "Contact", href: "/contact" },
  // { name: "Resume", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-full h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

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
        quantity={100} />

      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Tookhy
      </h1>

      <div className="w-[40rem] h-00 relative animate-fade-in">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-5 text-center animate-fade-in">
        <div className="max-w-xl  mx-auto pt-10 px-4 md:px-8 lg:px-10">

          <h2 className="z-10 text-center duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-xl md:text-4xl ">
            Osama ELtokhy
          </h2>
          <p className="text-center duration-1000 animate-fade-in text-neutral-700 dark:text-neutral-400 text-sm md:text-base max-w-m">
            {/* z-10 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-xl md:text-9xl */}
            A software engineer with an Energetic and driven personality. Aiming to cultivate new
            skills in Programming and Web Development. Always look for challenges as they push for
            improvement and add to the experience.

          </p>


          {/* Notice Card */}
          <div className="my-8 text-center animate-fade-in">
            <div className="my-8 text-center animate-fade-in">
              <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" className="w-full block h-full">
                  {/* <img alt="card image" src="/path/to/image.jpg" className="max-h-40 w-full object-cover"/> */}
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">
                      Notice
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                      Please be informed that this site is currently under development. <br />
                      Please contact me on my email: <br /><strong style={{ fontSize: '1.1em', color: 'cyan' }}>@osamaaltookhy@gmail.com</strong> <br />
                      Thank you and have a great day!
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}