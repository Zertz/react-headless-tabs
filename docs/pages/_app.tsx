import type { AppProps } from "next/app";
import "../tailwind.css";

export default function ReactHeadlessTabs({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
