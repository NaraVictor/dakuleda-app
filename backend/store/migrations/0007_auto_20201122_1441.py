# Generated by Django 3.1.3 on 2020-11-22 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_auto_20201122_1434'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('description', models.CharField(blank=True, max_length=50)),
                ('image', models.ImageField(upload_to='images/featured_products')),
                ('is_active', models.BooleanField(default=True)),
                ('has_button', models.BooleanField(default=True)),
                ('button_url', models.URLField(blank=True)),
                ('button_text', models.CharField(blank=True, max_length=10)),
                ('date_created', models.DateField(auto_now=True)),
            ],
            options={
                'db_table': 'feature',
            },
        ),
        migrations.DeleteModel(
            name='FeaturedProduct',
        ),
        migrations.RenameField(
            model_name='orderdetail',
            old_name='product_item',
            new_name='product_id',
        ),
    ]
