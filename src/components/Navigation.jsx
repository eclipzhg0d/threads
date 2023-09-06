import React from "react";
import Logo from "./Logo";
import { GoHomeFill } from "react-icons/go";
import {
  LuSearch,
  LuExternalLink,
  LuHeart,
  LuAlignRight,
} from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="bg-[#101010] flex items-center justify-between pt-1 container sticky top-0 z-10">
      <Link href="/">
        <Logo />
      </Link>
      <div className="cursor-pointer">
        <ul className="flex items-center text-4xl text-[#4D4D4D]">
          <li className="py-4 px-6 hover:bg-[#1C1C1C] rounded-md transition duration-300">
            <Link href="/">
              <GoHomeFill />
            </Link>
          </li>
          <li className="py-4 px-6 hover:bg-[#1C1C1C] rounded-md transition duration-300">
            <Link href="/">
              <LuSearch />
            </Link>
          </li>
          <li className="py-4 px-6 hover:bg-[#1C1C1C] rounded-md transition duration-300">
            <Link href="/">
              <LuExternalLink />
            </Link>
          </li>
          <li className="py-4 px-6 hover:bg-[#1C1C1C] rounded-md transition duration-300">
            <Link href="/">
              <LuHeart />
            </Link>
          </li>
          <li className="py-4 px-6 hover:bg-[#1C1C1C] rounded-md transition duration-300">
            <Link href="/">
              <FiUser />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="py-4 px-6 hover:bg-[#1C1C1C] rounded-md transition duration-300 text-4xl text-[#4D4D4D]">
          <Link href="/">
            <LuAlignRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
