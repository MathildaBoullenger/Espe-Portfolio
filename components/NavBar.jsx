import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/"
          className="px-4 py-4 font-poppins font-bold text-md tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 no-underline"
          >Home</Link>
        </li>
        <li className="ml-auto">
          <Link href="/projects"
          className="px-4 py-4 font-poppins font-bold text-md tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-intellectual-grey hover:text-light-grey hover:scale-105 active:scale-100  tablet:first:ml-0  cursor-none undefined link no-underline"
          >Projects</Link>
        </li>
        <li>
          <Link href="/about"
          className="px-4 py-4 font-poppins font-bold text-md tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-intellectual-grey hover:text-light-grey hover:scale-105 active:scale-100  tablet:first:ml-0  cursor-none undefined link no-underline"
          >About</Link>
        </li>
      </ul>
    </nav>
  );
}
