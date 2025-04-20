import Link from "next/link";

export default function Header() {
  return(
      <header className="absolute h-[80px] px-6 py-2 z-[1000] flex items-center justify-between w-full ">
        <h1 className="text-4xl font-bold ">SAWADA AIRI</h1>
        <nav className="">
        <ul className="flex text-2xl space-x-6">
          <li className="transition-colors duration-300 hover:text-black">
            <Link href="/">About</Link>
          </li>
          <li className="transition-colors duration-300 hover:text-black">
            <Link href="/project">Project</Link>
          </li>
          <li className="transition-colors duration-300 hover:text-black">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="transition-colors duration-300 hover:text-black">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        </nav>
      </header>
  )
}