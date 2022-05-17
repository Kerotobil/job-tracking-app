import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { store, persistor } from '../store';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
