from django.shortcuts import render
from django.views.generic import View


class IndexView(View):
  def get(self, request, *args, **kwargs):
    print('haaaa')
    return render(request, 'index.html')