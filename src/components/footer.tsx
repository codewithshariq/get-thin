import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <div className="grid grid-cols-2 lg:flex w-full gap-4 bg-white px-4 py-8 lg:p-8 items-center justify-between">
      <p className="font-semibold w-[8.125rem] lg:w-max text-xs text-primary">
        © 2024 Get Thin MD. All rights reserved
      </p>
      <div className="flex flex-col items-end font-semibold text-xs text-primary text-right lg:order-3 gap-0.5">
        <p>Excellent 4.7</p>
        <Image src={"/ratings.png"} alt="ratings" width={128} height={24} />
        <p>
          +10.000 <span className="font-light">happy customers</span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 text-xs text-primary font-normal col-span-2 text-center">
        <Link href="#">Customer Support Centre</Link>
        <Link href="#">Privacy Policy</Link>
        <a href="tel:+18885052996">
          Call us: <span className="block sm:inline w-max">(888) 505-2996</span>
        </a>
        <Link href="#">Terms of Service</Link>
      </div>
    </div>
  );
}
