import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
    // console.log(projects);

    const ProjectListItems = projects.map(project => {
        // console.log(project);

        return <ProjectListItem key={project.id} project={project}/>
    });
    
    return (
        <ul>{ProjectListItems}</ul>
    );
}

export default ProjectList;