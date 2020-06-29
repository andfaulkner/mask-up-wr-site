module.exports = {
    siteMetadata: {
        title: `Mask-Up Waterloo`,
        description: `Write letter to your regional council to support a mandatory face mask bylaw in the Waterloo region. Help fight COVID-19!`,
        author: `Andrew Faulkner`
    },
    plugins: [
        // Server-side rendering plugin
        `gatsby-plugin-react-helmet`,

        // Read hard drive plugin
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },

        // Markdown Handling
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`
            }
        },
        `gatsby-transformer-remark`,

        // Base plugins
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
