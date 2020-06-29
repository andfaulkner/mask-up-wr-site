import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WhyAMask = () => (
    <Layout>
        <SEO title="Why a mask?" />
        <h1>Why a mask?</h1>

        <p>
            Remember those first days of lockdown, when it felt like things were changing daily,
            sometimes hourly?{' '}
        </p>

        <p>If you’ve doubted the value of masks, you’re certainly not alone.</p>

        <p>
            At the beginning, we weren’t sure if masks could help. And if they did, what kind of
            masks? The pandemic has swept across the world in a matter of just a few months, and the
            pace of new information has been rather mind-boggling. Lots of people were left
            wondering how effective non-medical masks could really be.
        </p>

        <p>
            And let’s be honest: we’d all rather this was over and we didn’t have to think about
            masks at all!
        </p>

        <p>
            If you’ve had concerns about the effectiveness of masking, you’re not alone - but the
            good news is that we now have enough data to definitively say that masks can make a
            difference.{' '}
        </p>

        <p>
            Quite a big difference: Contact tracing studies coming out of the US are showing that
            large, outdoor public gatherings where most people wear masks do not create new
            outbreaks.{' '}
        </p>

        <p>
            Things that <b>are</b> associated with outbreaks?{' '}
            <a href="https://www.npr.org/sections/coronavirus-live-updates/2020/06/24/883017035/what-contact-tracing-may-tell-about-cluster-spread-of-the-coronavirus">
                Working or socializing with people without masks
            </a>
            .
        </p>

        <p>
            <b>This is why we should mandate masks in Waterloo Region.</b>
        </p>

        <p>
            We’re asking people to go back to work, and many of us are going back to work ourselves.
            We need to protect working people, and not force them to manage the public’s compliance
            with suggested masking guidelines or their employer’s own individual policies.
        </p>

        <p>
            A mask-wearing bylaw is a simple, easy to follow guideline; if you want to go inside a
            business, you have to wear a mask. No figuring out if the places we’re going today do or
            don’t require masks. Once we adopt mandatory masking, we show respect and care to the
            working people who we interact with, but it also takes us a big step closer to “normal.”
            Masks might be new, but after a while they won’t be something we have to think about.{' '}
        </p>

        <p>
            Masks will take a load of stress off while also giving us the best shot at having{' '}
            <b>festivals</b> and <b>haircuts</b> and <b>schools</b> and{' '}
            <b>all that other good stuff we miss.</b>
        </p>

        <p>Here's some good news: it hardly matters what kind of mask you wear.</p>

        <p>
            It all comes down to{' '}
            <a href="https://www.youtube.com/watch?v=eySDeBdqxGY">"speaking moistly"</a>, as our
            prime minister so charmingly put it. The virus doesn’t do well on its own, so it travels
            in water. When we stop the moisture in our breath from going into the air, it stops the
            virus from spreading.
        </p>

        <p>
            There’s more good news. We’ve heard that masks{' '}
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">
                protect other people
            </a>
            , but not the wearer. However, for brief moments where physical distance is shorter than
            ideal, such as passing someone in a grocery store, a mask <b>does</b> actually have some
            protective effect. According to{' '}
            <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)31142-9/fulltext">
                a study published in the Lancet
            </a>
            , wearing a mask may drop your risk from 17% down to 3% - if video is more your thing,
            here’s{' '}
            <a href="https://www.youtube.com/watch?v=2vT9BV8-0TA">
                medical educator Dr John Cambel discussing the study
            </a>
            .
        </p>

        <p>
            <div style={{paddingBottom: 8}}>
                <h4>Masks:</h4>
            </div>
            <ul>
                <li>Are fashionable</li>
                <li>Show you care about your neighbours</li>
                <li>Stop you from spraying your face juice all over the place</li>
            </ul>
        </p>

        <div style={{marginBottom: 10}}>
            <Link to="/faq">Next page: FAQ</Link>
        </div>
    </Layout>
);

export default WhyAMask;
