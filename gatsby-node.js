const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      categories: allContentfulKategorija {
        edges {
          node {
            slug
            categoryId: contentful_id
          }
        }
      }

      products: allContentfulArtikel {
        edges {
          node {
            productSlug: slug
            productId: contentful_id
            category {
              slug
            }
          }
        }
      }

      advices: allContentfulNasvetiInIdeje {
        edges {
          node {
            slug
            adviceId: contentful_id
          }
        }
      }
    }
  `);

  data.categories.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve('./src/templates/single-category-template.js'),
      context: { id: node.categoryId }
    });
  });

  data.products.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.category.slug}/${node.productSlug}`,
      component: path.resolve('./src/templates/single-product-template.js'),
      context: { id: node.productId }
    });
  });

  data.advices.edges.forEach(({ node }) => {
    console.log(node);
    createPage({
      path: `/nasveti-in-ideje/${node.slug}`,
      component: path.resolve('./src/templates/single-advice-template.js'),
      context: { id: node.adviceId }
    });
  });
};
