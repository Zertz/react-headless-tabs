import type { AppProps } from "next/app";
import "../tailwind.css";

export default function Tempocal({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
