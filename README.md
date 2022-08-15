# Internationalization and localization
Internationalization is the process of designing a product — in this case, a React app — to be used within different locales. It is often abbreviated as Intl or i18n.

In contrast, localization, abbreviated l10n, focuses on translating an internationalized app from its original language to a specific language.

## `Setting up the React Intl library`
```
npm install react-intl
```
This library gives us all the APIs and components needed to implement internationalization into our app.

We need to wrap the top-level app or the root component of our app in a provider component from the library; in this case, we’ll use <IntlProvider>

## `IntlProvider Component`
For internationalization projects using the React Intl library, the FormattedMessage component is often used, allowing users to translate and format simple to complex strings and messages.

For more details, check:
[https://formatjs.io/docs/react-intl/components/#intlprovider](https://formatjs.io/docs/react-intl/components/#intlprovider)

## `Translations`
Create a lang folder under src and create respective json for supported language codes like en.json for english, ja.json for japanese etc.
We need to load messages based upon browser language and then pass it to IntlProvider as shown in below script.

```
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
        <Footer />
      </div>
    </IntlProvider>
  );
};
```

Children component will pick translated messages based upon keys defined in these jsons.

```
      <p>
        <FormattedMessage id="click_count" values={{ count: count }} />
      </p>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
