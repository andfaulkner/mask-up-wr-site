/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * Each export found in this file will be run by Gatsby.
 */

const path = require(`path`);

/**
 * Gatsby calls the createPages API (if present) at build time with injected
 * parameters, actions and graphql.
 */
exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    const blogPostTemplate = require.resolve(`./src/templates/test-template.js`);

    // Query the markdown file with graphql
    const result = await graphql(`
        {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    // Build a page for each markdown file found
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.slug,
            component: blogPostTemplate,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug
            }
        });
    });
};
