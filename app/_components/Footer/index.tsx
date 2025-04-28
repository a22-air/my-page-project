import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center h-[80px] px-6 py-2 items-center">
      <nav>
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
      <p className="mt-4 md:mt-0">&copy; 2025 Sawada Airi. All rights reserved.</p>
    </footer>
  )
}