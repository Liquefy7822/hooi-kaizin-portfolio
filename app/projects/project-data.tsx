import React, { useState } from "react";

export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    year: 2023,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Two",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "1rem", border: "1px solid #ccc", borderRadius: "8px", padding: "0.5rem" }}>
          <div
            onClick={() => toggleCollapse(index)}
            style={{ cursor: "pointer", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}
          >
            <span>{project.title} ({project.year})</span>
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </div>
          {activeIndex === index && (
            <div style={{ marginTop: "0.5rem" }}>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
