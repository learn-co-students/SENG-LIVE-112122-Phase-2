// Top Level Component

// camelCase

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
// import ProjectListItem from ...

const App = () => {
  return (
    <>
      <div>PROJECT SHOWCASE</div>
      <Header 
        firstName="Louis" 
        lastName="Medina" 
        age={32}
      />
      <ProjectForm />
      <ProjectList />
    </>
  );
}

// import App from "./App"
// import { FirstComponent, SecondComponent } from "./OtherComponent"
export default App;
