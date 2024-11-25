import Image from "next/image";
import React from "react";

export function Header() {
  return (
    <div className="flex w-full justify-center items-center mt-10">
      <div className="relative w-[5.625rem] h-10 lg:w-[10.9375rem] lg:h-20">
        <Image src={"/get-thin-logo.png"} alt="logo" fill />
      </div>
    </div>
  );
}
