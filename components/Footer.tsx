"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 bg-[#E0E0E0] mt-10">
      <div className="container py-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/images/logoBig.svg"
            alt="FixIT Logo"
            width={500}
            height={500}
            className="w-28 h-28"
          />
          <p className="mt-4 text-sm">
            Oficjalnie licencjonowana firma FixIT specjalizująca się w
            serwisie i sprzedaży sprzętu komputerowego.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/services" className="text-lg font-semibold hover:underline">
            Usługi
          </Link>
          <Link href="/products" className="text-lg font-semibold hover:underline">
            Produkty
          </Link>
          <Link href="/faq" className="text-lg font-semibold hover:underline">
            FAQ
          </Link>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="">Nasze Sociale</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              {/* Facebook Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">
                <path d="M 9 4 C ..." />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {/* Instagram Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">
                <path d="M 16 3 C ..." />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              {/* YouTube Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">
                <path d="M 24.402344 9 C ..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm border-t pt-4">
        <a href="/imprint" className="hover:underline">
          Imprint
        </a>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/return-policy" className="hover:underline">
          Return Policy
        </a>
        <a href="/terms" className="hover:underline">
          General Terms and Conditions
        </a>
      </div>
    </footer>
  );
}
