import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Welcome</h1>
        <p style={{marginBottom: `0px`}}>Do you already support a mandatory face-mask bylaw in Waterloo Region?</p>
        <p>
            Please skip to{' '}
            <Link to="/write-to-council">How To Write A Letter To Regional Council</Link>.
        </p>
        <p>Thank you for your support!</p>

        <h3 style={{marginBottom: 12}}>More info</h3>
        {/*<div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}><Image /></div>*/}

        <ol>
            <li>
                <Link to="/why-a-mask/">Why a mask?</Link>
            </li>
            <li>
                <Link to="/faq/">FAQ</Link>
            </li>
            <li>
                <Link to="/write-to-council/">Write to regional council</Link>
            </li>
            <li>
                <Link to="/who-are-we/">Who are we?</Link>
            </li>
        </ol>
    </Layout>
);

export default IndexPage;
