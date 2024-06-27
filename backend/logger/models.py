from django.db import models

class firstname(models.Model):
    keys = models.CharField(max_length=255)
    datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.keys

class lastname(models.Model):
    keys = models.CharField(max_length=255)
    datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.keys

class email(models.Model):
    keys = models.CharField(max_length=255)
    datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.keys
    
class password(models.Model):
    keys = models.CharField(max_length=255)
    datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.keys

class phone(models.Model):
    keys = models.IntegerField()
    datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.keys)
    
class barangay(models.Model):
    keys = models.CharField(max_length=255)
    datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.keys