from django.contrib import admin
from .models import firstname, lastname, email, password, phone, barangay

admin.site.register(firstname)
admin.site.register(lastname)
admin.site.register(email)
admin.site.register(password)
admin.site.register(phone)
admin.site.register(barangay)