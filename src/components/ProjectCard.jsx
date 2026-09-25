export default function ProjectCard({ year, title, description, tech, link }) {
  return (
    <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
      <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{year}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
      <p className="mt-4 text-sm text-stone-500">{tech}</p>
      <a href={link} className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">
        View on GitHub
      </a>
    </article>
  );
}