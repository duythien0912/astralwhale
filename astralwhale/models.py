from django.db import models


# Create your models here.

class Users(models.Model):
    deviceId = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    updated_on = models.DateTimeField(auto_now= True)
    created_at = models.DateTimeField(auto_now_add=True)
