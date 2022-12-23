// Deliverable 4: Using the useParams hook, access the :id param from the URL
// to trigger appropriate GET requests

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const [claps, setClaps] = useState(0);
  const [project, setProject] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);

  console.log(useParams());
  // useParams() => Returns an object with a key of :id and value from URL
    // {id: 1}

  // What can I do with return of useParams() since it's an object?
  const { id } = useParams();

  // Hard Coded Value for ID
  // const id = 1;

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        
        // Update project state from "null" to Project Object
        setProject(project);
        
        // Update isLoaded to "true" once we have updated "project" state
        setisLoaded(!isLoaded);
      });
  }, [id]);

  if (!isLoaded) return <h1>Loading...</h1>;

  const { image, name, about, link, phase } = project;

  console.log(project.id);

  const handleClapClick = () => {
    setClaps((claps) => claps + 1);
  }

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleClapClick}>
            👏{claps}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null}
          <div className="extra">
            <span className="badge blue">Phase {phase}</span>
          </div>
          <br />
          <Link className="button" to="/projects">Back to Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
