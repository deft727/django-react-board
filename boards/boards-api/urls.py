from .main.router import main_router, extra_urlpatterns
from django.urls import path
from .main.views import TopicView

urlpatterns = [
]

urlpatterns += main_router.urls
urlpatterns.extend(extra_urlpatterns)