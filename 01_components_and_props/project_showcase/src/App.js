// Top Level Component

// camelCase

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// Import Project Data
// Why Do We Want to Import Our Data Here?

  // Because We Want to Make Our Data Available Throughout
  // Our ENTIRE Component Hierarchy

  // Data Flow => We Want to Make Sure That Our Data
  // Is Available Throughout Our Component Hierarchy

import projects from "./projects";

const App = () => {
  
  // console.log(projects);

  return (
    <>
      <div className="app">PROJECT SHOWCASE</div>
      <Header 
        
        // firstName, lastName, age => Keys
        // "Louis", "Medina", 32 => Values
        
        firstName="Louis" 
        lastName="Medina" 
        age={32}
      />
      <ProjectForm />
      <ProjectList 
        
        // Immutable
        projects={projects}
      />
    </>
  );
}

// import App from "./App"
// import { FirstComponent, SecondComponent } from "./OtherComponent"
export default App;
