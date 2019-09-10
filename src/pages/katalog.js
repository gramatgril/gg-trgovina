import React from "react";
import styled from "styled-components";

import Layout from "./../components/layout";
import SEO from "./../components/seo";
import { graphql } from "gatsby";

export default () => {
  return (
    <Layout>
      <SEO title="Katalog" />
      <Wrapper>
        <iframe
          title="pdfviewer"
          src="https://drive.google.com/file/d/1Jo4Kj_TsCEsPuEs6gy-hdWerWttHsvKV/preview"
        />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 960px;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
