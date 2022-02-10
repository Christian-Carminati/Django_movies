from webbrowser import get
from django.urls import path, include
from api.views import GenreViewSet,MoviesViewSet,MovieDetail
urlpatterns = [
    path('genre',GenreViewSet.as_view()),
    path('movies',MoviesViewSet.as_view()),
    path('movies/<int:pk>',MovieDetail.as_view())
]