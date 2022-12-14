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
  
  // State => Mutable
  const [projects, setProjects] = useState([]);

  // Cannot Redeclare
  // const projects = "Something Else"

  // Cannot Reassign
  // projects = "Something Else"
  
  // Lifted isDarkMode State To App + Created a CB Function to Manage State
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleClick = () => setIsDarkMode(!isDarkMode);

  const [searchQuery, setSearchQuery] = useState("");
  const handleOnChange = (e) => setSearchQuery(e.target.value);
  
  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
      .then(myProjects => {
        // console.log(data);

        // Setter Function Invocation => Component Re-Render
        setProjects(myProjects);

        // projects = myProjects;
      });
  }

  return (
    <div className={ isDarkMode ? "App" : "App light"}>
      
      {/* Props = Immutable Configurations */}
      <Header 
        setProjects={setProjects}
        isDarkMode={isDarkMode}
        handleClick={handleClick}
      />
      <ProjectForm />
      <button onClick={fetchProjects}>Load Projects</button>
      
      {/* <h1>{searchQuery}</h1> */}

      {/* Pass Down State (Array) */}
      <ProjectList 
        searchResults={searchResults}
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default App;
