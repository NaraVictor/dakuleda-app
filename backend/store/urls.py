from .views import *
from django.urls import path

urlpatterns = [
    # root
    path('', api_root, name='api_root'),

    # products
    path('products/', Products.as_view(), name='products'),
    path('products/<str:category>', product_category, name='products_category'),
    # path('products/<str:name>', Products.as_view(), name='product_name'),
    # path('products/<int:id>', Products.as_view(), name='product_id'),
    path('products/<str:sub_category>', Products.as_view(), name='products_subcategories'),

    # orders
    path('orders/', orders, name='orders'),
]
