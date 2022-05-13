import '../styles/global.scss';
import type { AppProps } from 'next/app'
import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../store';
import { Provider } from "react-redux";

const store = createStore(rootReducer);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
