import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white flex justify-center pb-4">
      <nav className="">
          <ul className="flex text-2xl space-x-6 text-blue-600">
          <li><Link href="/">About</Link></li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
    </footer>
  )
}