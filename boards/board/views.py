from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})


def topic_detail(request):
    return render(request, 'index.html', {})


def board_detail(request):
    return render(request, 'index.html', {})



