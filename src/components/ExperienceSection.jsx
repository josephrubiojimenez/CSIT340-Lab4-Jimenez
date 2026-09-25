import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web and application development, networking, databases, and systems analysis."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School, STEM Strand"
          place="Don Vicente Memorial National High School"
          description="Discovered my passion for computers and other emerging technologies."
        />
      </ol>
    </section>
  );
}