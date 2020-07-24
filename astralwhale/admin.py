from django.contrib import admin

# Register your models here.

from .models import Users, Files

admin.site.register(Users)

admin.site.register(Files)
