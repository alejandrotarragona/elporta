import { GetServerSideProps } from "next";
import Image from "next/image"; // Importa el componente Image de next/image
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
// import { fetchPageInfo } from "../utils/fetchPageInfo"; // Ya no necesitas esta función
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ projects, skills, pageInfo, experiences, socials }: Props) => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Header socials={socials} />

      {/* Hero Banner Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            
        <Image
           className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
             src="https://i.imgur.com/e2yvD6A.png"
            alt=""
           width={10}
           height={10}
                    />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // Este es el código que cambia para hacer la petición a la ruta API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getPageInfo`
  );

  // check res for error
  if (!res.ok) {
    console.log(res.statusText);
  }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: { // Aquí se devuelve un objeto con los props dentro
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // No hace falta usar revalidate con getServerSideProps
  };
};
