from django.shortcuts import render
from .models import Blog
# Create your views here.
def all_blogs(request):
    blogs = Blog.objects.all()
    # blogs = Blog.objects.order_by('-date')[:4] returns the blogs from the most recent blog posts by date
    return render(request, 'blog/all_blogs.html', {'blogs': blogs})
