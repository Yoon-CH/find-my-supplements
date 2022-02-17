import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="빅데이터 기반의 영양제 및 의약품 분석 서비스"
          />
          <meta
            name="keywords"
            content="영양제,비타민,홍삼,멀티비타민,비타민D,비타민C,키즈비타민,오메가3,루테인,유산균"
          />
          <meta name="og:title" content="나의 영양제 찾기" />
          <meta
            name="og:description"
            content="빅데이터 기반의 영양제 및 의약품 분석 서비스"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
