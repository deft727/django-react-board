from rest_framework.authtoken.models import Token


def get_user(request):
    token = request.headers.get('Authorization')
    if token:
        token = token.split(' ')
        token = token[1].strip()
        user = Token.objects.filter(key=token)
        if user:
            user = Token.objects.get(key=token).user
            return user
        else:
            return False
