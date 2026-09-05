import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/SiteConfig";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar - 92px height, full width, white background */}
      <div className="bg-white text-gray-900 h-[92px] px-4 md:px-16 border-b border-gray-200 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Peakdale Roofing And Building Home">
            <Image
              src={siteConfig.logoImage}
              alt={siteConfig.logoAltText}
              className="h-10 w-auto md:h-12"
              height={48}
              width={192}
            />
          </Link>

          {/* Right side - Phone and Google Reviews */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Phone link */}
            <a
              href={`tel:${siteConfig.phoneNumber}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity hidden md:flex"
            >
              <Image
                src="/images/headphone.svg"
                alt="Phone"
                className="h-5 w-5"
                height={20}
                width={20}
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Call Us</span>
                <span className="text-sm font-bold text-gray-900">{siteConfig.phoneNumber}</span>
              </div>
            </a>

            {/* Mobile phone only */}
            <a
              href={`tel:${siteConfig.phoneNumber}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity md:hidden"
            >
              <Image
                src="/images/headphone.svg"
                alt="Phone"
                className="h-5 w-5"
                height={20}
                width={20}
              />
              <span className="text-sm font-bold text-gray-900">{siteConfig.phoneNumber}</span>
            </a>

            {/* Google Reviews badge */}
            <a
              href="https://share.google/eewd9ZEPoBsN6jB3G"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons/google-widget.png"
                alt="Google Reviews"
                className="h-[60px] w-[180px] object-contain"
                height={60}
                width={180}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Trust Badges Row - 60px height, full width, black background */}
      <div className="bg-black text-white h-[60px] px-4 md:px-16 flex items-center">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 w-full text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/established-icon.png"
              alt="Experience"
              className="h-5 w-5"
              height={20}
              width={20}
            />
            <span>{siteConfig.foundedYear}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/insured.png"
              alt="Guarantee"
              className="h-5 w-5"
              height={20}
              width={20}
            />
            <span>{siteConfig.guaranteeYears}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/checkatrade-widget.png"
              alt="Accredited"
              className="h-5 w-5"
              height={20}
              width={20}
            />
            <span>{siteConfig.insurredInfo}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-green-400"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Emergency 24/7</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;