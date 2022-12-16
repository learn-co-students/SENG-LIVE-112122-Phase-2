// Deliverable 1: Make the `ProjectForm` component a controlled component

// - Initialize state for all the form fields found in the component

// - Add an `onChange` event to each field that will update state associated 
// with the field that is interacted with

// - Provide a `value` attribute to each form field that will return the 
// associated piece of state

// - Add an `onSubmit` event handler to the form

import { useState } from "react";

const ProjectForm = ({ handleAddProject }) => {
  
  // Setting Up State

    // Input-By-Input Basis
    // const [ name, nameSetter ] = useState("");
    // const [ about, aboutSetter ] = useState("");
    // ...
  
    // Separate Callback Functions
    // const handleName = (e) => {
    //   nameSetter(e.target.value);
    // }

    // const handleAbout = (e) => {
    //   aboutSetter(e.target.value);
    // }

    // One State to Manage All Inputs

    const initialFormValues = {
      name: "",
      about: "",
      phase: "",
      link: "",
      image: ""      
    };

    const [ formData, setFormData ] = useState(initialFormValues);

    const handleInput = (e) => {
      // Replacing Our Original Object (formData) With String
      // formDataSetter(e.target.value); 

      // Replacing Our Original Object (formData) With a New Object
      // console.log(`Name: ${e.target.name}`);
      // console.log(`Value: ${e.target.value}`);

      // Object Destructuring Assignment
      // const { key1, key2 } = someObj

      const { name, value } = e.target;

      // Update to formData State Object With Appropriate Key / Value
      setFormData({...formData, [name]: value });

        // Name Input
        // setFormData({...formData, name: "Test" });
        
        // About Input
        // setFormData({...formData, about: "Test" });
        
        // Phase Input
        // setFormData({...formData, phase: "1" });
    }

    const handleSubmit = (e) => {
      // Prevent Default Page Refresh Behavior
      e.preventDefault();

      const requestObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }

      // Optimistic Rendering
      // handleAddProject(newProject); 

      // Persist Each New Project to db.json
      fetch("http://localhost:4000/projects", requestObj)
        .then(res => res.json())
        .then(newProject => {
          
          // Add Each New Project to project State Using Inverse Data Flow
          // Pessimistic Rendering
          handleAddProject(newProject);

          // Clear Out Input Values
          setFormData(initialFormValues);
        })
        .catch(() => { 
            // Optimistic Rendering
            // A Function to Undo Previous Optimistic Changes
        });
    }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleInput} 
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about" 
          value={formData.about}
          onChange={handleInput}
        />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          value={formData.phase}
          onChange={handleInput}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text"
          id="link" 
          name="link" 
          value={formData.link}
          onChange={handleInput}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          value={formData.image}
          onChange={handleInput}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
