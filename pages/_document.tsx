import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

interface ICtx {
  styles: JSX.Element;
  html: string;
  head?: (JSX.Element | null)[] | undefined;
}
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any): Promise<ICtx> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: React.FC) => (props: any) =>
            sheet.collectStyles(
              <>
                <ThemeProvider theme={theme}>
                  <App {...props} />
                </ThemeProvider>
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
            integrity='sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=='
            crossOrigin='anonymous'
          />
        </Head>
        <meta name="description" content="A shopify development agency"/>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <body>
          <Main />
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
