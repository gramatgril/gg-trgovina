import React from "react";
import styled from "styled-components";

import Layout from "./../styles/layout";
import SEO from "./../components/seo";

export default () => {
  return (
    <Layout>
      <SEO title="Katalog" />
      <Wrapper>
        {/* <iframe
          title="pdfviewer"
          // src="https://drive.google.com/file/d/1Jo4Kj_TsCEsPuEs6gy-hdWerWttHsvKV/preview"
          src="http://127.0.0.1:3001/Publications/O-AH06_PLUS/index.html?reload=1568643138752#page=1"
        /> */}
        <iframe
          title="pdfview"
          frameBorder="0"
          width="400"
          height="300"
          src="https://online.flowpaper.com/78000754-trial/OAH06PLUS832/"
          scrolling="no"
          marginWidth="0"
          marginHeight="0"
          allowFullScreen
        ></iframe>
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
