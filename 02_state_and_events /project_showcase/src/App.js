import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from "react";

const App = () => {
  
  // Create Some State
  // const [ someState, someStateSetter ] = useState("Louis");
  
  return (
    <div className="App">
      <Header/>
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
