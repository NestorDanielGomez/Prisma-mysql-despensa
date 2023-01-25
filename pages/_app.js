import { DespensaProvider } from "context/DespensaProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DespensaProvider>
      <Component {...pageProps} />
    </DespensaProvider>
  );
}
