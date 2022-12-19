import { useState, useEffect } from "react";

const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  const [clapCount, setClapCount] = useState(0);
  const [someOtherState, someSetterFunction] = useState(false);

  // const handleClap = () => setClapCount(prevCount => prevCount + 1);

  const handleClap = () => { 
    // setClapCount(prevClapCount => prevClapCount + 1)
    someSetterFunction(!someOtherState);
  };

  // Adding Dependency Array Variable => Example
  useEffect(() => {
    console.log("useEffect Behavior Fired Off!");

    // Other Behaviors That We Wish to Align With
    // Changes to clapCount State
  }, [clapCount, someOtherState]);
  
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClap}>
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
