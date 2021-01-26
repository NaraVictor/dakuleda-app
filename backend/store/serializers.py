from rest_framework import serializers
from rest_framework.exceptions import server_error
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    manufacturer_name = serializers.CharField(source='manufacturer.name')
    category = serializers.CharField(source='category.name')

    class Meta:
        model = Product
        fields =[
            'id','name','number_in_stock','product_image',
            'description','regular_price','new_price',
            'gift_eligible','free_delivery', 'slug',
            'manufacturer_name','category']


class ProductFeatureSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='product_id.name')

    class Meta:
        model = ProductFeature
        fields = [
           'title','feature', 'name'
        ]


class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = [
            'name','slug','image',
        ]


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'


class ManufacturerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Manufacturer
        fields = '__all__'


class ProductGallerySerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source = 'item.name')

    class Meta:
        model = ProductGallery
        fields = [
            'product_name','image'
        ]


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'

class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRating
        fields = '__all__'


class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.user_name')
    gift_code = serializers.CharField(source='gift_id.code')
    gift_name = serializers.CharField(source='gift_id.title')

    class Meta:
        model = Order
        fields = [
            'date','time','amount_paid','is_user',
            'user','user_name','gift_code', 'gift_name','status',
            'invoice_number'
        ]

    
class OrderDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderDetail
        fields = '__all__'



class FeaturedProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feature
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = '__all__'

