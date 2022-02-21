# Movie database django

## REST API

Django rest-framework

## FRONTEND

- React: per l'utilizzo del login e l'aggiunta di film (in fase di test) 

- Django: utilizzato per interfacciarsi direttamente con l'API

- Vi è una parte amministratore dove è possibile gestire i film e gli utenti attraverso l'accesso con le credenziali al seguente URL

**URL** : `https://django-movies-db.herokuapp.com/admin`

```
admin:
username: admin
password: admin12345
```

# CRUD 
## Movie example
```json
{
    "id": 1,
    "name": "test",
    "movie_director": "test1",
    "release_date": "2022-02-01",
    "running_time": "01:20:00",
    "genre": [
        "Adventure"
    ]
}
```
## Genre example
```json
{
    "id": 1,
    "title": "Action"
}
```
## GET MOVIES

* **URL** : `https://django-movies-db.herokuapp.com/api/movies`

* **Method** : `GET`

* **Return**: `return all movies in database`
#
## ADD MOVIE

* **URL** : `https://django-movies-db.herokuapp.com/api/movies/add`

* **Method** : `POST`

* **Return**: `add movie to the database`
#
## MOVIE DETAIL

* **URL** : `https://django-movies-db.herokuapp.com/api/movies/<id_movie>`

* **Method** : `GET,PUT,PATCH,DELETE`

* **Return**: `get,update data or delete a movie`
#
## GET GENRES

* **URL** : `https://django-movies-db.herokuapp.com/api/genre`

* **Method** : `GET`

* **Return**: `return all genres in database`
#
## ADD GENRE

* **URL** : `https://django-movies-db.herokuapp.com/api/genre/add`

* **Method** : `POST`

* **Return**: `add genre to the database`
#
## MOVIE DETAIL

* **URL** : `https://django-movies-db.herokuapp.com/api/genre/<id_genre>`

* **Method** : `GET,PUT,PATCH,DELETE`

* **Return**: `get,update data or delete a genre`
#
## LOGIN
Il login è gestito attraverso la generazione di access-token e di un refresh token tramite il servizio auth di django

* **URL** : `https://django-movies-db.herokuapp.com/auth/token`

* **Method**: `POST`

* **Input example**:`Json`
```json
{
"username":"test",
"password":"test12345",
"grant_type":"password",
"client_secret":"YOy1gAI1PptvRBByRyGXieVxZ46WcYbV5I2Xcv4dwWeipeXeiGto7y8xSJG3UM5jO3k1GWL7m9C0Qoe0u9mWpGNOKxg6ei07qK1qiZwoYBQCAUWKKlrx8anJAmuzWHCJ",
"client_id":"xeFrG952VmjKTstCfFPhw0ytuWD5ckbabFAhDM12"
}
```
client_secret e client_id sono statici del servizio di django

* **Output example**:`Json`
```json
{
    "access_token": "a6mI0WD8d3sNWv07EI1HV4HP4eZbkP",
    "expires_in": 36000,
    "token_type": "Bearer",
    "scope": "read write",
    "refresh_token": "GaU8kX1LnqILsFi1Ql3EkQCuCQYtsm"
}
```
#
## HOST
La web-app è hostata su Heroku


