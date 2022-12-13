import ProjectListItem from "./ProjectListItem";

import { useState } from "react";

const ProjectList = ({ projects }) => {

  // Set Up State to Manage User's searchQuery
  const [ searchQuery, setSearchQuery ] = useState("");

  // Create Helper Function to Update searchQuery With
  // Latest User Input Values
  const handleSearch = (e) => {
    // console.log(e.target.value);

    // Update searchQuery State With Value of Target of Event
      // Triggers a Re-Render of the Component
    setSearchQuery(e.target.value);
  }

  // Add Filtering Logic to Filter Through Each Project
  // And Determine Whether the project.name Includes searchQuery
  const filteredListItems = projects.filter(project => {
    // project.name => Name of Each Project Object
      // Great Outdoors Guide => great outdoors guide
      // Great Outdoors Guide => GREAT OUTDOORS GUIDE

    // searchQuery => User's Input Value At Any Given Point in Time 
      // great Outdoors guide => great outdoors guide
      // great Outdoors guide => GREAT OUTDOORS GUIDE

    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // filteredListItems => Array a project Objects Returned From filter();

  const projectListItems = filteredListItems.map(project => (
    <ProjectListItem 
      key={project.id}
      // project={project}

      // Advanced Shortcut
      {...project} 

      // id={project.id}
      // about={project.about}
      // image={project.image}
      // link={project.link}
      // name={project.name}
      // phase={project.phase}
    />
  ));


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleSearch} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
