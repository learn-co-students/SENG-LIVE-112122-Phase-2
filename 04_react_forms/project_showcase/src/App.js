// Deliverable 2: Handle submitting the form and update state in parent 
// using inverse data flow

// - When the form is submitted:

//   - Update the `projects` state located in the parent component, `App`
//   using inverse data flow

//     - Use the spread operator to return a new array with the new project included

//     - Set the `projects` state to the new array value

import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Automate This Behavior
  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // };

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleAddProject = (newProject) => {
    // Merge Each New Project Into Our "projects" State

    
    // Directly Mutating State
    // setProjects(projects.push(newProject));
    
    // Safer Approach
    setProjects([...projects, newProject]);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={onToggleDarkMode} 
      />
      <ProjectForm 
        handleAddProject={handleAddProject}
      />
      {/* <button onClick={handleClick}>Load Projects</button> */}
      <ProjectList 
        projects={projects} 
      />
    </div>
  );
};

export default App;
