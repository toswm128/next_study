import "../styles/globals.css";
import { Provider } from "mobx-react";
import Store from "../Store/Store";

function MyApp({ Component, pageProps }) {
  const store = new Store();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
