import React from 'react'; // Explicit React import for clarity and consistency
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Navbar from "../Navbar";
import Footer from "../Footer";

const AppShell = ({ children }) => (
  <main>
    <Navbar />
    {children}
    <Footer />
  </main>
);

// Adding PropTypes for better validation and documentation
AppShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppShell;
