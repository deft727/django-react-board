import djoser as djoser
from django.contrib import admin
from django.urls import path, include
from board.views import *
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from django.conf import settings
from django.conf.urls.static import static
from .yasg import urlpatterns as doc_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('boards-api.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt')),
    path('', index),
    path('board/<int:pk>/', board_detail,),
    path('board/<int:pk>/topic/<int:id>/', topic_detail),
    path('pages/<int:id>/', pages_detail),
    ]
    # path('auth/', include('rest_framework_social_oauth2.urls')),


urlpatterns += doc_urls

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
