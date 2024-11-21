import datetime
from django.shortcuts import render
from django.http import JsonResponse

def candlestick_data(request):
    data = {
    "candle_data": [
             {"x":  datetime(2023, 1, 1), "o": 30, "h": 40, "l": 25, "c": 35},
             {"x":  datetime(2023, 1, 2), "o": 35, "h": 45, "l": 30, "c": 40},
             {"x":  datetime(2023, 1, 3), "o": 40, "h": 50, "l": 35, "c": 45},
             {"x":  datetime(2023, 1, 4), "o": 45, "h": 55, "l": 40, "c": 50},
        ]
        
    }
    return JsonResponse(data)


def linechart_data(request):
    data = {
        "labels": ["January", "February", "March", "April"],
        "values": [10, 15, 7, 12]
    }
    return JsonResponse(data)


def barchart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "values": [5, 10, 3]
    }
    return JsonResponse(data)


def piechart_data(request):
    data = {
    "labels": ["Red","Green", "Blue"],
    "values": [10, 20, 30]
    }
    return JsonResponse(data)