
import Sidebar from "@/components/Sidebar";
import Spotlight from "@/components/Spotlight";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Tags from "@/components/Tags";

import {
  about,
  experience,
  projects,
  education,
  skills,
  profile,
} from "@/data/content";

// Structured data for Google
function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://ujjwalpokharel.com.np/#person",

    name: profile.name,

    url: "https://ujjwalpokharel.com.np",

    jobTitle: profile.title,

    description:
      "Ujjwal Pokharel is a Software Engineer with 4+ years of experience building scalable full-stack applications using React, Next.js, TypeScript, NestJS and PostgreSQL.",

    sameAs: [
      profile.linkedin,
      profile.github,
    ],

    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "React",
      "Next.js",
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
      "Artificial Intelligence",
      "Intelligent Systems Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <PersonSchema />

      <a
        href="#content"
        className="absolute left-0 top-0 -translate-x-full rounded bg-teal-300 px-4 py-3 text-sm font-bold text-slate-900 focus:translate-x-4 focus:translate-y-4"
      >
        Skip to Content
      </a>

      <Spotlight />

      <div className="relative z-20 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />

          <main
            id="content"
            className="pt-24 lg:w-[52%] lg:py-24"
          >
            <Section id="about" title="About">
              {about.map((p, i) => (
                <p key={i} className="mb-4">
                  {p}
                </p>
              ))}
            </Section>

            <Section id="experience" title="Experience">
              <ul className="group/list">
                {experience.map((e) => (
                  <Card key={e.title} {...e} />
                ))}
              </ul>
            </Section>

            <Section id="projects" title="Projects">
              <ul className="group/list">
                {projects.map((p) => (
                  <Card
                    key={p.title}
                    title={p.title}
                    body={p.body}
                    tags={p.tags}
                  />
                ))}
              </ul>
            </Section>

            <Section id="education" title="Education">
              <ul className="group/list">
                {education.map((e) => (
                  <Card key={e.title} {...e} />
                ))}
              </ul>
            </Section>

            <Section id="skills" title="Skills">
              {skills.map((s) => (
                <div key={s.group} className="mb-6">
                  <h3 className="font-medium text-slate-200">
                    {s.group}
                  </h3>

                  <Tags items={s.items} />
                </div>
              ))}
            </Section>
          </main>
        </div>
      </div>
    </>
  );
}
