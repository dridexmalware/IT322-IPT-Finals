from rest_framework import serializers
from .models import firstname, lastname, email, password, phone, barangay

class firstnameSerializer(serializers.ModelSerializer):
    class Meta:
        model = firstname
        fields = '__all__'

class lastnameSerializer(serializers.ModelSerializer):
    class Meta:
        model = lastname
        fields = '__all__'

class emailSerializer(serializers.ModelSerializer):
    class Meta:
        model = email
        fields = '__all__'

class passwordSerializer(serializers.ModelSerializer):
    class Meta:
        model = password
        fields = '__all__'

class phoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = phone
        fields = '__all__'

class barangaySerializer(serializers.ModelSerializer):
    class Meta:
        model = barangay
        fields = '__all__'