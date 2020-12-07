from rest_framework import serializers
from rest_framework.exceptions import server_error
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    manufacturer_name = serializers.CharField(source='manufacturer.name')
    category = serializers.CharField(source='category.name')

    class Meta:
        model = Product
        fields =[
            'name','number_in_stock','product_image',
            'description','regular_price','new_price',
            'SKU','gift_eligible','free_delivery',
            'manufacturer_name','category', 'gallery','tags','reviews','gifts']



class ProductFeatureSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name')

    class Meta:
        model = ProductFeature
        fields = [
            'product_id','title','feature', 'product_name'
        ]


class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = [
            'name', 'image','description'
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
    product_name = serializers.CharField(source = 'product_id.name')

    class Meta:
        model = ProductGallery
        fields = [
            'product_id','product_name','image','date','time'
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

