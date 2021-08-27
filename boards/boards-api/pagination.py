from rest_framework.pagination import PageNumberPagination


class BoardsPagination(PageNumberPagination):

    page_size = 8
    page_query_param = 'page'
