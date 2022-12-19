import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Timer from "./components/Timer";

const App = () => {

// Deliverable 1: Implement useEffect in App component 
// to load projects

  // Import the `useEffect` hook from the React library

  // Invoke `useEffect` and make a `GET` request using 
  // the `fetch` method

  // Update `projects` state upon successful response 
  // from the server

// Deliverable 2: Demonstrate the order of operations 
// between rendering a component and running the side 
// effect

  // Place a console.log() inside the `App` component as 
  // well as the `useEffect` method

  // console.log("COMPONENT RENDERED");

  // Open up the devtools to observe when each phase of 
  // the component will occur 

  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const addNewProject = newProject => {
    const newProjectCollection = [...projects, newProject];
    setProjects(newProjectCollection);
  }

  // useEffect(CB Function (Effect), Dependency Array (Optional))
  useEffect(() => {
    
    // Using fetch to Issue Requests to json-server
      // We can also use fetch to issue requests to 3rd Party APIs
        // Google Maps
        // Google Books
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      
      // Updating State => Causes Our App Component to Re-Render
      .then((projects) => setProjects(projects))
      .catch(() => {
        console.error("Something Went Wrong With Fetching Projects!");
      });
  }, []);

  // Dependency Array

    // Omit Entirely => Effect Fires Off Upon Initial Render + Upon Each Component Re-Render
    // [] => Effect Fires Off Upon Initial Render
    // [some, variables] => Effect Fires Off Upon Initial Render + Along With
      // Each Change to "some" and "variables"

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const onToggleTimer = () => setIsTimerVisible(!isTimerVisible);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <button onClick={onToggleTimer}>{ isTimerVisible ? "Hide Timer" : "Show Timer"}</button>
      { isTimerVisible ? <Timer /> : null }
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm addNewProject={addNewProject}/>
      {/* <button onClick={handleClick}>Load Projects</button> */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;