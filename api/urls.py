from webbrowser import get
from django.urls import path, include
from api import views
urlpatterns = [
    path('genre',views.GenreViewSet.as_view()),
    path('movies',views.MoviesViewSet.as_view()),
    path('movies/<int:pk>',views.MovieDetail.as_view()),
    path('movies/add',views.CreateMovie.as_view())
]