
from django.contrib import admin
from django.urls import path, include
from board.views import *
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('boards-api.urls')),
    path('pages/', include('django.contrib.flatpages.urls')),
    path('', index),
    path('board/<int:id>/', board_detail),
    path('board/<int:pk>/topic/<int:id>/', topic_detail),
    # path('login/', login),

    # JWT auth


    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
