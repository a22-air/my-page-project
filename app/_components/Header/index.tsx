import Link from "next/link";

export default function Header() {
  return(
      <header className="absolute p-[16px_24px_8px] z-[1000] flex items-center justify-between w-full bg-white bg-opacity-60 shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">SAWADA AIRI</h1>
        <nav className="">
          <ul className="flex text-2xl space-x-6 text-blue-600">
            <li><Link href="/">About</Link></li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
  )
}