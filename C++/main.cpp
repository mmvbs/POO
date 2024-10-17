#include<iostream>

using namespace std;
class calc
{
    public:
    int add(int a,int b)
    {
        return a+b;
    }
    int sub(int a, int b){
        return a-b;
    }

};

int main()
{
    calc cal;
    cout<< ("1 para soma e 2 para subtração e 0 para sair");
    int expression;
    cin>>expression;
    switch (expression)
    {
    case 1:
        int a;
        int b;
        cout<< ("Digite o primeiro numero")<<endl;
        cin>>a;
        cout<< ("Digite o segundo numero")<<endl;
        cin>>b;
        cout<< ("Resultado: ")<<endl;
        cout<<cal.add(a,b);
        break;
    case 2:
        int c;
        int d;
        cout<< ("Digite o primeiro numero")<<endl;
        cin>>c;
        cout<< ("Digite o segundo numero")<<endl;
        cin>>d;
        cout<< ("Resultado: ");
        cout<<cal.sub(c,d);
        break;
    case 0:
        cout<< ("Saindo...")<<endl;
        break;
    default:
        cout<< ("Opção inválida")<<endl;
        break;
    }
    return 0;
}