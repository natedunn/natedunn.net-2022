import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import headroomLogo from '@public/logos/headroom.svg'
import properLogo from '@public/logos/proper.svg'
import zaoLogo from '@public/logos/zao.svg'
import zephyrLogo from '@public/logos/zephyr.svg'
import flagLogo from '@public/logos/flag.svg'
import pressLogo from '@public/logos/press.svg'

const projects = [
  {
    name: 'Headroom',
    description: 'Open source starter for building headless sites with Astro',
    link: { href: 'https://github.com/natedunn/headroom', label: 'github.com' },
    status: 'Active',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'APIs'],
    logo: headroomLogo,
  },
  {
    name: 'Project Zao',
    description:
      'A proof-of-concept page builder for Next.js and React. Bring your own components.',
    // link: { href: '#', label: 'Demo Coming Soon' },
    status: 'In Development',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    logo: zaoLogo,
  },
  {
    name: 'Proper',
    description:
      'Generate shell scripts to setup a macOS laptop for design, development, and whatever else you need.',
    link: {
      href: 'http://useproper.app',
      label: 'useproper.com',
    },
    tech: ['Next.js', 'Tailwind CSS'],
    status: 'On Hold',
    logo: properLogo,
  },
  {
    name: 'Zephyr',
    description: 'A themeable component library for React and Vue',
    link: { href: 'https://usezephyr.com', label: 'usezephyr.com' },
    tech: ['React', 'Vue', 'TypeScript'],
    status: 'On Hold',
    logo: zephyrLogo,
  },
  {
    name: 'Fundación Flag',
    description:
      'Marketing site for foundation in Mexico City that provides students scholarships.',
    link: { href: 'https://fundacionflag.org/', label: 'fundacionflag.org' },
    status: 'Complete',
    tech: ['Vue', 'Nuxt', 'Tailwind CSS'],
    logo: flagLogo,
  },
  {
    name: 'Press CSS',
    description: 'Pre-Tailwind era CSS framework, built for Frontiers USA.',
    link: {
      href: 'https://frontiersusa.github.io/press-css/',
      label: 'Demo',
    },
    tech: ['CSS', 'PostCSS'],
    status: 'Deprecated',
    logo: pressLogo,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Nate Dunn</title>
        <meta name="description" content="" />
      </Head>
      <SimpleLayout
        title="A few things I have worked on."
        intro="I've worked on many project behind closed doors, but here are a few that I have been able to work on in public."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-10 w-10"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                {project.link ? (
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                ) : (
                  project.name
                )}
              </h2>
              <div className="mb-4">
                <Card.Description>{project.description}</Card.Description>
              </div>
              <div className="z-10 mb-8 text-xs uppercase dark:text-white/50">
                {project.tech.map((t, i) =>
                  project.tech.length === i + 1 ? `${t}` : `${t} • `
                )}
              </div>
              <div className="mt-auto flex items-center gap-4">
                <div className="relative z-10 inline-flex rounded-full bg-slate-200 px-2.5 py-0.5 text-xs text-zinc-900 group-hover:bg-slate-300 dark:bg-slate-800 dark:text-white">
                  {project?.status}
                </div>
                {project?.link?.label ? (
                  <div className="relative z-10 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </div>
                ) : null}
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
