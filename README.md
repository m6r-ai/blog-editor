# Blog post code generator tool

## Introduction

This is an example of using Metaphor to build a tool that is used to create blog post entries for the [m6r.ai](https://m6r.ai)
website.  The aim is to take a markdown file, `blog.md` and have a large language model (LLM) generate the same content
as TypeScript code.

The website runs as a single page application, that uses a custom virtual DOM implementation.  You don't need to worry
about the details, but essentially this means each blog post is encoded as an HTML-like tree structure using a series
of nested functions.

The example showcases a few important elements:

- It shows how to use an `Action:` section to describe what you want the LLM to do.
- It has a `Context:` section that embeds the `blog.md` file that is to be used as the basis for the output
- The `Context:` section also has a blank template for what the output file should be.
- The `Context:` section includes 2 examples of other blog posts to demonstrate to the LLM what blog posts should look like.

## Using m6rc

To generate a large context prompt (LCP), use the following:

```bash
python3 ../m6rc/src/m6rc/m6rc.py blog-editor.m6r > out.lcp
```

In this case the path to `m6rc.py` is `../m6rc/src/m6rc/` but you can replace this with whatever your path needs to be.

Once run it will generate a file, `out.lcp`.  If you copy this to the interactive window of the LLM it can generate a
response.

## Outputs

Our example asked for this text to be transformed:

```Markdown
This is a test to see if I can make this work

## We've got headings

And we've got text.

This is a really long line.  It will be *interesting* to see how this gets handled and whether the LLM can split things
across several lines of source code?

### Here's a different heading

More text

- A bullet
- A second one
- And a third one

Isn't this fun?
```

### ChatGPT 4o

ChatGPT generates the following:

```TypeScript
import {h, VElement} from '../../lib/dvdi';
import {BlogPost} from '../BlogPost';

function blogArticle_000004(): VElement[] {
    return [
        h('p', {},
            'This is a test to see if I can make this work'
        ),
        h('section', {},
            h('h2', {}, 'We\'ve got headings'),
            h('p', {},
                'And we\'ve got text.'
            ),
            h('p', {},
                'This is a really long line.  It will be ',
                h('em', {}, 'interesting'),
                ' to see how this gets handled and whether the LLM can split things across several lines of ' +
                'source code?'
            )
        ),
        h('section', {},
            h('h3', {}, 'Here\'s a different heading'),
            h('p', {},
                'More text'
            ),
            h('ul', {},
                h('li', {}, 'A bullet'),
                h('li', {}, 'A second one'),
                h('li', {}, 'And a third one')
            ),
            h('p', {},
                'Isn\'t this fun?'
            )
        )
    ];
}

export const blogPost_000004 = new BlogPost(
    'Title',
    'Dave Hudson',
    '2024-11-03',
    '/blog/000004-Blog-post',
    'Summary.',
    null,
    blogArticle_000004
);
```

### Claude 3.5 Sonnet

Claude gives almost exactly the same response, except for using an `i` element instead of an `em`:

```TypeScript
import {h, VElement} from '../../lib/dvdi';
import {BlogPost} from '../BlogPost';

function blogArticle_000004(): VElement[] {
    return [
        h('p', {},
            'This is a test to see if I can make this work'
        ),
        h('section', {},
            h('h2', {}, 'We\'ve got headings'),
            h('p', {},
                'And we\'ve got text.'
            ),
            h('p', {},
                'This is a really long line. It will be ',
                h('i', {}, 'interesting'),
                ' to see how this gets handled and whether the LLM can split things across several lines of source code?'
            )
        ),
        h('section', {},
            h('h3', {}, 'Here\'s a different heading'),
            h('p', {},
                'More text'
            ),
            h('ul', {},
                h('li', {}, 'A bullet'),
                h('li', {}, 'A second one'),
                h('li', {}, 'And a third one')
            ),
            h('p', {},
                'Isn\'t this fun?'
            )
        )
    ];
}

export const blogPost_000004 = new BlogPost(
    'Title',
    'Dave Hudson',
    '2024-11-03',
    '/blog/000004-Blog-post',
    'Summary.',
    null,
    blogArticle_000004
);
```

## Iteration

One of the advantages of using Metaphor is the ability to evolve requirements and pull in external context.  If you check
the `git` history you'll see that the blog structure was originally slightly more complex, but was later simplified.  The
ability to capture this change in requirements and the changed `Action:` made updating the LCP for the LLM much simpler.
