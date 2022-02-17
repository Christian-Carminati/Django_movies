from platform import release
from pyexpat import model
from django.db import models
from django.urls import reverse


class Genre(models.Model):
    title = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.title

class Movie(models.Model):
    name = models.CharField(max_length=100)
    movie_director = models.CharField(max_length=30,null=True)
    release_date = models.DateField(null=True)
    running_time = models.TimeField(null=True);
    genre = models.ManyToManyField(Genre,blank=True)
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Movie_detail", kwargs={"pk": self.pk})