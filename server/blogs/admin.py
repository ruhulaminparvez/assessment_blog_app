from django.contrib import admin
from .models import Blog

# Register your models here.
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'pub_date', 'body', 'like', 'unlike')
    list_display_links = ('title', 'pub_date')
    list_filter = ('pub_date','title')
    search_fields = ('title', 'body')

    list_editable = ('like', 'unlike')

admin.site.register(Blog, BlogAdmin)
