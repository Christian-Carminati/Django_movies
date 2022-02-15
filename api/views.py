from rest_framework.viewsets import ModelViewSet

from .serializers import MovieSerializer, GenreSerializer
from .models import Movie, Genre
from rest_framework import generics, status

from rest_framework.views import APIView
from rest_framework.response import Response


class GenreViewSet(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    
class MoviesViewSet(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    
class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    
class CreateMovie(generics.CreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    
    
