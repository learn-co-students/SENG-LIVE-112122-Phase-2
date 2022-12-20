import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const handleUpdate = (updatedProject) => {
    // Find Updated Project in projects (.map)
    const updatedProjects = projects.map(originalProject => {
      if (originalProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return originalProject;
      }
    });

    // Replace old objects in "projects" state with new
    // list containing updated project
    setProjects(updatedProjects);
  }

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          handleUpdate={handleUpdate}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
      />
    </div>
  );
};

export default App;
