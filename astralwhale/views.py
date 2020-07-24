from django.shortcuts import render

# Create your views here.
from .models import Users, Files
from .serializers import UserSerializer, FileSerializer
from rest_framework import generics


class UserListCreate(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer


class FileListCreate(generics.ListCreateAPIView):
    queryset = Files.objects.all()
    serializer_class = FileSerializer
