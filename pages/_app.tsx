import '../styles/global.scss';
import type { AppProps } from 'next/app'
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from '../store';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
