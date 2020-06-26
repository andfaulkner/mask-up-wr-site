import React from 'react';
import {graphql} from 'gatsby';

/**
 * @prop {{markdownRemark: {frontmatter: object, html: string}}} data Will be injected by GraphQL query below.
 */
export default function Template({data}) {
    // data.markdownRemark holds post data
    const {markdownRemark} = data;
    const {frontmatter, html} = markdownRemark;

    // Export the actual jsx template
    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div className="blog-post-content" dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </div>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`;
