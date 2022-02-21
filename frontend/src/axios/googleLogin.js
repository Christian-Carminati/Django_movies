import axios from 'axios'
const googleLogin = (accesstoken) => {
    axios.post('https://django-movies-db.herokuapp.com/auth/convert-token/', {
        token: accesstoken,
        backend: 'google-oauth2',
        grant_type: 'convert_token',
        client_id: 'mESBdVfKGORpCCyWLEOqol5Lx3rvFYUp4nbcYMJM',
        client_secret: 'E21tnf0AnZ0zITx5WvITDGNE1Z43p5BcbfAVaTzj1EA3RBZ1L4uuUrmZBEUVfGa87u517GBZI9sUyzlNv7ueOFyRP6UQVfE7OYJAY3MdNBeLuZtQJ5yuvMuQCFXozeQO',
    })
    .then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('refresh_token', res.data.refresh_token)
    })
}

export default googleLogin


