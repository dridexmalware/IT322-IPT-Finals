from rest_framework import viewsets
from .models import firstname, lastname, email, password, phone, barangay
from .serializers import firstnameSerializer, lastnameSerializer, emailSerializer, passwordSerializer, phoneSerializer, barangaySerializer

class firstnameViewSet(viewsets.ModelViewSet):
    queryset = firstname.objects.all()
    serializer_class = firstnameSerializer

class lastnameViewSet(viewsets.ModelViewSet):
    queryset = lastname.objects.all()
    serializer_class = lastnameSerializer

class emailViewSet(viewsets.ModelViewSet):
    queryset = email.objects.all()
    serializer_class = emailSerializer

class passwordViewSet(viewsets.ModelViewSet):
    queryset = password.objects.all()
    serializer_class = passwordSerializer

class phoneViewSet(viewsets.ModelViewSet):
    queryset = phone.objects.all()
    serializer_class = phoneSerializer

class barangayViewSet(viewsets.ModelViewSet):
    queryset = barangay.objects.all()
    serializer_class = barangaySerializer