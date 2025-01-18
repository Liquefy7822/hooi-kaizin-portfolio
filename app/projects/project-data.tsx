import React, { useState } from "react"; // Import useState from React

export interface Project {
  title: string;
  year: number;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    year: 2023,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
  },
  {
    title: "Project Two",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
  },
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // useState for collapsible logic

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "0.5rem",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            onClick={() => toggleCollapse(index)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{project.title} ({project.year})</span>
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </div>
          {activeIndex === index && (
            <div style={{ marginTop: "0.5rem" }}>
              <p>{project.description}</p>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => alert(`Interacting with ${project.title}`)}
              >
                Interact
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
