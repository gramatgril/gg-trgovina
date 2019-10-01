import React from "react";

import Layout from "../styles/layout";
import NotFound from "../components/NotFound/NotFound";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="Stran ni najdena" />
    <NotFound />
  </Layout>
);
