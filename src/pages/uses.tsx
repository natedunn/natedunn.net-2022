import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-6">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children?: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {children ? <Card.Description>{children}</Card.Description> : null}
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Nate Dunn</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software, gadgets, and other things I use"
        intro="Here is a list of things that I use, most daily, for work or things work adjacent"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1 (2020)">
              I upgrade from a 16” MacBook Pro with the Intel chip. Cannot tell
              you how nice it was to have all this horsepower and hear no fan.
            </Tool>
            <Tool title="Dell U2518D Monitor LCD 25”">
              Cheap, but fine monitor that I bought a few years back. If I were
              designing more often I might have something to complain about
              here, but for my needs it just works.
            </Tool>
            <Tool title="Custom Mechanical Keyboards">
              Maybe I will make a separate page for this, I like to put together
              custom keyboards. It&apos;s an expensive hobby, but someone&apos;s
              got to do it.
            </Tool>
            <Tool title="Logitech Master MX 3">
              Worn to the bone, this is my favorite mouse I have ever used. The
              polling could be a little higher but other than that, its perfect.
            </Tool>
            <Tool title="Autonomous ErgoChair Pro">
              Not the nicest chair on the market and I have had this one for
              quiet some time. But other than the seat cushion being a bit worn,
              it has been a great chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code"></Tool>
            <Tool title="Fig">
              Helpful command line tool for autocomplete and other terminal
              niceties. Used with ZSH.
            </Tool>
            <Tool title="Arc">
              Interesting take on the browser. Might not be for everyone, but it
              sounds like it is for a lot of people.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">What more can be said about Figma?</Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Cron">
              Absolutely love this calendar app. Its missing a few features from
              my previous favorite Fantastical, but I believe it can get there
              if Notion lets it.
            </Tool>
            <Tool title="Raycast">
              I was an avid Alfred user for years. I put off Raycast for a
              while, but once the extensions store filled out, I was sold.
            </Tool>
            <Tool title="Cleanshot">
              Such a helpful tool for screenshots or Loom-like videos. If you
              don&apos;t want to use the company Loom account, this is great.
            </Tool>
            <Tool title="Texts">
              All-in-one messaging app. This isn&apos;t your mom&apos;s
              web-wrapper version of these apps. Its smooth, it works nearly all
              the time, but it is not cheap at $15/month.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
