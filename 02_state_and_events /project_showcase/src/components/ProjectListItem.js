// Props => Managed ACROSS Components
// State => Managed WITHIN Components

  // We Can Pass State(s) Down as Prop(s)

// Deliverable => 

  // When we click on our Clap "button", we want to:

    // Increment Some State Up by 1
    // Re-Render ProjectListItem Component to Display Updated Count

import { useState } from "react";

const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  
  // Initialize State + Setter Function
  // clapCount => State
  // setClapCount => (State) Setter Function

    // When we update clapCount using setClapCount with a new value, this automatically
    // triggers a re-render of the component.

    // This re-render is the reason why we can see new state values (or corresponding UI changes) 
    // represented in the DOM.
  
  const [ clapCount, setClapCount ] = useState(0);

  // Set Up Helper Function to Make Changes to State
  const handleClaps = () => {
    
    // console.log(e.target);

    // Directly Mutating State => BAD
    // clapCount++
    // clapCount = clapCount + 1; 
    
    // Utilizing Setter Function to Update State => GOOD
    setClapCount(clapCount + 1);
  }
  
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClaps} className="claps">👏
          {clapCount}
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
