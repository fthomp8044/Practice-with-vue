from django.shortcuts import render
from django.http import HttpResponse
import random

# Create your views here.

def home(request):
    # return HttpResponse("Heloo World")
    return render(request, 'generator/home.html', {"password":"hah3isnoe9392ue"})

def password(request):
    characters = list('abcdefghijklmnopqrstuvwxyz')

    if request.GET.get('uppercase'):
        characters.extend(list('ABCDEFJHIJKLMNOPQRSTUVWXYZ'))
    if request.GET.get('numbers'):
        characters.extend(list('123456789'))
    if request.GET.get('special'):
        characters.extend(list('!@#$%^&*()'))

    length = int(request.GET.get('length'))

    thepassword = ""

    for x in range(length):
        thepassword += random.choice(characters)

    return render(request, 'generator/password.html', {"password": thepassword})

def about(request):

    aboutme = "this is something else about me"

    return render(request, 'generator/about.html', {"about": aboutme})
