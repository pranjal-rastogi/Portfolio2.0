
import BlurFade from "@/components/magicui/blur-fade";

import { ProjectCard } from "@/components/project-card";



import { DATA } from "@/data/resume";
const BLUR_FADE_DELAY = 0.04;


function Projects() {
  return (
    <div>
        <section id="projects">
        <div className="w-full ">
          
        
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 pb-8">
                
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out all of my projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Mostly CLI Tools and small utility work
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
          </div>
      </section>
    </div>
  )
}

export default Projects