import { siteConfig } from "@/config/SiteConfig";
import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {
  return (
    <section className="flex flex-col gap-4 p-4 bg-white md:flex-row md:items-center md:justify-between md:px-16 md:py-4">
      {/* Mobile: two rows, each with two columns */}
      <div className="flex flex-col gap-[15px] w-full md:hidden">
        {/* Mobile row 1: logo (left) + Facebook widget (right) */}
        <div className="flex items-center justify-between gap-[15px]">
          <Image
            src={siteConfig.logoImage}
            alt={siteConfig.logoAltText}
            className="h-[80px] w-auto shrink-0 object-left object-contain"
            height={200}
            width={370}
            unoptimized
          />
          <Link
            href="https://www.facebook.com/profile.php?id=61565243171665&sk=reviews"
            target="_blank"
            className="flex-1"
          >
            <div className="flex h-[60px] w-full items-center justify-center">
              <Image
                src="/icons/facebook-widget.jpg"
                alt="Facebook Reviews"
                width={180}
                height={60}
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Mobile row 2: Bark widget (left) + MyJobQuote widget (right) */}
        <div className="flex items-center justify-between gap-[15px]">
          <Link
            href="https://www.bark.com/en/uk/company/peakdale-roofing-and-building-ltd-RK01-0325672/"
            target="_blank"
            className="flex-1"
          >
            <div className="flex h-[60px] w-full items-center justify-center">
              <Image
                src="/icons/bark-widget.jpg"
                alt="Bark Reviews"
                width={180}
                height={60}
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
          <Link
            href="https://www.myjobquote.co.uk"
            target="_blank"
            className="flex-1"
          >
            <div className="flex h-[60px] w-full items-center justify-center">
              <Image
                src="/icons/myjobquote-widget.jpg"
                alt="MyJobQuote Reviews"
                width={180}
                height={60}
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Phone — desktop only */}
      <div className="hidden items-center gap-2 md:flex">
        <Image
          src="/images/headphone.svg"
          alt="Headphone"
          className="h-5 w-5 md:h-7.5 md:w-7.5"
          height={20}
          width={20}
        />
        <div className="flex flex-col">
          <span>Prefer to Talk? Call Us</span>
          <Link href={`tel:${siteConfig.phoneNumber}`} target="_blank">
            <span className="text-sm font-bold md:text-lg">
              {siteConfig.phoneNumber}
            </span>
          </Link>
        </div>
      </div>

      {/* Bark, Facebook and MyJobQuote review badges — desktop, with 10px gap */}
      <div className="flex items-stretch gap-[10px] w-full md:w-auto">
        {/* Bark review badge */}
        <Link
          href="https://www.bark.com/en/uk/company/peakdale-roofing-and-building-ltd-RK01-0325672/"
          target="_blank"
          className="hidden min-w-0 md:flex"
        >
          <div className="flex h-[60px] items-center justify-center w-[180px] border border-gray-300 shadow-md">
            <Image
              src="/icons/bark-widget.jpg"
              alt="Bark Reviews"
              width={180}
              height={60}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Facebook review badge */}
        <Link
          href="https://www.facebook.com/profile.php?id=61565243171665&sk=reviews"
          target="_blank"
          className="hidden min-w-0 md:flex"
        >
          <div className="flex h-[60px] items-center justify-center w-[180px] border border-gray-300 shadow-md">
            <Image
              src="/icons/facebook-widget.jpg"
              alt="Facebook Reviews"
              width={180}
              height={60}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* MyJobQuote review badge */}
        <Link
          href="https://www.myjobquote.co.uk"
          target="_blank"
          className="hidden min-w-0 md:flex"
        >
          <div className="flex h-[60px] items-center justify-center w-[180px] border border-gray-300 shadow-md">
            <Image
              src="/icons/myjobquote-widget.jpg"
              alt="MyJobQuote Reviews"
              width={180}
              height={60}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TopHeader;
