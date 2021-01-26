from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import BooleanField, DateField
from backend import settings
from .utils import pending, order_statuses


# https://github.com/justdjango/django-ecommerce/blob/master/core/models.py

# product information
class Product(models.Model):
    name = models.CharField(max_length=150, blank=False, unique=True)
    slug = models.SlugField(blank=True)
    min_stock = models.IntegerField(blank=False, default=0)
    number_in_stock = models.IntegerField(blank=False, default=0)
    description = models.TextField(blank=False)
    product_image = models.ImageField(upload_to='images/products', blank = False)
    purchase_price = models.DecimalField(decimal_places=2, max_digits=9, default=0)
    regular_price = models.DecimalField(decimal_places=2, max_digits=9, default=0, help_text='this is the old or regular price of product in traditional market that the shop is selling against by offering a better price')
    new_price = models.DecimalField(decimal_places=2, max_digits=9, default=0)
    SKU = models.CharField(blank=True, max_length=20)
    product_video = models.FileField(upload_to='videos/products', blank=True)
    purchase_notes = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    gift_eligible = models.BooleanField(default=False)
    free_delivery = models.BooleanField(default=False)


    # foreign keys
    manufacturer = models.ForeignKey('Manufacturer', on_delete=models.RESTRICT)
    category = models.ForeignKey('ProductCategory', on_delete=models.RESTRICT)
    sub_category = models.ForeignKey('SubCategory', on_delete=models.SET_NULL, null=True, blank=True)
    # stock_status = models.ForeignKey('StockStatus', on_delete=models.RESTRICT)
    # price_schedule = models.OneToOneField('PriceSchedule',on_delete=models.SET_NULL, blank=True)
    # tax_status = models.ForeignKey('TaxStatus', on_delete=models.RESTRICT)
    # tax_class = models.ForeignKey('TaxClass', on_delete=models.SET_NULL, blank=True)
    # deals = models.ManyToManyField('Deal')
    gallery = models.ForeignKey('ProductGallery', on_delete=models.SET_NULL,  null=True, blank=True)
    tags = models.ManyToManyField('Tag', blank=True)
    reviews = models.ForeignKey('ProductReview', on_delete=models.SET_NULL, blank=True, null=True)
    ratings = models.ForeignKey('ProductRating', on_delete=models.SET_NULL, blank=True, null=True)
    gifts = models.ForeignKey('Gift', on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        db_table = 'products'
    
    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = self.name.replace(" ", "-").lower()
        super(Product, self).save(*args, **kwargs)

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('product_name', args=[str(self.name)])

    @property
    def deadline_elapsed(self):
        return False
    
# detailed features of products. e.g. year: 2020, model:Q90, capacity: ... etc
# these details and titles vary btw products
class ProductFeature(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=False)
    feature = models.CharField(max_length=300, blank=False)

    def __str__(self):
        return f"{self.title} - {self.feature}"

# categories super class
class Category(models.Model):
    name = models.CharField(blank=False, max_length=150)
    image = models.ImageField(upload_to="images/category", blank = False)
    description = models.TextField(blank=True)
    slug = models.SlugField(unique=True, blank=True, default='')

    class Meta:
        abstract = True

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = self.name.replace(" ", "-").lower()
        super(Category, self).save(*args, **kwargs)


# category of product
class ProductCategory(Category):
    class Meta(Category.Meta):
        db_table = 'product_categories'


# a subcategory of main category
class SubCategory(Category):
    name = models.CharField(max_length=100)
    related_category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)

    class Meta(Category.Meta):
        db_table = 'subcategories'


# manufacturer product e.g. Haojin, Techno, Samsung etc
class Manufacturer(models.Model):
    name = models.CharField(max_length=200, blank=False)
    email = models.EmailField(blank=True)
    website = models.URLField(blank=True)
    description = models.TextField(blank=True)

    class Meta:
        db_table = 'manufactureres'

    def __str__(self):
        return self.name


# description here
class ProductDeal(models.Model):
    title = models.CharField(max_length=200, blank=False)
    description = models.TextField()

    class Meta:
        db_table = 'product_deals'

    def __str__(self):
        return self.title


# images for a product
class ProductGallery(models.Model):
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/gallery/products')
    date = models.DateField(auto_now=True)
    time = models.TimeField(auto_now=True)

    class Meta:
        db_table = 'product_gallery'

    def __str__(self):
        return self.item.name


