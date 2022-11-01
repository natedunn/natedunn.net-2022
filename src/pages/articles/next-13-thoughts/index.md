import Image from 'next/image'
import { ArticleLayout } from '@/components/ArticleLayout'

export const meta = {
  published: true,
  author: 'Nate Dunn',
  date: '2022-10-31',
  title: 'Next 13: Release or Roadmap?',
  tags: ['nextjs', 'opinion'],
  description:
    'Next.js 13 has been released. But are they building the airplane as they fly it?',
}

export default (props) => {
  if (meta) return <ArticleLayout meta={meta} {...props} />
  return null
}

### Hype Cycle

Every year we can expect an announcement of the forthcoming Next.js Conference. This year's iteration had it's hype level raised with catchy marketing lingo like "dynamic without Limits", and promising that the conference will "change the way you code".

Through its shiny, Apple-_like_ presentation, Vercel introduced to us the newest version of Next.js, while laying out its features and _roadmap_. But will it actually \_change the way we code_d?

### What was announced?

There there three major announcements:

- Turbopack
- `app/` directory (layouts & server components)
- Component tool kit

#### Turbopack

It's a bold move to introduce the "successor to Webpack", even if the creator _is_ involved. Powered by Rust, Turbopack is a new an incremental bundler, optimized for Javascript and Typescript, and it runs pretty damn fast. Currently, the projected is still in early "alpha", .

Here is what else we know:

- Next.js supported
- No other frameworks supported (though they have mentioned they are working on Svelte)
- No plugin support yet (and a confirmation that Webpack plugins will not be compatible)
