import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Negros Oriental and moved to Cebu City for elementary and college. I chose IT because I am passionate about creating technology or systems that scale and solves problems of people such as boring workflow, or daily problems. Also, being a techy person is something I can be proud of its because in the coming future knowing how to program, how to code to solve real-world problems is a must nowadays and in the fast approaching future. I really love to build something unique that really matters through my hard and soft skills.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}