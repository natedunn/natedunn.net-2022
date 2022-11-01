import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterLogoIcon as TwitterIcon,
  InstagramLogoIcon as InstagramIcon,
  GitHubLogoIcon as GitHubIcon,
  LinkedInLogoIcon as LinkedInIcon,
} from '@radix-ui/react-icons'
import MeImage from '@/images/me-square.png'

type SocialProps = {
  href: string
  icon: any
  children: React.ReactNode
  className?: string
}

function SocialLink({ className, href, children, icon: Icon }: SocialProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nate Dunn</title>
        <meta
          name="description"
          content="I'm Nate Dunn. I live in Mexico City, where I build for the web."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={MeImage}
                alt="Nate Dunn"
                className="aspect-square bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hello, I&apos;m Nate.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 lg:text-xl">
              <p>
                I am a full stack web developer, originally from Phoenix,
                Arizona but now living in Mexico City.
              </p>
              <p>
                I have been building for the web for over 10 years. These days I
                work primarily in JavaScript, with a focus in React/Next.js. You
                can check out all the{' '}
                <Link
                  className="underline underline-offset-2 hover:opacity-50"
                  href="/resume"
                >
                  stacks I am familiar with
                </Link>
                .
              </p>
              <p>
                I am a avid learner and constantly experimenting. But most of
                all, I&apos;m passionate about helping make the web a more{' '}
                <span className="italic">beautiful</span>,{' '}
                <span className="italic">performant</span>, and{' '}
                <span className="italic">accessible</span> experience for
                everyone.
              </p>
              <p>
                If you would like to get in touch please try my email or
                Twitter. Thanks for stopping by. 👋🏻
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hello@natedunn.net"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@natedunn.net
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
