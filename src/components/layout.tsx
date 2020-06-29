/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql, Link} from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: `center`,
                            borderTop: `1px gray solid`,
                            paddingTop: 2,
                            marginTop: 12,
                            fontSize: 14,
                        }}
                    >
                        <div style={{marginRight: 12, fontSize: 12}}>© {new Date().getFullYear()}</div>
                        <div style={{marginRight: 12}}>
                            <Link style={{fontSize: 14}} to="/">
                                Home
                            </Link>
                        </div>
                        <div style={{marginRight: 12}}>
                            <Link style={{fontSize: 14}} to="/faq">
                                FAQ
                            </Link>
                        </div>
                        <div style={{marginRight: 12}}>
                            <Link style={{fontSize: 14}} to="/write-to-council/">
                                Write to council
                            </Link>
                        </div>
                        <div>
                            <Link style={{fontSize: 14}} to="/who-are-we">
                                Who we are
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Layout;
