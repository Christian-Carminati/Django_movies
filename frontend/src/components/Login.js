import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}  // your Google app client ID
      buttonText="Sign in with Google"
      onSuccess={onGoogleLoginSuccess} // perform your user logic here
      onFailure={onGoogleLoginFailure} // handle errors here
    />
  );
};

const onGoogleLoginSuccess = useCallback(
  response => {
    const idToken = response.tokenId;
    const data = {
      email: response.profileObj.email,
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName
    };

    validateTokenAndObtainSession({ data, idToken })
      .then(handleUserInit)
      .catch(notifyError);
  },
  [handleUserInit]
);
export default Login;