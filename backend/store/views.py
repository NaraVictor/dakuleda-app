from .models import Product, ProductCategory
from .serializers import ProductCategorySerializer, ProductSerializer
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
        s = ProductSerializer(prods, context={'request':request}, many=True)
        return Response({'products':s.data}, status=status.HTTP_200_OK)

    # def post():


class Categories(APIView):

    def get(self, request):
        try:

            category = self.request.query_params.get('category')

            if category is None:
                pc = ProductCategorySerializer(
                    ProductCategory.objects.all().order_by('name'),
                    context={'request':request}, 
                    many=True
                    )        
            else:
                pc = ProductCategorySerializer(
                    ProductCategory.objects.get(slug=category.lower()).order_by('name'),
                    context={'request':request},
                 )        

            # prod = Product.objects.filter(category__slug=category).all()

            return Response({'categories':pc.data}, status=status.HTTP_200_OK)

            # else:
            #     prod = Product.objects.filter(category__slug=category).all()
            #     s = ProductSerializer(prod, many=True)        
            #     return Response({'products':s.data}, status=status.HTTP_200_OK)
        except:
            return Response({'message':f'category  not found'}, status=status.HTTP_404_NOT_FOUND)





@api_view()
def orders(request):
    return Response({'prods':'all orders'})