import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/vidiq-logo.svg"
          width={92}
          height={32}
          alt="VidiQ logo"
          className="max-sm:size-14 pt-2"
        />
        {/* <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          VidiQ
        </p> */}
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut></SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
