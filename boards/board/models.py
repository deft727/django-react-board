import sys
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils.text import Truncator
# from markdown import markdown
from simple_history.models import HistoricalRecords


class Avatar(models.Model):
    image =  models.ImageField(null=True, blank=True, upload_to='avatar/')
    user = models.CharField(blank=True, null=True, default=None, max_length=255, verbose_name='имя')


class Blogger(models.Model):
    file = models.ImageField(null=True, blank=True, upload_to='avatar/')
    # category = models.ManyToManyField(Category,verbose_name='Категории',null=True)
    user = models.OneToOneField(User, verbose_name='blogger', on_delete=models.CASCADE, related_name='blogger')
    username = models.CharField(blank=True, null=True, default=None, max_length=255, verbose_name='имя')
    email = models .EmailField(verbose_name='Электороная почта', null=True)
    birthday = models.DateField(null=True, blank=True, verbose_name='Дата рождения')
    country = models.CharField(null=True, blank=True, default=None, max_length=255,  verbose_name='Город')
    is_super = models.BooleanField(default=True)


class Reader(models.Model):

    file = models.ImageField(null=True, blank=True, upload_to='avatar/')
    user = models.OneToOneField(User, verbose_name='Reader', related_name='reader', on_delete=models.CASCADE)
    username = models.CharField(blank=True, null=True, max_length=50, verbose_name='Name')
    is_super = models.BooleanField(default=False)
    of_age = models.BooleanField(default=False, null=True, blank=True)
    # interests = models.ManyToManyField(Interests, verbose_name='Интересы', null=True, blank=True)


class BoardManager(models.Manager):

    def all(self):
        return self.get_queryset().filter(is_active=True)


class Board(models.Model):
    name = models.CharField(max_length=30, unique=True, verbose_name='Доска')
    description = models.CharField(max_length=100, verbose_name='Описание')
    history = HistoricalRecords()
    is_active = models.BooleanField(default=True, null=True, blank=True)
    objects = BoardManager()

    class Meta:
        ordering = ['-pk', ]

    def __str__(self):
        return self.name

    def get_posts_count(self):
        return Post.objects.filter(topic__board=self).count()

    def get_absolute_url(self):
        return reverse("board_topics", kwargs={"pk": self.pk})

    def get_last_post(self):
        return Post.objects.filter(topic__board=self).order_by('-created_at').first()


class Photo(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    file = models.ImageField(upload_to='photos/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    topic = models.ForeignKey("Topic",related_name="photos", on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        image2 = self.file
        if image2 :
            img2=Image.open(image2)
            new_img2 = img2.convert('RGB')
            res_img2 = new_img2.resize((800, 400), Image.ANTIALIAS)
            filestream = BytesIO()
            file_ = res_img2.save(filestream, 'JPEG', quality=90)
            filestream.seek(0)
            name = '{}.{}'.format(*self.file.name.split('.'))
            self.file = InMemoryUploadedFile(
                filestream, 'ImageField', name, 'jpeg/image', sys.getsizeof(filestream),  None
            )
            super().save(*args, **kwargs)


class Topic(models.Model):

    class Meta:
        ordering = ['-pk']

    subject = models.CharField(max_length=255, verbose_name='Тема')
    last_updated = models.DateTimeField(auto_now_add=True)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="topics")
    starter = models.ForeignKey(User, on_delete=models.CASCADE)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.subject

    # def get_photo(self):
    #     return Photo.objects.filter(topic=self).first()
    #
    # def get_photos(self):
    #     return Photo.objects.filter(topic=self)[1:]
    #
    # def get_page_count(self):
    #     count = self.posts.count()
    #     pages = count / 20
    #     return math.ceil(pages)
    #
    # def has_many_pages(self, count=None):
    #     if count is None:
    #         count = self.get_page_count()
    #     return count > 6
    #
    # def get_page_range(self):
    #     count = self.get_page_count()
    #     if self.has_many_pages(count):
    #         return range(1, 5)
    #     return range(1, count + 1)
    #
    # def get_last_ten_posts(self):
    #     return self.posts.order_by('-created_at')[:10]


class Post(models.Model):
    message = models.TextField(max_length=4000, help_text='Макс. кол-во символов 4000', verbose_name='Сообщение')
    topic = models.ForeignKey(Topic, related_name='posts', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    created_by = models.ForeignKey(User,  on_delete=models.CASCADE)
    updated_by = models.ForeignKey(User, null=True, related_name='+', on_delete=models.CASCADE)

    def __str__(self):
        truncated_message = Truncator(self.message)
        return truncated_message.chars(30)


class InfoPages(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()

    def __str__(self):
        return self.title