# tags associated with products which could be used for searching
class Tag(models.Model):
    tag_name = models.CharField(max_length=150, blank=False)
    date = DateField(auto_now=True)

    class Meta:
        db_table = 'product_tags'

    def __str__(self):
        return self.tag_name



# promotional prices attached to a particular product. where prices can be automated for a period of time
# e.g. btw jan 01-30, motor prices are 3k then back to normal after that
class PriceSchedule(models.Model):
    product_item  = models.IntegerField(blank=False, primary_key=True)
    start_date = models.DateField(auto_now=True, blank=False)
    end_date = models.DateField(auto_now=True, blank=False)

    class Meta:
        db_table = 'price_schedules'

    def __str__(self):
        return self.product_item


# super class
class Tax(models.Model):
    name = models.TextField(blank=False, max_length=150, unique=True)
    date_created = models.DateField(auto_now=True, blank=False)

    class Meta:
        abstract = True
    
    def __str__(self):
        return self.name


# tax placed on product e.g.
class TaxStatus(Tax):
    class Meta(Tax.Meta):
        db_table = 'tax_statuses'

# class of tax e.g.
class TaxClass(Tax):
    class Meta(Tax.Meta):
        db_table = 'tax_classes'

# stock level designations of product
class StockStatus(Tax):
    class Meta(Tax.Meta):
        db_table = 'stock_status'


# feedback from customers about a product
# super class
class ProductCritic(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    name = models.TextField(blank=False, max_length=150)
    email = models.EmailField(max_length=200, blank=True)
    date = models.DateField(blank=False, auto_now=True)

    class Meta:
        abstract = True
    
    def __str__(self):
        return self.name


# comments/review of product
class ProductReview(ProductCritic):
    comment = models.TextField()
    
    class Meta(ProductCritic.Meta):
        db_table = 'product_reviews'


# rating of product
class ProductRating(ProductCritic):
    rating = models.IntegerField(default=1, blank=False)

    class Meta(ProductCritic.Meta):
        db_table = 'product_ratings'


# re-evaluate coupon automatic generation system
# gifts/presents/promotions 
class Gift(models.Model):
    title = models.CharField(max_length=200, blank=False)
    code = models.CharField(max_length=15, blank=False, primary_key=True, unique=True)
    description = models.TextField(blank=False)
    amount = models.DecimalField(max_digits=9, decimal_places=2, default=0, blank=False, help_text='monetary worth of code')
    start_date = models.DateField(blank=False, auto_now=True)
    end_date = models.DateField(blank=False)

    class Meta:
        db_table = 'gifts'

    def __str__(self):
        return self.title


# order
class Order(models.Model):
    date = models.DateField(auto_now=True, blank=False)
    time = models.TimeField(auto_now=True, blank=False)
    amount_paid = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    is_user = models.BooleanField(default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    invoice_number = models.CharField(max_length=20, blank=False)
    gift_id = models.ForeignKey(Gift, on_delete=models.CASCADE, blank=True)
    status = models.IntegerField(choices=order_statuses, default=pending) #fulfilled, pending, cancelled

    class Meta:
        db_table = 'orders'

    def __str__(self):
        return self.date


# details of order items
class OrderDetail(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    quantity = models.IntegerField(default=0)
    
    class Meta:
        db_table = 'order_details'

# refund request
class Refund(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    reason = models.TextField()
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return self.pk


#  slider products
class Feature (models.Model):
    title = models.CharField(max_length=20, blank=False)
    description = models.CharField(max_length=50, blank=True)
    image = models.ImageField(upload_to='images/featured_products')
    is_active = models.BooleanField(default=True)
    has_button = BooleanField(default=True)
    button_url = models.URLField(blank=True)
    button_text = models.CharField(max_length=10, blank=True)
    date_created = models.DateField(auto_now=True)

    class Meta:
        db_table = 'feature'
    
    def __str__(self):
        return self.title


# dakuleda.com profile info
class Company(models.Model):
    company_name = models.CharField(max_length=250, blank=False, unique=True)
    description = models.TextField(max_length=300, blank=False)
    invoice_abbreviation = models.CharField(max_length=5, blank=False)
    address = models.CharField(max_length=200)
    mobile_contact = models.CharField(max_length=15)
    office_contact = models.CharField(max_length=15)
    logo = models.ImageField(upload_to="images/logos")
    email = models.EmailField()
    facebook = models.URLField()
    twitter = models.URLField()
    website = models.URLField()

    class Meta:
        db_table = 'company'

    def __str__(self):
        return self.company_name

