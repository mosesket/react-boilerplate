import { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import Loader from "../components/Loader";
import useBoundStore from "../store/Store";
import { getAccessToken, getTokenExpiration, setSession } from "./token.service";

const AuthGuard = ({ children }) => {
  const { loginWithToken, logoutService } = useBoundStore((state) => state);

  const [tokenLoading, setTokenLoading] = useState(true);

  const handleAuthentication = async () => {
    let access_token = getAccessToken();
    let expiration = getTokenExpiration();

    if (!access_token) {
      logoutService();
      setTokenLoading(false);
      return;
    }

    // if (!isAuthTokenValid(expiration)) return;
    if (!isAuthTokenValid(expiration)) {
      setTokenLoading(false);
      return;
    }

    setSession(access_token, expiration);
    loginWithToken();
    setTokenLoading(false);
  };

  const isAuthTokenValid = (expiration) => {
    const currentTime = Math.floor(Date.now() / 1000);

    if (expiration < currentTime) {
      logoutService();

      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    handleAuthentication();
  }, []);

  return <div>{tokenLoading ? <Loader /> : children}</div>; 
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default AuthGuard;
