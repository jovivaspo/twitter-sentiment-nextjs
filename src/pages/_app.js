import "@/styles/globals.css";
import { GeneralProvider } from "@/context/GeneralContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GeneralProvider>
        <Component {...pageProps}></Component>
      </GeneralProvider>
    </>
  );
}
