import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IntlProvider } from "react-intl";
import en from "./../lang/en.json"; //default language
import ContentNew from "./Content_new";
import ContentNewFunction from "./Content_new_function";
import Content from "./Content";

const App = () => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(en);

  const loadMessages = async (locale) => {
    return import("./../lang/"+locale+".json");
  }

  useEffect(() => {
    loadMessages(locale).then(setMessages);
  }, [locale]);

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={locale}>
      <div>
        <Header />
      <Content />
      <ContentNew />
      <ContentNewFunction />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
