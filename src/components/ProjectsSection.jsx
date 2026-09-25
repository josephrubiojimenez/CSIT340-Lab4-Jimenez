import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About me in React"
          description="My first project React project that is rebuilt from a plain HTML page"
          tech="React · Tailwind CSS"
          link="https://github.com/josephrubiojimenez/CSIT340-Lab1-Jimenez"
        />
        <ProjectCard
          year="2026"
          title="Nurseon"
          description="An AI-powered nursing review platform designed to help nursing students prepare smarter for board examinations through personalized quizzes, study resources, and intelligent learning tools."
          tech="React · TypeScript · Python · FastAPI · Gemini LLM"
          link="https://github.com/josephrubiojimenez/Nurseon"
        />
        <ProjectCard
          year="2026"
          title="Multimodal Agentic RAG"
          description="An agentic Retrieval-Augmented Generation system that ingests text, images, audio, and video into a single unified vector space, then answers questions grounded in that content."
          tech="JavaScript · Python · FastAPI · Qdrant · Gemini LLM"
          link="https://github.com/josephrubiojimenez/multimodal-agentic-rag"
        />
        <ProjectCard
          year="2025"
          title="SpotOn"
          description="SpotOn is a web-based waiting area reservation system designed for students of Cebu Institute of Technology – University. It allows students to book available waiting areas, manage reservations, and ensures proper monitoring of occupancy and scheduling through a structured database system using PHP, MySQL, and XAMPP."
          tech="PHP · JavaScript · CSS"
          link="https://github.com/jamuelbacus/spoton"
        />
      </div>
    </section>
  );
}