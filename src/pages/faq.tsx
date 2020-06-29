import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const FAQ = () => (
    <Layout>
        <SEO title="FAQ" />
        <h1>FAQ</h1>


        <Link to="/faq">Next page: Write to regional council</Link>
    </Layout>
);

export default FAQ;
