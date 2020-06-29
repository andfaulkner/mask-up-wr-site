import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const FAQ = () => (
    <Layout>
        <SEO title="FAQ" />
        <h1>FAQ</h1>
        <h3>Why make masks mandatory?</h3>
        <p style={{marginBottom: 12}}>There are many great reasons; here are some of them:</p>
        <ol>
            <li>
                <b>We’re all in this together.</b> Like herd immunity, mask wearing works at the
                group level, not the individual level. Basically, pretty much everyone has to do it
                for us to get the best effects.
            </li>
            <li>
                <a href="https://www.nytimes.com/2011/08/21/magazine/do-you-suffer-from-decision-fatigue.html">
                    <b>Decision fatigue</b>
                </a>{' '}
                and the cognitive stress of the pandemic. Having to stay abreast of the latest news,
                the policies at your favourite shops, and plug it all into a personal matrix of risk
                is stressful and exhausting. If we decide as a community to make masking mandatory,
                we can just check that off the “creating the new normal” checklist and get on with
                life.
            </li>
            <li>
                <b>To respect workers.</b> Working indoors poses a lot of risks. Mandatory masking
                means we are not leaving the risk workers are exposed to to the whims of employers,
                customers, or clients. We’ve decided as a community that their lives are valuable
                and their risks deserve our utmost care and respect.
            </li>
            <li>
                <b>To prevent workplace disputes.</b> Mandatory masking puts responsibility where it
                should be: in the community and the government. Workers will not have to explain
                personal store policy, as one rule will cover the entire community.{' '}
            </li>
            <li>
                <b>To protect vulnerable people.</b> Not everyone’s health issues are visible. No
                one should have to explain that they have an immune disease to protect themselves
                while buying milk. And it’s not like we can tell by looking at people if their
                mother has cancer or they work in an old age home.{' '}
                <b>People are connected to people</b> whose lives are more at risk from this
                pandemic - these people should have the ability to safely participate in reopening.
            </li>
        </ol>

        <h3>How do we do this?</h3>
        <p>
            Regional Council has the authority to impose a blanket rule on all workplaces and public
            spaces. A mandate from the Region of Waterloo would take the ambiguity and conflict out
            of wearing a mask.
        </p>

        <h3>What counts as a mask?</h3>
        <p>
            Any kind of face covering is good! It can be a fashionable scarf, a functional bandana,
            or one of the many kinds of cloth masks for sale. You can even make your own masks out
            of that old, ripped pair of PJs you don’t wear anymore (although you’ll want to make
            lots of layers if the fabric is thin).
        </p>
        <h3>What can I do if I can’t breathe or if masks make me panicky?</h3>
        <p>
            Experiment with different kinds of masks to see which ones are the most comfortable.
            Some people find a bandana or veil-style makes breathing easier because of the open
            bottom. A lot of disposable masks are made with folds that allow them to be quite far
            from the mouth, which may be more comfortable. Headstraps vs earstraps can also make a
            difference to comfort.
        </p>
        <p>
            If your lung capacity is normal, you will easily get enough oxygen through even a
            thicker cloth mask. It may be uncomfortable, but it won’t be dangerous.
        </p>
        <p>
            If masks make you panicky, know that many of us can sympathize. Some of us know from
            experience the feeling of being forced to wear a mask with a collapsed lung, and the
            panic that experience lent to the thought of mandatory masking. Easing into it by
            practicing for short periods helped a lot, as well as trying different kinds of masks.
            And take it from someone who knows: it’s worth doing whatever you have to do to avoid a
            collapsed lung!
        </p>
        <p>
            <b>
                If you have reduced lung capacity from a lung infection, public health guidelines
                say you should not be in public places right now. Masks for everyone else will help
                us make public places safer for you, sooner.
            </b>
        </p>
        <p>
            <b>
                If your condition is not from infection, consult a medical professional about the
                right prevention method for you. If their answer is that you can't wear a mask at
                all, mandatory masks on everyone else will still help keep you safer.
            </b>
        </p>
        <Link to="/write-to-council">Next page: Write to regional council</Link>
    </Layout>
);

export default FAQ;
