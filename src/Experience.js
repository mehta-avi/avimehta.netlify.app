import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const experiences = [
  {
    role: "Data Scientist",
    logo: "/logos/truist.png",
    company: "Truist",
    period: "Dec 2024 - Present",
  },
  {
    role: "Business Intelligence Engineer",
    logo: "/logos/truist.png",
    company: "Truist",
    period: "June 2023 - Dec 2024",
  },
  {
    role: "Undergraduate Teaching Assistant",
    logo: "/logos/vtSeal.png",
    company: "Virginia Tech",
    period: "Aug 2022 - May 2023",
  },
  {
    role: "Software Engineer Intern",
    logo: "/logos/blankly.png",
    company: "Blankly Finance",
    period: "Oct 2021 - May 2022",
  },
  {
    role: "Technology Consultant",
    logo: "/logos/cgvt.png",
    company: "The Consulting Group at Virginia Tech",
    period: "Oct 2020 - May 2022",
  },
  {
    role: "Software Engineer Intern",
    logo: "/logos/brandsOnRoad.png",
    company: "Brands on Road",
    period: "June 2020 - Aug 2020",
  },
];
 
const education = [
{
    logo: "/logos/vtSeal.png",
    degree: "B.S. Computer Science",
    school: "Virginia Tech",
    period: "2019-2023",
},
];

export default function Experience() {
  return (
    <section className="flex justify-center">
    <div className="w-full max-w-2xl py-20 px-4">
      <Nav />
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <ul className="space-y-8">
        {experiences.map((exp, idx) => (
          <li key={idx} className="flex items-center space-x-4">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{exp.company}</span>
                <span className="text-gray-500 text-sm whitespace-nowrap">{exp.period}</span>
              </div>
              <div className="text-gray-700">{exp.role}</div>

            </div>
          </li>
        ))}
      </ul>

      <div className="my-10 border-t border-gray-300" />

      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <ul className="space-y-8">
        {education.map((edu, idx) => (
          <li key={idx} className="flex items-center space-x-4">
            <img
              src={edu.logo}
              alt={edu.school}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{edu.school}</span>
                <span className="text-gray-500 text-sm whitespace-nowrap">{edu.period}</span>
              </div>
              <div className="text-gray-700">{edu.degree}</div>
              {edu.description && <div className="text-gray-600">{edu.description}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}
