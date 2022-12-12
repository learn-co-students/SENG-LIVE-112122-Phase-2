// Should Render Once for Every Object inside "projects" 

// Destructure "project" from "props" Object
const ProjectListItem = ({ project }) => {
    
    // Destructure Attributes from Each "project" Object
    const { id, name, about, phase, link, image } = project;
    
    return (
        <>
            <h2>ProjectListItem Component</h2>
            <p>{id}</p>
            <p>{name}</p>
            <p>{about}</p>
            <p>{phase}</p>
            <p>{link}</p>
            <p>{image}</p>
        </>
    );
}

export default ProjectListItem;