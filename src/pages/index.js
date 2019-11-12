import React from 'react';

import { AdviceList } from '../components/Advice/';
import { PromotedProducts, NewProducts } from './../components/Product';
import Category from './../components/Category';
import Layout from '../styles/layout';
import PresentationGramat from '../components/Presentation/';
import SEO from '../components/seo';
import Services from '../components/Services';

export default () => (
  <Layout>
    <SEO title="Gramat Gril" />
    <Category />
    <PresentationGramat />
    <AdviceList embed={true} />
    <Services />
    <PromotedProducts />
    <NewProducts />
  </Layout>
);
