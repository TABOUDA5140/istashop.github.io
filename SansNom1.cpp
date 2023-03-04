#include<stdio.h>
float x,y,z,t,u,tva,pht,pttc;
const float a=5,b=2.5,c=3,d=10,e=7,ttva=0.2;
main()
{
	scanf("%f",&x);
    scanf("%f",&y);
	scanf("%f",&z);
	scanf("%f",&t);
	scanf("%f",&u);
	pht = (a*x)+(b*y)+(c*z)+(d*t)+(e*u);
	tva = pht*ttva;
	pttc = pht+tva;
    printf("%f",pht);
    printf("%f",tva);
    printf("%f",pttc);
}




