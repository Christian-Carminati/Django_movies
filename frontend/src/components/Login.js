import GoogleLogin from "react-google-login";
import axios from "axios";
// get env vars
const googleClientId = "320035418897-5ga32j004nn1r07uh2gnci5mepr88msb.apps.googleusercontent.com";
const drfClientId = "qCQMZd0KQCPogzU230Y7VPXMW0HlngKIChWk0PO7";
const drfClientSecret = "UAwOEH87YTwg23OJQJJ6txcG4J0cMmkb4mCrVDInA2PMyT9e9VTSjmUBkLaDK5AxQrUmK8t7dtkw9NK0EJhVybm1J5hdWR7n7PajDyqUHO2rsCLQ7OsIEQtCdmcmMrqy";
const baseURL = "http://localhost:8000";

const handleGoogleLogin = (response) => {
  axios
    .post(`${baseURL}/auth/convert-token`, {
      token: response.accessToken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: drfClientId,
      client_secret: drfClientSecret,
    })
    .then((res) => {
      const { access_token, refresh_token } = res.data;
      console.log({ access_token, refresh_token });
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
    })
    .catch((err) => {
      console.log("Error Google login", err);
    });
};

const Login = () => {
  return (
    <div className="App">
      <GoogleLogin
        clientId={googleClientId}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={(response) => handleGoogleLogin(response)}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            type="button"
            class="login-with-google-btn"
          >
            Sign in with Google
          </button>
        )}
        onFailure={(err) => console.log("Google Login failed", err)}
      />
    </div>
  );
};

export default Login;