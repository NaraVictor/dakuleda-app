from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Product)
admin.site.register(ProductFeature)
admin.site.register(ProductCategory)
admin.site.register(ProductGallery)
admin.site.register(ProductReview)

admin.site.register(SubCategory)
admin.site.register(Manufacturer)
admin.site.register(Tag)
admin.site.register(StockStatus)
admin.site.register(Order)
admin.site.register(OrderDetail)
admin.site.register(Feature)

# disabled temporarily
# admin.site.register(Gift)
# admin.site.register(ProductDeal)
# admin.site.register(ProductRating)
# admin.site.register(PriceSchedule)
# admin.site.register(TaxStatus)
# admin.site.register(TaxClass)
# admin.site.register(Refund)
# admin.site.register(Company)