from django.urls import path, include
from . import views

urlpatterns = [
    path('api/user/', views.UserListCreate.as_view()),
]
