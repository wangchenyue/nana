from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
import requests
import json
def index(request):
    print(request)
    return render(request, 'index.html',{'question':'question'})

def index_ajax(request):
    data={
	"reqType":0,
    "perception": {
        "inputText": {
            "text": request.GET.get('value')
        },
        "inputImage": {
            "url": "imageUrl"
        },
        "selfInfo": {
            "location": {
                "city": "上海",
                "province": "上海",
                "street": "聚丰园路"
            }
        }
    },
    "userInfo": {
        "apiKey": "5f93e2e298df4af29f3b68c5b75cf521",
        "userId": "267873"
    }
	}
    data=json.dumps(data)
    url="http://openapi.tuling123.com/openapi/api/v2"
    req=requests.post(url, data)
    print(req)
    return HttpResponse(req)