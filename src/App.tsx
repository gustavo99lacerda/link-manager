import './App.css'
import ErrorBoundary from './ErrorBoundary'
import Theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {

  return (
    <ErrorBoundary>
      <Theme>
        {/* <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            </PersistGate>
          </Provider> */}
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Theme>
    </ErrorBoundary>
  );
}

export default App
