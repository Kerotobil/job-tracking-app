import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { store, persistor } from '../store';
import { Provider } from 'react-redux';
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
