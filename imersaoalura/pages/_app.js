/* eslint-disable react/jsx-props-no-spreading */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "OriginalSurfer";
    src: url("/fonts/OriginalSurfer/OriginalSurfer.ttf");
  }
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/YuseiMagic-Regular.ttf");
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quizz Studio Ghibli</title>
        <link rel="shortcut icon" href="/images/favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content="https://imersao-alura-next-js.hugulima.vercel.app/"
        />
        <meta name="twitter:creator" content="@hugulim_" />
        <meta
          name="twitter:title"
          content="Você conhece as obras do Studio Ghibli?"
        />
        <meta
          name="twitter:description"
          content="A NextJS application implemented by Vercel, developed by Hugo Lima."
        />
        <meta
          name="twitter:image"
          content="https://i.imgur.com/92CcVFn.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
