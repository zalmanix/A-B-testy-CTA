"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#E0E0E0] shadow-md">
        <div className="flex items-center justify-between mx-auto container py-4">
          <Image
            src="/images/logoBig.svg"
            alt="FixIT Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <nav className="flex gap-6">
            <Link href="/" className="text-lg font-semibold hover:underline">
              Home
            </Link>
            <Link href="/blog" className="text-lg font-semibold hover:underline">
              Blog
            </Link>
            <Link href="/services" className="text-lg font-semibold hover:underline">
              Usługi
            </Link>
            <Link href="/faq" className="text-lg font-semibold hover:underline">
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <Image
        src="/images/banner.jpg"
        alt="Banner"
        width={1200}
        height={300}
        className="w-full h-auto object-cover container max-h-[400px]"
      />
    </>
  );
}
