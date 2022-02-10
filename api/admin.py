from atexit import register
from django.contrib import admin
from api.models import Movie,Genre

admin.site.register(Genre)
admin.site.register(Movie)
