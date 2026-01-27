import './App.css'
import ErrorBoundary from './ErrorBoundary'
import Theme from './theme';
import pt from 'date-fns/locale/pt';
import es from 'date-fns/locale/es';
import enGB from 'date-fns/locale/en-GB';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { CustomSnackbar } from './components/CustomSnackbar/customSnackbar';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const languageDefault = navigator.language
  document.documentElement.lang = languageDefault;

  const returnLocale = () => {
    switch (languageDefault) {
      case 'pt-BR':
        return pt
      case 'es':
        return es
      case 'en-GB':
        return enGB
      default:
        return pt
    }
  }
  return (
    <ErrorBoundary>
      <Theme>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CHAVE_GOOGLE_AUTH!}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={returnLocale()}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                  <CustomSnackbar />
                  <Routes />
                </BrowserRouter>
              </PersistGate>
            </Provider>
          </MuiPickersUtilsProvider>
        </GoogleOAuthProvider>
      </Theme>
    </ErrorBoundary>
  );
}

export default App
