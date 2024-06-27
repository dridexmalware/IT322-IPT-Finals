from rest_framework.routers import DefaultRouter
from .views import firstnameViewSet, lastnameViewSet, emailViewSet, passwordViewSet, phoneViewSet, barangayViewSet

router = DefaultRouter()
router.register(r'firstnames', firstnameViewSet, basename='firstnames')
router.register(r'lastnames', lastnameViewSet, basename='lastnames')
router.register(r'emails', emailViewSet, basename='emails')
router.register(r'passwords', passwordViewSet, basename='passwords')
router.register(r'phones', phoneViewSet, basename='phones')
router.register(r'barangays', barangayViewSet, basename='barangays')

urlpatterns = router.urls