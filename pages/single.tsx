import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../layout/Layout";
import { Heading, Recent } from "../components/blog";

const Blog = (): ReactElement => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Succeso - A shopify Development Solution</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main data-testid="single-entry-point">
          <Heading />
          <Recent />
        </main>
      </Layout>
    </div>
  );
};

export default Blog;
