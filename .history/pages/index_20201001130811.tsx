import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../layout/Layout";
import { Quote, Blog, Interest, Tab, Portfolio } from "../components/home";

const Home = (): ReactElement => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Succeso - A shopify Development Solution</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main data-testid="entry-point">
          <Portfolio />
          <Interest />
          <Tab />
          <Blog />
          <Quote />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
