import axios from 'axios';
import { useHistory } from 'react-router-dom';

const google_Login = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('https://django-movies-db.herokuapp.com/auth/convert-token', {
			token: accesstoken,
			backend: 'google-oauth2',
			grant_type: 'convert_token',
			client_id: 'qCQMZd0KQCPogzU230Y7VPXMW0HlngKIChWk0PO7',
			client_secret:'UAwOEH87YTwg23OJQJJ6txcG4J0cMmkb4mCrVDInA2PMyT9e9VTSjmUBkLaDK5AxQrUmK8t7dtkw9NK0EJhVybm1J5hdWR7n7PajDyqUHO2rsCLQ7OsIEQtCdmcmMrqy',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default google_Login;