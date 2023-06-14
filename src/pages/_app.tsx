import Layouts from "@/components/Layouts/Layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/swiperCard.css"
export default function App({ Component, pageProps }: AppProps | any) {
  return (
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
  );
}
