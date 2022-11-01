import Image from 'next/image'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import MeImage from '@/images/me-square-close.png'
import { SocialLink } from '@/components/SocialLink'
import { Container } from '@/components/Container'

const ResumeItem = ({
  title,
  employer,
  dates,
  location,
  description = '',
}: {
  title: string
  employer: string
  dates: string
  location: string
  description?: string | (() => JSX.Element)
}) => {
  return (
    <div>
      <h4 className="mt-2 text-2xl font-bold"> &bull; {title}</h4>
      <div className="mt-2 dark:text-white/75">
        <p>{employer}</p>
        <p>
          {dates} | {location}
        </p>
      </div>
      <div className="mt-4 space-y-2">
        {typeof description === 'string' ? <p>{description}</p> : description()}
      </div>
    </div>
  )
}

const SidebarItem = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div>
      <h5 className="text-lg font-bold">{title}</h5>
      <div className="pl-2">
        {items.map((item) => (
          <p key={item} className="mt-2">
            &bull; {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function ResumePage() {
  return (
    <Container className="mt-12 md:mt-32">
      <div className="relative px-4 dark:text-white sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="mt-2 flex flex-col gap-4 md:items-center">
            <div>
              <Image
                src={MeImage}
                width={100}
                height={100}
                className="object-[250% 250%] aspect-square rounded-full object-cover"
                alt="Nate Dunn"
              />
            </div>
            <div className="hidden h-full w-[2px] flex-auto bg-black/25 dark:bg-white/25 md:inline-block"></div>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Nate Dunn
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I am a full stack web developer based in Mexico City.
              <br /> I build applications and websites with a careful eye for
              design, performance, and accessibility.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://twitter.com/natedunn"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href="https://instagram.com/natedunn"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://github.com/natedunn"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://linkedin.com"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
            <div className="my-10 inline-block h-[2px] w-full flex-auto bg-black/10 dark:bg-white/25"></div>
            <section className="grid grid-cols-1 gap-10 md:grid-cols-6">
              <div className="col-span-4 space-y-12">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                    Experience
                  </h3>
                  <div className="mt-6 space-y-8">
                    <ResumeItem
                      title="Lead Engineer"
                      employer="Historic Agency"
                      dates="Mar 2021 - Oct 2022"
                      location="Mexico City, Mexico (Remote)"
                      description={() => (
                        <>
                          <p>
                            Lead a team of engineers and contractors to develop,
                            deploy, and maintain web products for clients.
                            Projects were built with a tech stack of Next.js + a
                            headless CMS, Astro, or Wordpress.
                          </p>
                          <p>
                            Worked with the design team to create new design
                            systems and web brands for clients.
                          </p>
                        </>
                      )}
                    />
                    <ResumeItem
                      title="Front end Developer & Designer"
                      employer="MIO Frontiers"
                      dates="Sept 2014 - Feb 2021"
                      location="Phoenix, AZ & Mexico City, Mexico (Remote)"
                      description={() => (
                        <>
                          <p>
                            Worked on a full marketing team (which included an
                            art director, designers, content strategists, and
                            copywriters), to create nearly a dozen successful
                            fundraising campaigns.
                          </p>
                          <p>
                            Lead the team to design and developed a successful
                            relaunch our marketing website. Also lead the
                            front-end design and development of our in-house
                            donor application, as well as other active products.
                          </p>
                        </>
                      )}
                    />
                    <ResumeItem
                      title="Web Designer & Developer"
                      employer="Freelance / Contract"
                      dates="Jan 2012 - Sept 2014"
                      location="Phoenix & Flagstaff, AZ"
                      description="Worked with clients to create marketing websites and assets for their needs. Some solutions also involved other mediums such as print and emails."
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                    Education
                  </h3>
                  <div className="mt-6 space-y-8">
                    <ResumeItem
                      title="Northern Arizona University"
                      employer="Bachelor of Science (B.S.), Psychology"
                      dates="2010 - 2013"
                      location="Flagstaff, AZ"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 space-y-6">
                <SidebarItem
                  title="Industry Knowledge"
                  items={[
                    'Full stack dev',
                    'Front end dev',
                    'Marketing strategy',
                    'User Experience',
                    'User Interface',
                  ]}
                />
                <SidebarItem
                  title="Languages, Libraries, & Frameworks"
                  items={[
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Tailwind CSS',
                    'Rest & GraphQL',
                    'Vue',
                    'PHP',
                    'Wordpress',
                    'HTML/CSS/ES6',
                  ]}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  )
}
