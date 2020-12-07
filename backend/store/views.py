from .models import Product, ProductCategory
from .serializers import ProductSerializer
from rest_framework import request, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
# Create your views here.


@api_view()
def api_root(request):
    return Response({'message':'welcome to dakuleda.com api root by nara victor 😊'})


class Products(APIView):
    
    def get(self, request):
        prods = Product.objects.filter(is_active=True).all()
        s = ProductSerializer(prods, many=True)
        return Response({'products':s.data}, status=status.HTTP_200_OK)

    # def post():


@api_view()
def product_category(request, category):
    cat = ProductCategory.objects.get(slug=category)

    if cat is None:
        return Response({'message':f'category - {category} not found'}, status=status.HTTP_404_NOT_FOUND)

    prod = Product.objects.filter(category__slug=category).all()
    s = ProductSerializer(prod, many=True)
    return Response({'products':s.data}, status=status.HTTP_200_OK)




@api_view()
def orders(request):
    return Response({'prods':'all orders'})