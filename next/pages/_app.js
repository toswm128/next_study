import "../styles/globals.css";
import { Provider } from "mobx-react";
import Store from "../Store/Store";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [store, setStore] = useState(new Store());

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
