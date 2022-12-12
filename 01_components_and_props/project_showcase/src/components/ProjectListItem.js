// Should Render Once for Every Object inside "projects" 

// Destructure "project" from "props" Object
const ProjectListItem = ({ project }) => {
    
    // Destructure Attributes from Each "project" Object
    const { id, name, about, phase, link, image } = project;
    
    return (
        // Not HTML, JSX (JavaScript XML)
        
        <li>
            {/* <h2>ProjectListItem Component</h2> */}
            {/* <p>{id}</p> */}
            <p>Project Name: {name}</p>
            <p>About: {about}</p>
            <p>Phase: {phase}</p>
            <a href={link}>Project Link</a>
            {/* <img src={image} /> */}
        </li>
    );
}

export default ProjectListItem;