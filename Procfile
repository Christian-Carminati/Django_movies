web: gunicorn Movie.wsgi
release:python manage.py makemigrations --noinput
release:python manage.py collectstatic --noinput
release:python manage.py migrate --noinput
heroku ps:scale web=1
