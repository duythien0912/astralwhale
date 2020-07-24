from rest_framework import serializers
from .models import Users, Files
from django.forms import ModelForm


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'deviceId', 'name', 'email', 'message')


class FileSerializer(ModelForm):
    class Meta:
        model = Files
        fields = ['id', 'name', 'filepath']
