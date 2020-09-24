from django.urls import path, include
from . import views
# ^^^ means all views in the current directory of blog

urlpatterns = [
    path('', views.all_blogs, name='all_blogs'),
]
