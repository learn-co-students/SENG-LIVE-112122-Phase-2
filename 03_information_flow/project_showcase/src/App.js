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

  const fetchProjects = () => {
    // console.log("Button Clicked!");

    // Specify Our Request URL + HTTP Verbs (if necessary)
    fetch("http://localhost:4000/projects")

      // Convert JSON Response to JS
        // JSON.stringify(JS) => Converts JS to JSON
      .then(res => res.json())

      // Handle Data
      .then(projects => {
        // console.log(data);

        // Setter Function Invocation => Component Re-Render
        setProjects(projects);
      });
  }

  return (
    <div className={ isDarkMode ? "App" : "App light"}>
      <Header 
        setProjects={setProjects}
        isDarkMode={isDarkMode}
        handleClick={handleClick}
      />
      <ProjectForm />
      <button onClick={fetchProjects}>Load Projects</button>
      
      {/* Pass Down State (Array) */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
