import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./services/api";
const App = () => {
  useEffect(() => {
    api.get("projects").then((response) => setProjects(response.data));
  }, []);

  const [projects, setProjects] = useState([]);

  const  handleAddProject = async () => {
    const response = await api.post('projects', {
      title: "Za Warudo",
      owner: "Dio Brando",
    });

    setProjects([...projects, response.data]);
  }
  return (
    <>
      <h1>Projects</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title + " - " + project.owner}</li>
        ))}
      </ul>

      <button type="button" onClick={() => handleAddProject()}>Adicionar projeto</button>
    </>
  );
};

export default App;
