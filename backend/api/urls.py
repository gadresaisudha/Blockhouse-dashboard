from django.urls import path
from .views import candlestick_data, linechart_data, barchart_data, piechart_data

urlpatterns = [
    path('candlestick-chart-data/', candlestick_data, name='candlestick_data'),
    path('line-chart-data/', linechart_data, name='linechart_data'),
    path('bar-chart-data/', barchart_data, name='barchart_data'),
    path('pie-chart-data/', piechart_data, name='piechart_data'),
]