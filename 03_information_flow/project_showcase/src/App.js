import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// import projects from "./projects";

const App = () => {

  // What Are the Main Advantages of Storing projects in State (Array)
    // Pass Down projects => Passing Down State
    // We Can Work With Our Data in a More Flexible Manner
    // We Can Take Advantage of Implicit Component Re-Renders
  const [projects, setProjects] = useState([]);
  
  // Lifted isDarkMode State To App + Created a CB Function to Manage State
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleClick = () => setIsDarkMode(!isDarkMode);

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  // - Add an onClick event listener to the "Load Projects" 
  // button

  // - When the button is clicked, make a fetch 
  // request to "http://localhost:4000/projects"
  // and set the `projects` state to the value 
  // returned by the response

  return (
    <div className={ isDarkMode ? "App" : "App light"}>
      <Header 
        setProjects={setProjects}
        isDarkMode={isDarkMode}
        handleClick={handleClick}
      />
      <ProjectForm />
      <button>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
