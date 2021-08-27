from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from board.models import Board , Topic, Post , Blogger , Reader
from .serializers import BoardSerializer, BoardDetailSerializer, TopicSerializer, TopicDetailSerializer


class BoardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer
    queryset = Board.objects.all()
    action_to_serializer = {
        "retrieve": BoardDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
    # @action(methods=['get','post','put'], detail=False)
    # def


class TopicViewSet(viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()

    action_to_serializer = {
        "retrieve": TopicDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class TopicView(APIView):

    def get(self, request, **kwargs):
        topic = Topic.objects.get(id=kwargs.get("pk"))
        serializer = TopicDetailSerializer(topic)
        return Response(serializer.data)



class CurrentUserView(APIView):

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return Response({'is_authenticated': True})
        return Response({'is_authenticated': False})


class UserAPIView(APIView):

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return Response({'is_authenticated': True})
        return Response({'is_authenticated': False})


