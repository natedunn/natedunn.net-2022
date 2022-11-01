import Image from 'next/image'
import { ArticleLayout } from '@/components/ArticleLayout'

export const meta = {
  published: true,
  author: 'Nate Dunn',
  date: '2022-10-24',
  title: 'Using Supabase with tRPC',
  tags: ['supabase', 'tRPC', 'typescript', 'tutorial'],
  description: 'Basic state management comes to Alpine.js through Spruce.',
}

export default (props) => {
  if (meta) return <ArticleLayout meta={meta} {...props} />
  return null
}

### Two kids on the block

...

### Best of both worlds

Previously there was a helpful article by [Kyle Wong](https://www.kylewong.my/posts/supabase-trpc), but it has since gone out-of-date due to incompatiablilty between [supabase-js](https://github.com/supabase/supabase-js) and [postgrest-js-tools](https://github.com/mzalevski/postgrest-js-tools).

### Walk through

...

### Types in Supabase

- Issue with nested queries
