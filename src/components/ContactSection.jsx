import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:joseph.jimenez@cit.edu"
          text="joseph.jimenez@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/josephrubiojimenez"
          text="github.com/josephrubiojimenez"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/joseph-jimenez-164126362/?isSelfProfile=true"
          text="linkedin.com/in/josephjimenez"
        />
      </ul>
    </section>
  );
}