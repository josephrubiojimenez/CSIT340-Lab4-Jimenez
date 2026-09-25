export default function ContactLink({ label, href, text }) {
  return (
    <li>
      <span className="inline-block w-24 text-sm text-stone-500">{label}</span>
      <a href={href} className="font-medium hover:underline">
        {text}
      </a>
    </li>
  );
}