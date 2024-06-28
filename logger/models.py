from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    barangay = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.user.email} - Profile'
