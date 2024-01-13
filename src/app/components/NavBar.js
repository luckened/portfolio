import { ToggleThemeButton } from "./ToggleThemeButton";
import Link from "next/link";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => (
  <nav className="z-50 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    <ul className="flex w-full justify-end space-between">
      <Link href="/">
        <NavBarItem>home</NavBarItem>
      </Link>
      <Link href="/contact">
        <NavBarItem>contact</NavBarItem>
      </Link>
      <li className="mx-2 p-1.5">
        <ToggleThemeButton />
      </li>
    </ul>
  </nav>
);
