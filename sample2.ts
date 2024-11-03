import {h, VElement} from '../../lib/dvdi';
import {BlogPost} from '../BlogPost';

function blogArticle_000002(): VElement[] {
    return [
        h('p', {},
            'For a few months Dave has been looking at what Generative AI could do.  He believed that he could build ' +
            'software from scratch without having to write the code himself.  He had built a prototype of a new language ' +
            'and a prompt generator that could take detailed requirements and turn them into working software.'
        ),
        h('p', {},
            'I was sceptical, so I asked him to prove it.'
        ),
        h('section', {},
            h('h2', {}, 'Posing a problem'),
            h('p', {},
                'I asked Dave to create a program for me that could turn a photograph into a Lego-style mosaic.  I ' +
                'didn\'t just want a picture, I wanted to be able to build the picture using base plates and bricks.  The ' +
                'first working prototype of a mosaic picture was generated in less than 90 mins.  It took a couple of hours ' +
                'of refining things to get to what you see below.'
            ),
            h('p', {},
                'Once I had sourced the bricks and base plates, I created a colour palate for the bricks I had and updated ' +
                'the colours in the JSON config file.'
            ),
            h('p', {},
                'The results were amazing!'
            )
        ),
        h('section', {},
            h('h2', {}, 'The results'),
            h('p', {},
                'Here\'s the original photo and the computer-generated sketch of what the mosaic would look like - it\'s ' +
                'worth standing back from the screen a little to see the full effect:'
            ),
            h('div', {className: 'figure-pair'},
                h('figure', {},
                    h('img', {
                        src: '/blog/000002-Convincing-a-sceptic/original.webp',
                        alt: 'The original photo',
                        width: 512,
                        height: 'auto'
                    }),
                ),
                h('figure', {},
                    h('img', {
                        src: '/blog/000002-Convincing-a-sceptic/mosaic.png',
                        alt: 'The computer-generated mosaic image',
                        width: 512,
                        height: 'auto'
                    }),
                )
            ),
            h('p', {},
                'The software also generates a \"picking list\", showing how many of each tile is required, and construction ' +
                'plans - here are examples of both (the example construction plan is for the top-left quadrant of the image):'
            ),
            h('div', {className: 'figure-pair'},
                h('figure', {},
                    h('img', {
                        src: '/blog/000002-Convincing-a-sceptic/picking-list.png',
                        alt: 'A \"picking list\" of numbers of each type of tile required.',
                        width: 256,
                        height: 'auto'
                    }),
                ),
                h('figure', {},
                    h('img', {
                        src: '/blog/000002-Convincing-a-sceptic/tile-map-0-0.png',
                        alt: 'A construction plan for one of the 32x32 base plates',
                        width: 768,
                        height: 'auto'
                    }),
                )
            ),
            h('p', {},
                'And finally, after about 10 hours to build it, here\'s the finished mosaic, stuck to the whiteboard in ' +
                'Dave\'s office:'
            ),
            h('figure', {},
                h('img', {
                    src: '/blog/000002-Convincing-a-sceptic/finished-mosaic.webp',
                    alt: 'The finished mosaic',
                    width: 1024,
                    height: 'auto'
                }),
            )
        ),
        h('section', {},
            h('h2', {}, 'Fast forward to Metaphor'),
            h('p', {},
                'The prototype language has changed quite a lot since then.  It\'s now called Metaphor, and it\'s the basis ' +
                'of what we\'re now doing at M6R.'
            )
        )
    ];
}

export const blogPost_000002 = new BlogPost(
    'Convincing a sceptic',
    'Eluned Hudson',
    '2024-10-22',
    '/blog/000002-Convincing-a-sceptic',
    'How Dave persuaded me that Metaphor could change the way people build software.',
    null,
    blogArticle_000002
);
