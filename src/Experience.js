import React from "react";
import { Link } from "react-router-dom";

const experiences = [
  {
    role: "Data Scientist",
    company: "Truist",
    period: "Dec 2024 - Present",
  },
  {
    role: "Business Intelligence Engineer",
    company: "Truist",
    period: "June 2023 - Dec 2024",
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "Virginia Tech",
    period: "Aug 2022 - May 2023",
  },
  {
    role: "Software Engineer Intern",
    company: "Blankly Finance",
    period: "Oct 2021 - May 2022",
  },
  {
    role: "Technology Consultant",
    company: "The Consulting Group at Virginia Tech",
    period: "Oct 2020 - May 2022",
  },
  {
    role: "Software Engineer Intern",
    company: "Brands on Road",
    period: "June 2020 - Aug 2020",
  },
  {
    role: "Virginia Tech",
    company: "B.S. Computer Science",
    period: "2019 - 2023",
  },
];

export default function Experience() {
  return (
    <section className="max-w-2xl mx-auto py-20 px-4">
      <nav className="mb-8 flex space-x-6 text-gray-500 text-base">
        <Link to="/" className="hover:underline">home</Link>
        <Link to="/experience" className="hover:underline">experience</Link>
        <Link to="/projects" className="hover:underline">projects</Link>
      </nav>
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <ul className="space-y-8">
        {experiences.map((exp, idx) => (
          <li key={idx}>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{exp.role}</span>
              <span className="text-gray-500 text-sm">{exp.period}</span>
            </div>
            <div className="text-gray-700">{exp.company}</div>
            <div className="text-gray-600">{exp.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
