from xml.etree.ElementInclude import include
from django.urls import path, include
from .views import BlogViewSet
from rest_framework.routers import DefaultRouter

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Blog API",
      default_version='v1',
      description="Blog API",
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()

router.register('posts', BlogViewSet, basename='posts')


urlpatterns = [
    path('', include(router.urls)),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]