import React, { useState } from 'react';
import axiosInstance from '../axios/login';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import googleLogin from '../axios/googleLogin';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const history = useNavigate();
	const initialFormData = Object.freeze({
		username: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`auth/token/`, {
				username: formData.username,
				password: formData.password,
        		grant_type: 'password',
				client_id: 'qCQMZd0KQCPogzU230Y7VPXMW0HlngKIChWk0PO7',
				client_secret:
					'UAwOEH87YTwg23OJQJJ6txcG4J0cMmkb4mCrVDInA2PMyT9e9VTSjmUBkLaDK5AxQrUmK8t7dtkw9NK0EJhVybm1J5hdWR7n7PajDyqUHO2rsCLQ7OsIEQtCdmcmMrqy',
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access_token);
				localStorage.setItem('refresh_token', res.data.refresh_token);
				history('/');
				window.location.reload();
        // console.log(res.data);
        // console.log(res.data.refresh_token);
			});
	};

	const responseGoogle = (response) => {
		console.log("aaa");
    	console.log(response);
 	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					<GoogleLogin
						clientId="320035418897-vdkf595r1th1mhi8qouvd1g49i22lvhu.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
