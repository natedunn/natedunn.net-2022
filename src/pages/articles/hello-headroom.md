import { ArticleLayout } from '@/components/ArticleLayout'

export const meta = {
  author: 'Nate Dunn',
  date: '2022-11-1',
  title: 'Hello Headroom',
  tags: ['astro', 'static', 'jamstack'],
  description:
    'A starter for building headless sites with Astro',
}

export default (props) => <ArticleLayout meta={meta} {...props} />

# Hello Headroom
