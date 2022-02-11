from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('api/', include('api.urls')),
    path('admin/',admin.site.urls),
    path('',include('frontend.urls'))
]