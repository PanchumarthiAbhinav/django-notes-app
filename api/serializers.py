from rest_framework import serializers
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    updated = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    topic = serializers.CharField(max_length=100)

    class Meta:
        model = Note
        fields = '__all__'
