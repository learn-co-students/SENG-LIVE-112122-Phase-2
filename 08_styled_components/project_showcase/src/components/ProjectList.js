// Deliverable 4: Import / Add `Button` + `Input` Styled Components

  // How can we make `Button`s render to the DOM as `NavLink` components?

  import { Button, Input } from "./shared";

  import ProjectListItem from "./ProjectListItem";
  import { useState } from "react";
  
  const ProjectList = ({
    projects,
    enterProjectEditModeFor,
    onDeleteProject,
  }) => {
    const [searchQuery, setSearchQuery] = useState("");
  
    const searchResults = projects.filter((project) => {
      return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    const projectItems = searchResults.map((project) => {
      return (
        <ProjectListItem
          key={project.id}
          project={project}
          enterProjectEditModeFor={enterProjectEditModeFor}
          onDeleteProject={onDeleteProject}
        />
      );
    });
  
    const handleOnChange = (e) => setSearchQuery(e.target.value);
  
    return (
      <section>
        <h2>Projects</h2>
  
        <div className="filter">
          <Button>All</Button>
          <Button>Phase 5</Button>
          <Button>Phase 4</Button>
          <Button>Phase 3</Button>
          <Button>Phase 2</Button>
          <Button>Phase 1</Button>
        </div>
        <Input type="text" placeholder="Search..." onChange={handleOnChange} />
  
        <ul className="cards">{projectItems}</ul>
      </section>
    );
  };
  
  export default ProjectList;