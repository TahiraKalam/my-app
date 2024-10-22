import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" bg-gray-800 text-white p-4">
      <Link href="./" className="font-bold hover:text-gray-300 p-2">
        Home
      </Link>
      <Link href="./about" className="font-bold hover:text-gray-300 p-2">
        About
      </Link>
      <Link href="./contact" className="font-bold hover:text-gray-300 p-2">
        Contact
      </Link>
      <Link href="./faq" className="font-bold hover:text-gray-300 p-2">
        FAQ
      </Link>
      <Link href="./news" className="font-bold hover:text-gray-300 p-2">
        News
      </Link>
      <Link href="./programs" className="font-bold hover:text-gray-300 p-2">
        Programs
      </Link>
      <Link href="./programs/academic" className="font-bold hover:text-gray-300 p-2">
        Academics
      </Link>
      <Link href="./programs/professional" className="font-bold hover:text-gray-300 p-2">
        Professional
      </Link>
      <Link href="./programs/vocational" className="font-bold hover:text-gray-300 p-2">
        Vocational
      </Link>
    </nav>
  );
}