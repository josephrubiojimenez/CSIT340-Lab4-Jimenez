import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="HTML" />
            <SkillTag name="CSS" />
            <SkillTag name="JavaScript" />
            <SkillTag name="Java" />
            <SkillTag name="TypeScript" />
            <SkillTag name="Python" />
            <SkillTag name="SQL" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="React" />
            <SkillTag name="Spring Boot" />
            <SkillTag name="FastAPI" />
            <SkillTag name="Django" />
            <SkillTag name="Tailwind CSS" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Git" />
            <SkillTag name="VS Code" />
            <SkillTag name="MySQL" />
            <SkillTag name="Supabase" />
            <SkillTag name="Postman" />
            <SkillTag name="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
}