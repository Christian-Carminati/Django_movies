import React from 'react'
import GoogleLogin from 'react-google-login'
import googleLogin from '../axios/googleLogin'

export default function Login() {

    async function responseGoogle (response) {
        console.log(response);
        await googleLogin(response.accessToken)
        //await setTimeout(() => window.location.reload(), 1000)
    }

    const onLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('user')
        window.location.reload()
    }

    return (
        <>
            <div className="jumbotron">
                <h3>Welcome to the social-auth app!</h3>
                <GoogleLogin
                    clientId="320035418897-q46s4tlfu0cd1rah0lp027p4s7b0f2nj.apps.googleusercontent.com"
                    buttonText="Join with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <br />
                <button type="button" class="btn btn-dark btn-md btngroup" onClick={onLogout}>Logout</button>
            </div>
        </>
    )
}