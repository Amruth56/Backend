from django.shortcuts import render, get_object_or_404
from employees.models import Employee
from django.http import Http404, HttpResponse

# Create your views here.

def employee_detail(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    print(employee)
    context = {
        'employee': employee
    }
    return render(request, 'employee_detail.html', context)
    # try:
    #     employee = Employee.objects.get(pk = pk)
    #     print(employee)
    # except:
    #     raise Http404("Employee not found") 