import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      width={35}
      height={35}
      alt="Site Logo"
      className="invert"
    />
  );
}
