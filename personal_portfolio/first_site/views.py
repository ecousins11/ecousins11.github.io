from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
#
# def hello_world(request):
#     return render(request, 'hello_world.html', {})

# def index(request):
#     return HttpResponse("Hello, world. You're at the first index.")

def index(request):
    return render(request, 'home.html', {})

def projects(request):
    return render(request, 'projects.html', {})

def countdown(request):
    return render(request, 'countdown.html', {})