from rest_framework import serializers
from api.models import Genre,Movie

class GenreSerializer(serializers.ModelSerializer):
    
    id = serializers.IntegerField(read_only=True)

    class Meta:
      model = Genre
      fields = ('id', 'title',)
        
class MovieSerializer(serializers.ModelSerializer):
    
    genre = serializers.SlugRelatedField(
        many=True,
        slug_field='title',
        queryset=Genre.objects.all() 
    )
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Movie
        fields = (
            'id','name', 'movie_director', 'release_date', 'running_time', 'genre'
        )
