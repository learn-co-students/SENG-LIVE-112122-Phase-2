// Deliverable 3: Import / Add `Button` Styled Component

  // How can we make `Button` render to the DOM as a `Link` component?

  import { Button } from "./shared";

  import { NavLink, Link } from "react-router-dom";
  
  const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
    return (
      <header className="navigation">
        <h1 className="branding">
          <Link to="/">
            <span className="logo">{"//"}</span>
            Project Showcase
          </Link>
        </h1>
        <nav>
          <Button as={NavLink} exact to="/projects">
            All Projects
          </Button>
          <Button as={NavLink} to="/projects/new">
            Add Project
          </Button>
          <Button as={NavLink} to="/about">
            About
          </Button>
          <Button onClick={onToggleDarkMode}>{buttonTextContent}</Button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  