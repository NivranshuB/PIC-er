import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Modifies the custom global theme of Chakra UI components */}
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain="dev-jrxgqz7w.us.auth0.com"
        clientId="ybpdksof6ZW3nMhJaLvkKPQGIEMewSK6"
        redirectUri={window.location.origin}
        >
        <App />
      </Auth0Provider>
    </ChakraProvider>

  </React.StrictMode>
);