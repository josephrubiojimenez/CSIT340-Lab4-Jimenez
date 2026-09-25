# Portfolio

A responsive personal portfolio website rebuilt using React and Tailwind CSS. This project refactors a static HTML portfolio into a modular, component-based React architecture using Vite.

## Features

- Component-Based Architecture: Broken down into 15 reusable React components under src/components/.
- Responsive Design: Styled using Tailwind CSS to ensure seamless display across mobile, tablet, and desktop views.
- Props Passing & Destructuring: Clean data flow with destructured props across all functional components.
- Structured Sections:
  - Navbar & Navigation: Sticky header with smooth anchor navigation.
  - Hero: Introduction header and quick action buttons.
  - About: Personal background and quick facts grid.
  - Skills: Categorized technical skill badges (Languages, Frameworks, Tools).
  - Projects: Itemized portfolio project cards with repository links.
  - Experience: Timeline breakdown of academic and project experience.
  - Contact: Reachable contact links and profiles.

## Tech Stack

- Frontend: React (Vite)
- Styling: Tailwind CSS
- Version Control: Git & GitHub

## Project Structure

```text
src/
├── components/
│   ├── AboutSection.jsx
│   ├── ContactLink.jsx
│   ├── ContactSection.jsx
│   ├── ExperienceSection.jsx
│   ├── Fact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── NavLink.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectsSection.jsx
│   ├── SectionHeading.jsx
│   ├── SkillTag.jsx
│   ├── SkillsSection.jsx
│   └── TimelineItem.jsx
├── App.jsx
├── main.jsx
└── index.css
