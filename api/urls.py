from django.urls import path
from .views import main

# endpoint for main
urlpatterns = [
    path('', main)
]