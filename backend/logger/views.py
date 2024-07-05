from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Profile
from .serializers import ProfileSerializer, UserSerializer

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        user_data = request.data

        if not user_data.get('email') or not user_data.get('password'):
            return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=user_data['email']).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create_user(
                username=user_data['email'],
                email=user_data['email'],
                password=user_data['password'],
                first_name=user_data.get('first_name', ''),
                last_name=user_data.get('last_name', '')
            )
            profile = Profile.objects.create(
                user=user,
                phone=user_data.get('phone', ''),
                barangay=user_data.get('barangay', '')
            )

            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(username=email, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        user_serializer = UserSerializer(user)
        return Response(user_serializer.data)

    def put(self, request, *args, **kwargs):
        user = request.user
        data = request.data

        # Update user fields
        user.first_name = data.get('first_name', user.first_name)
        user.last_name = data.get('last_name', user.last_name)
        user.email = data.get('email', user.email)
        user.save()

        # Update profile fields
        profile_data = data.get('profile', {})
        profile_serializer = ProfileSerializer(user.profile, data=profile_data, partial=True)
        if profile_serializer.is_valid():
            profile_serializer.save()
            return Response(UserSerializer(user).data)
        return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        user = request.user
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)