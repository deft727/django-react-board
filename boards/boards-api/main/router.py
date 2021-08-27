from django.urls import path,include, re_path
from rest_framework.routers import SimpleRouter
from .views import *
from django.contrib.flatpages import views


main_router = SimpleRouter()


main_router.register('board', BoardViewSet, basename='board')
main_router.register('topic', TopicViewSet, basename='topic')
# main_router.register('post', CartViewSet, basename='post')


extra_urlpatterns = [
    re_path(r'^(?P<url>.*/)$', views.flatpage),

    path('pages/', include('django.contrib.flatpages.urls')),
    path('board/<int:id>/topic/<int:pk>/', TopicView.as_view()),
    path('check-user-is-authenticated/', CurrentUserView.as_view(), name='check-user-is-authenticated'),
    path('user/', UserAPIView.as_view())
]
