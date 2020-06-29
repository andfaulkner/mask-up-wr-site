import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WhoAreWe = () => (
    <Layout>
        <SEO title="Who are we?" />
        <h1>Who are we?</h1>

        <p>
            We are concerned citizens of Waterloo Region who are in support of the draft bylaw to
            make mask-wearing mandatory in Waterloo Region’s public spaces and business
            establishments.{' '}
        </p>

        <div>
            <Link to="/write-to-council">Write to regional council</Link>
        </div>
    </Layout>
);

export default WhoAreWe;
