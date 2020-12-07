# django
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db import models



class User(AbstractUser):
    gender = models.CharField(max_length=10, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True)

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        db_table = "users"

