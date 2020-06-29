import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Welcome</h1>
        <p>Do you already support a mandatory face-mask bylaw in Waterloo Region?</p>
        <p>
            Please skip to{' '}
            <Link to="/how-to-write-a-letter">How To Write A Letter To Your Regional Council</Link>
        </p>
        <p>Thank you for your support!</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            {/*<Image />*/}
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
);

export default IndexPage;
