from .views import *
from django.urls import path

urlpatterns = [
    # root
    path('', api_root, name='api_root'),

    # products
    path('products/', Products.as_view(), name='products'),
    path('products/<int:id>', Products.as_view(), name='product_id'),
    path('products/category/<str:slug>', ProductsByCategory.as_view(), name='product_category'),
    path('products/features/<int:product_id>', ProductFeatures.as_view(), name='product_features'),
    path('products/gallery/<int:product_id>', ProductGalleryView.as_view(), name='product_gallery'),
    path('products/similar/<str:category>', SimilarProducts.as_view(), name='similar_products'),

    # categories
    path('categories/', Categories.as_view(), name='all_categories'),
    path('categories/<str:name>', Categories.as_view(), name='category'),
    
    # sub-categories
    path('products/sub-categories/<str:sub_category>', Products.as_view(), name='products_subcategories'),

    # orders
    path('orders/', orders, name='orders'),
    
    # checkout
    path('checkout/', CheckOut.as_view(), name='checkout'),

]
