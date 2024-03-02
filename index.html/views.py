from django.shortcuts import render

def form(requets):
  context ={
  }
  return render(requets, 'formulario.html',context)