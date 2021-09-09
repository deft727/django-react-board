from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from board.models import Board


class PaginationBoards(PageNumberPagination):
    page_size = 15
    max_page_size = 1000

    def get_paginated_response(self, data):
        # x = Token.objects.filter(user=self.request.user)
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link(),
                # 'tokens': str(self.request.auth)
            },
            'count': self.page.paginator.count,
            'results': data,
            'history':  Board.history.all().values("name", "history_type", "history_date")
        })


# def get_client_ip(request):
#     x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
#     if x_forwarded_for:
#         ip = x_forwarded_for.split(',')[0]
#     else:
#         ip = request.META.get('REMOTE_ADDR')
#     return ip