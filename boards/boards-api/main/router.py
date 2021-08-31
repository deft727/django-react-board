from os.path import basename

from django.urls import path,include, re_path
from rest_framework.routers import SimpleRouter
from .views import *
# from django.contrib.flatpages import views


main_router = SimpleRouter()


main_router.register('board', BoardViewSet, basename='board')
main_router.register('topic', TopicViewSet, basename='topic')
main_router.register('pages', InfoPagesView, basename='pages')
# main_router.register('customers', customers_detail, basename='kk')


extra_urlpatterns = [

    path('board/<int:id>/topic/<int:pk>/', TopicView.as_view()),
    path('check-user-is-authenticated/', CurrentUserView.as_view(), name='check-user-is-authenticated'),
    path('user/', UserStatusAPIView.as_view()),
    path('customers/', customers_list),
    path('customers/<int:pk>/', customers_detail)
]
