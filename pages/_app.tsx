import { Provider as NextAuthProvider } from 'next-auth/client';
import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
import { theme } from 'lib/theme/index';

// if (IS_PRODUCTION) {
//   Sentry.init({
//     dsn: SENTRY_DSN,
//     integrations: [new Integrations.BrowserTracing()],
//     enabled: IS_PRODUCTION,
//     tracesSampleRate: 1.0,
//   });
// }

export default function BoilerplateApp(props: AppProps<any>) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <NextAuthProvider session={pageProps.session}>
          <Component {...pageProps} />
        </NextAuthProvider>
      </ChakraProvider>
    </>
  );
}
