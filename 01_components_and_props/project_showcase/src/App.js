import Header from "./components/Header.js"
import ProjectForm from "./components/ProjectForm.js"
import ProjectList from "./components/ProjectList.js"


const App = () => {
  return (
    <div>
      <Header 
        firstName="Eddie" 
        astName="Meyer" 
        age={27}
      />
      <ProjectForm />
      <ProjectList />
      <div className="App">Project showcase</div>
    </div>
  );
}

// import App from ""./App.js"
export default App;
