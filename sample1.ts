import {h, VElement} from '../../lib/dvdi';
import {BlogPost} from '../BlogPost';

function blogArticle_000001(): VElement[] {
    return [
        h('p', {},
            'I\'m excited to announced the founding of M6R.  For the last year I\'ve been increasingly optimistic ' +
            'about being able to build large and complex software solutions using AI.  Now it\'s time to make that a reality!'
        ),
        h('p', {},
            'Across the industry we\'ve seen a huge race to add AI capabilities to our software tools.  However, at M6R ' +
            'we\'re taking a different approach.  We believe the way forward is to embrace an ',
            h('b', {}, 'AI First'),
            ' approach.'
        ),
        h('section', {},
            h('h2', {}, 'AI First'),
            h('p', {},
                'What do we mean by AI First?  It means we imagine a future in which we have entirely new AI-powered ' +
                'tools that will make it far easier to turn ideas into high quality software.'
            ),
            h('p', {},
                'The software we produce only makes sense because we can power it with AI.'
            )
        ),
        h('section', {},
            h('h2', {}, 'Built with AI, imagined and designed by you'),
            h('p', {},
                'AI can do incredible things, but it has to have a reason to do them.  That reason ' +
                'is you!  Human curiosity and creativity far exceeds our current ability to turn those ideas into working ' +
                'software.'
            ),
            h('p', {},
                'All ideas start with a problem to be solved.  For us, that problem is "how do we turn ideas into ' +
                'software far more quickly and at a far lower cost than we could do conventionally?"  This is an ' +
                'ambitious goal, and we don\'t expect you to believe we can do this without some really compelling ' +
                'demonstrations.  Most of what you\'re seeing on this website is a demonstration though.  We\'ve used ' +
                'early versions of our tooling to build large parts of it.'
            )
        ),
        h('section', {},
            h('h2', {}, 'Metaphor: powering an AI First approach'),
            h('p', {},
                'The first capability we\'re bringing to you is a simple language called Metaphor (yes, that\'s ',
                h('b', {}, 'M'),
                ', ',
                h('b', {}, '6'),
                ' letters, ',
                h('b', {}, 'R'),
                ').  It exemplifies our AI First approach and allows you to describe problems and capture elements of a ' +
                'solution in a way that lets AI build the software.'
            ),
            h('p', {},
                'One important aspect of Metaphor is we\'re using it to improve itself.  Aside from the original prototype, ' +
                'each part of the Metaphor toolchain has been built this way.'
            ),
            h('p', {},
                'We\'ll be releasing an early version in a few days time and watch out for some demos of things we\'ve built ' +
                'this way.  We can\'t wait to see what you can build with it.'
            )
        )
    ];
}

export const blogPost_000001 = new BlogPost(
    'Founding M6R',
    'Dave Hudson',
    '2024-10-21',
    '/blog/000001-Founding-M6R',
    'An introduction to what we\'re going to be doing at M6R.',
    null,
    blogArticle_000001
);
