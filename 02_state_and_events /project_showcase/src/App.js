import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from "react";

const App = () => {
  
  // Create Some State
  // const [ someState, someStateSetter ] = useState("Louis");

  const [ isDarkMode, setDarkMode ] = useState(true);
  
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode} 
      />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
