from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/',admin.site.urls),
    path('auth/',include('drf_social_oauth2.urls',namespace='drf')),
    
    path('api/', include('api.urls')),
    path('',include('frontend.urls')),
    
]