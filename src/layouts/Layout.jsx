import { useLocation } from "react-router-dom";
import PropTypes from "prop-types"; 
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  const render = () => {
    return location.pathname === "/login" || location.pathname === "/signup"
      ? true
      : false;
  };

  return (
    <div>
      {render() ? null : <Navbar />}
      
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default Layout;
