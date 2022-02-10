from rest_framework.viewsets import ModelViewSet

from .serializers import MovieSerializer, GenreSerializer
from .models import Movie, Genre
from rest_framework import generics


class GenreViewSet(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    
class MoviesViewSet(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    
class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    

    # def get(self):
    #     queryset = Movie.objects.all().prefetch_related('genre')
    #     name = self.request.query_params.get('name')
    #     movie_director = self.request.query_params.get('movie_director')
    #     genre = self.request.query_params.get('genre')
    #     running_time = self.request.query_params.get('running_time')
    #     if name:
    #         queryset = queryset.filter(title__icontains=name)
    #     if movie_director:
    #         queryset = queryset.filter(rating__gte=movie_director)
    #     if genre:
    #         queryset = queryset.filter(genre__title__icontains=genre)
    #     if running_time:
    #         queryset = queryset.filter(popularity_gte=running_time)
    #     return queryset
