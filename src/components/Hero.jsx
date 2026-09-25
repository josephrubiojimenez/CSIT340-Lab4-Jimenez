export default function Hero() {
  return (
    <header id="top" className="max-w-4xl mx-auto px-6 pt-20 pb-16 scroll-mt-16">
      <p className="text-sm font-medium text-stone-500">Hi, I'm</p>
      <h1 className="mt-2 text-5xl font-semibold tracking-tight">Joseph Jimenez</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
        A third year IT student passionate about creating scalable technology that solves real-world problems.
      </p>
      <div className="mt-8 flex gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700"
        >
          See my projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-medium hover:bg-stone-50"
        >
          Contact me
        </a>
      </div>
    </header>
  );
}