"""class parent:
    def fun1(self,name):
        self.name=name
    
class child(parent):
    def fun2(self):
        print('child class')
class grand(child):
    def fun3(self,clas):
        self.clas=clas

obj=grand()
obj.fun1('phani')
obj.fun3('10th')
obj.fun2()
print(obj.name,obj.clas)
"""
"""class parent():
    def fun_1(self):
        print('iam parent')
class child_1():
    def fun_2(self):
        print('iam child_1 one')
class child(parent,child_1):
    def fun_3(self):
        print('iam child')

obj=child()
obj.fun_2()
obj.fun_1()
print(obj)"""

"""class A:
    def __init__(self):
        print('A class')
    
    def fun_1(self):
        print('this is fun_1')
class B(A):
    def __init__(self):
        print('this is B')
        super().__init__()
    def fun_2(self):
        print('this is fun_2')

obj=B()"""

"""class A:
    def fun_1(self,a,b):
        return a+b
    
    def fun_1(self,a,b,c=1):
        return a+b+c

obj=A()
print(obj.fun_1(12,10))"""

#method overriding
class A:
    def display(self):
        print('this is clss A')

class B(A):
    def display(self):
        print('this i class B')
        return super().display()

obj=B()
print(obj.display()) 




