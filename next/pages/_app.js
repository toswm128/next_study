import "../styles/globals.css";
import { Provider } from "mobx-react";
import Store from "../Store/Store";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  //페이지 이동시 store 초기화를 막기위함
  // 처음 생성될때만 새로 생성 함
  const [store, setStore] = useState(new Store());

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
