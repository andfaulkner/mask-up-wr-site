import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WriteToCouncil = () => (
    <Layout>
        <SEO title="Write to your regional council" />
        <h1>Write to your regional council</h1>

        <ol>
            <li>
                Open your e-mail website of choice, and start a message to{' '}
                <a href="mailto:regionalcouncillors@regionofwaterloo.ca">
                    regionalcouncillors@regionofwaterloo.ca
                </a>{' '}
                with the subject "mask bylaw" or something similar.
            </li>
            <li>
                Be polite - councillors get a lot of messages. A little kindness goes a long way.
            </li>
            <li>Be concise - see above.</li>
            <li>Be yourself - there’s a reason we haven’t written a canned message for you.</li>
            <li>
                Tell your own story. How would everyone wearing masks in Waterloo Region help you
                feel safer, or help you get out more?
            </li>
        </ol>
    </Layout>
);

export default WriteToCouncil;
