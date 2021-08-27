from django.contrib import admin
from .models import *
from .admin_actions import *


class ReaderAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'user')
    list_display_links = ('id', 'username','user')


class BloggerAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'user')
    list_display_links = ('id', 'username', 'user')


class BoardAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "description"]
    list_display_links = ["id", "name"]
    actions = [is_not_activ, is_activ, export_boards]


class TopicAdmin(admin.ModelAdmin):
    list_display = ["id", "subject", "board"]
    list_display_links = ["id", "subject"]


class PostAdmin(admin.ModelAdmin):
    list_display = ["id", "message", "topic", "created_at"]
    list_display_links = ["id", "message", "topic", ]


admin.site.register(Board, BoardAdmin)
admin.site.register(Topic, TopicAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Photo)
admin.site.register(Reader, ReaderAdmin)
admin.site.register(Blogger, BloggerAdmin)

