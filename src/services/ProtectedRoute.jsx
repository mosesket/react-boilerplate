import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  return isAllowed ? children : <Navigate to={redirectPath} replace />;
};

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

