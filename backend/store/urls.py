from .views import *
from django.urls import path

urlpatterns = [
    # root
    path('', api_root, name='api_root'),

    # products
    path('products/', Products.as_view(), name='products'),
    path('products/<int:id>', Products.as_view(), name='product_id'),

    # categories
    path('categories/', Categories.as_view(), name='all_categories'),
    path('categories/<str:category>', Categories.as_view(), name='category'),
    
    # sub-categories
    path('products/sub-categories/<str:sub_category>', Products.as_view(), name='products_subcategories'),

    # orders
    path('orders/', orders, name='orders'),
]
