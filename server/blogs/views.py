from django.http import HttpResponse
from django.shortcuts import render
from .models import Blog
from rest_framework import viewsets
from .serializers import BlogSerializer

# Create your views here.
class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
    
    