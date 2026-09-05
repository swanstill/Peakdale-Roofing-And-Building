import { siteConfig } from "@/config/SiteConfig";
import Image from "next/image";

const TopHeader = () => {
  return (
    <header className="w-full bg-black text-white py-2 md:py-3 px-4 md:px-16">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Phone link */}
        <a
          href={`tel:${siteConfig.phoneNumber}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/headphone.svg"
            alt="Headphone"
            className="h-5 w-5 md:h-6 md:w-6"
            height={24}
            width={24}
          />
          <div className="flex flex-col">
            <span className="text-xs md:text-sm">Call Us</span>
            <span className="text-sm md:text-base font-bold">
              {siteConfig.phoneNumber}
            </span>
          </div>
        </a>

        {/* Google Reviews badge */}
        <a
          href="https://share.google/eewd9ZEPoBsN6jB3G"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/icons/google-widget.jpg"
            alt="Google Reviews"
            width={120}
            height={30}
            className="h-6 md:h-8 w-auto object-contain"
          />
        </a>
      </div>
    </header>
  );
};

export default TopHeader;
