from django.urls import path, include
from . import views
# ^^^ means all views in the current directory of blog

app_name = 'blog'

urlpatterns = [
    path('', views.all_blogs, name='all_blogs'),
    path('<int:blog_id>/', views.detail, name='detail'),
]
