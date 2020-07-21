from django.shortcuts import render

# Create your views here.
from .models import Users
from .serializers import UserSerializer
from rest_framework import generics


class UserListCreate(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
