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
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1 (2020)"></Tool>
            <Tool title="Dell U2518D Monitor LCD 25”"></Tool>
            <Tool title="Custom Mechanical Keyboards"></Tool>
            <Tool title="Logitech Master MX 3"></Tool>
            <Tool title="Autonomous ErgoChair Pro"></Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code"></Tool>
            <Tool title="Fig"></Tool>
            <Tool title="Arc"></Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma"></Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Cron"></Tool>
            <Tool title="Raycast"></Tool>
            <Tool title="SavvyCal"></Tool>
            <Tool title="Cleanshot"></Tool>
            <Tool title="Texts"></Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
