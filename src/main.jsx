import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';


import translationEn from './languages/en.json';
import translationEs from './languages/es.json';

i18n.init({
  resources: {
    en: {
      translation: translationEn,
    },
    es: {
      translation: translationEs,
    },
  },
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
