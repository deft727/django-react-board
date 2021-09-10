from rest_framework import serializers
from board.models import Board, Post, Topic, Reader, Blogger , InfoPages , Photo , Avatar
from django.contrib.auth.models import User


class Avatarserializers(serializers.ModelSerializer):

    class Meta:
        model = Avatar
        fields = "__all__"


class PostCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('message', 'topic', 'created_by', 'updated_at')


class CreateTopicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Topic
        fields = ('subject', 'board')


class UserSerializer(serializers.ModelSerializer):

    image = Avatarserializers()

    class Meta:

        model = User
        fields = ("id", "username", "email", "image")


class PostSerializer(serializers.ModelSerializer):
    created_by = serializers.SerializerMethodField()
    postCount = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = "__all__"

    def get_created_by(self, obj):
        return obj.created_by.username

    def get_postCount(self, obj):
        if Post.objects.filter(created_by=obj.created_by):
            return Post.objects.filter(created_by=obj.created_by).count()
        else:
            return 0


class TopicSerializer(serializers.ModelSerializer):
    starter = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()

    def get_starter(self, obj):
        return obj.starter.username


    def get_replies(self, obj):
        return obj.posts.all().count()

    class Meta:
        model = Topic
        fields = "__all__"


class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = "__all__"


class TopicDetailSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)
    photos = PhotoSerializer(many=True)

    class Meta:
        model = Topic
        fields = "__all__"



class BoardSerializer(serializers.ModelSerializer):
    topics_count = serializers.SerializerMethodField()
    posts_count = serializers.SerializerMethodField()
    last_post = serializers.SerializerMethodField()

    class Meta:
        model = Board
        fields = "__all__"

    def get_topics_count(self, obj):
        return obj.topics.all().count()

    def get_posts_count(self, obj):
        return Post.objects.filter(topic__board=obj).count()

    def get_last_post(self, obj):
        last_post = Post.objects.filter(topic__board=obj).order_by('-created_at').first()
        if last_post is not None:
            return {"message": last_post.message[0:25], "author": last_post.created_by.username}
        else:
            return {"message": "Not yet", "author": "Not yet"}



    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.description = validated_data['description']
        instance.save()
        return instance


class BoardDetailSerializer(serializers.ModelSerializer):
    topics = TopicSerializer(many=True)

    class Meta:
        model = Board
        fields = "__all__"


class ReaderSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField()

    class Meta:
        model = Reader
        fields = "__all__"

    @staticmethod
    def get_user(obj):
        if not (obj.user.first_name):
            return obj.user.username


class BloggerSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField()

    class Meta:
        # model = Blogger
        fields = "__all__"

    @staticmethod
    def get_user(obj):
        if not (obj.user.first_name):
            return obj.user.username
        return obj.username


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk', 'username', 'email')


class InfoPagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = InfoPages
        fields = "__all__"
