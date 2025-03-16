import React from "react";
import resources from "../data/ressurser";

const categoryDescriptions = {
  html: "HTML står for HyperText Markup Language, og er et strukturpråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
  css: "CSS står for Cascading Style Sheets og brukes for å beskrive utseendet og formatet på et HTML-dokument.",
  javascript: "JavaScript er et programmeringsspråk som brukes for å lage dynamiske og interaktive nettsider.",
  react: "React er et JavaScript-bibliotek for å bygge brukergrensesnitt.",
  "headless-cms": "Sanity og andre headless CMS-løsninger brukes til å håndtere innhold for nettsider og applikasjoner.",
};

const categoryMappings = {
  "Sanity and headless CMS": "headless-cms",
  "sanity": "headless-cms",
  HTML: "html",
  CSS: "css",
  JavaScript: "javascript",
  React: "react",
};

const Resources = ({ category }) => {
  const normalizedCategory = categoryMappings[category] || category.toLowerCase();

  const filteredResources = resources.filter(
    (resource) => resource.category.toLowerCase() === normalizedCategory
  );

  return (
    <div className="resources-container">
      <div className="resources-box">
        <h2 className="resources-title">{category}</h2>
        <p className="resources-description">
          {categoryDescriptions[normalizedCategory] || ""}
        </p>

        {filteredResources.length > 0 ? (
          <ul className="resources-list">
            {filteredResources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-resources">Ingen ressurser funnet for denne kategorien.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
