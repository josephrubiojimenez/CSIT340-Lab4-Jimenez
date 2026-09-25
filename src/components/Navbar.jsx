import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold">
          Joseph Jimenez
        </a>
        <div className="flex gap-6 text-sm text-stone-600">
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
}