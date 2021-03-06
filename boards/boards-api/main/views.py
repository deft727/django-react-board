from collections import OrderedDict

from django.http import Http404
from rest_framework import status, viewsets, permissions
from rest_framework.authtoken.models import Token
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from board.models import Board , Topic, Post , Blogger , Reader, InfoPages, Photo , Avatar
from rest_framework.authentication import BasicAuthentication


from .serializers import (BoardSerializer,
                          BoardDetailSerializer,
                          TopicSerializer,
                          TopicDetailSerializer,
                          CustomerSerializer,
                          InfoPagesSerializer,
                          CreateTopicSerializer,
                          UserSerializer,
                          PostCreateSerializer)
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .servises import PaginationBoards
from .utils import get_user
from datetime import datetime

# class New_topicView(APIView):
#     def post(self,request):
#


class UserViewSet(APIView):

    def get(self, request,):
        serializer = UserSerializer(get_user(request))
        return Response(serializer.data)

    def post(self, request,):

        data = request.data
        user = get_user(request)
        files = request.FILES.get('image')

        if user:

            try:
                avatar = Avatar.objects.get(user=user)
                avatar.delete()
                Avatar.objects.create(image=files, user=user)
            except:
                Avatar.objects.create(image=files, user=user)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)


class BoardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer
    queryset = Board.objects.all()
    authentication_classes = (BasicAuthentication,)
    permission_classes = (permissions.AllowAny,)
    pagination_class = PaginationBoards
    action_to_serializer = {
        "retrieve": BoardDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
        except Http404:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)


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

    def post(self, request, **kwargs):
        data = OrderedDict()
        data.update(request.data)
        data["topic"] = kwargs.get("pk")
        data["created_by"] = get_user(request).pk
        data["updated_at"] = datetime.now()
        serializer = PostCreateSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)


class New_topicView(APIView):

    def post(self, request, pk):
        data = request.data
        user = get_user(request)
        files = request.FILES.getlist('image')
        topic = Topic.objects.filter(subject=data.get('subject'), board=Board.objects.get(pk=pk)).exists()
        if user and topic is not True:
            new_topic = Topic.objects.create(subject=data.get('subject'), board=Board.objects.get(pk=pk), starter=user)
            if files:
                for file in files:
                    Photo.objects.create(file=file, topic=new_topic)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)


class InfoPagesView(viewsets.ModelViewSet):
    serializer_class = InfoPagesSerializer
    queryset = InfoPages.objects.all()




class CurrentUserView(APIView):

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return Response({'is_authenticated': True})
        return Response({'is_authenticated': False})


class UserStatusAPIView(APIView):

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return Response({'is_authenticated': True})
        return Response({'is_authenticated': False})


@api_view(['GET', 'POST'])
def customers_list(request):
    """
 List  customers, or create a new customer.
 """
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        customers = User.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(customers, 5)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = CustomerSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/customers/?page=' + str(nextPage), 'prevlink': '/api/customers/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET', 'PUT', 'DELETE'])
def customers_detail(request, pk):
    try:
        customer = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CustomerSerializer(customer,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CustomerSerializer(customer, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


