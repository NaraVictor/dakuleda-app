from os import stat, truncate
from .models import ( Product, ProductCategory, ProductFeature, ProductGallery)
from .serializers import (ProductCategorySerializer, ProductFeatureSerializer, ProductGallerySerializer, ProductSerializer)
from rest_framework import request, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
# Create your views here.


@api_view()
def api_root(request):
    return Response({'message':'welcome to dakuleda.com api root by nara victor 😊'})


class Products(APIView):
    
    def get(self, request):
        try:

            prods=""
            _slug = self.request.query_params.get('slug')

            if _slug:
                prods = Product.objects.get(is_active=True, number_in_stock__gt=0,slug=_slug) 
                s = ProductSerializer(prods, context={'request':request})
                return Response(s.data, status=status.HTTP_200_OK)
            else:
                prods = Product.objects.filter(is_active=True, number_in_stock__gt=0).all()
                s = ProductSerializer(prods, context={'request':request}, many=True)
                return Response({'products':s.data}, status=status.HTTP_200_OK)

        except Product.DoesNotExist as e:
                return Response({'message':"product not found"}, status=status.HTTP_404_NOT_FOUND)




    # def post():


class ProductFeatures(APIView):

    def get(self, request, product_id=None):
        # try:
        _id = self.kwargs.get('product_id')
        
        if _id:
            f = ProductFeatureSerializer(
            ProductFeature.objects.filter(product_id=_id).all(),
            many=True
            )
            return Response({'features': f.data}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'product features not found.'}, status=status.HTTP_404_NOT_FOUND)

        # except:
        #     return Response({'message': 'Sorry, an error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


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
            return Response({'message': 'category  not found'}, status=status.HTTP_404_NOT_FOUND)





class SimilarProducts(APIView):

    def get(self, request, category=None):
        try:
            _category = self.kwargs.get('category')
            _category = _category.replace(" ", "-").lower()

            if _category:
                sp = Product.objects.filter(category__slug=_category).all()[:12]

                if sp:
                    s = ProductSerializer(sp, context={'request':request} , many=True)
                    return Response({'similar products':s.data}, status=status.HTTP_200_OK)

                p = ProductSerializer(Product.objects.all()[:12],context={'request':request}, many=True)
                return Response({'similar products':p.data}, status=status.HTTP_200_OK)
            
            else:
                p = ProductSerializer(Product.objects.all()[:12], context={'request':request}, many=True)
                return Response({'similar products':p.data}, status=status.HTTP_200_OK)
        except:
            return Response({'message':"an error occurred"})






class ProductGalleryView(APIView):
    
    def get(self, request, product_id):
        
        _id = self.kwargs.get('product_id')

        if _id:
            g = ProductGallery.objects.filter(item=_id).all()[:3]
            s = ProductGallerySerializer(g, context={'request':request}, many=True)
            return Response({'gallery':s.data}, status=status.HTTP_200_OK)
        else:
            return Response({'message':'An error occurred'})




class ProductsByCategory(APIView):

    def get(self, request, slug):

        try:
            _slug = self.kwargs.get('slug')

            if _slug:
                p = Product.objects.filter(category__slug=_slug).all()[:30]

                if p:
                    s = ProductSerializer(p, context={'request':request}, many=True)
                    return Response({'products':s.data}, status=status.HTTP_200_OK)
                
                s = ProductSerializer(Product.objects.all()[:30], context={'request':request}, many=True)
                return Response({'products':s.data}, status=status.HTTP_200_OK)

            else:
                s = ProductSerializer(Product.objects.all()[:30], context={'request':request}, many=True)
                return Response({'products':s.data}, status=status.HTTP_200_OK)

        except:
            return Response({'message':'an error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




@api_view()
def orders(request):
    return Response({'prods':'all orders'})


class CheckOut(APIView):

    def get(self, request):
        return Response({'message':'this endpoint does not support GET requests'}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        return Response({'message':'checkout successful'}, status=status.HTTP_201_CREATED)
