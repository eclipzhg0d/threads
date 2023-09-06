"use client";

import NextTopLoader from "nextjs-toploader";

export default function Providers({ children }) {
  return <NextTopLoader>{children}</NextTopLoader>;
}
