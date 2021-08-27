#include<vector>
#include "magic_square.hpp"
#include<iostream>
bool isPartialyMagic(const std::vector<std::vector<int>>&p,int i,int n){
    bool res=true;
    int axisX=0;
    int axisY=0;
    if(i==n-1){
        //console.log("entre");
        for(int k=0;k<n;k++){
            axisX+=p[0][k];
        }
    }
    //console.log(p,axisX,p[0]);
    
    for(int k=0;k<n;k++){
        axisY+=p[k][0];
    }
    //console.log(axisY);
    
    for(int k=0;k<=i;k++){
        int tmpY=0;
        for(int t=0;t<n;t++){
            tmpY+=p[t][k];
        }
        //console.log(k,tmpY,axisY);
        res=res && tmpY==axisY;
    }
    if(i==n-1){
        for(int k=1;k<n;k++){
            int tmpX=0;
            for(int t=0;t<n;t++){
                tmpX+=p[k][t];
            }
            res=res && tmpX==axisX;
        } 
    }
    return res;
    }
bool isMagic(const std::vector<std::vector<int>>&p,int n){
    int diagonal1=0;
    int diagonal2=0;
    for(int k=0;k<n;k++){
        diagonal1+=p[k][k];
        diagonal2+=p[k][n-k-1];
    }
    return diagonal1==diagonal2 && isPartialyMagic(p,n-1,n);
    }

void magic_square(std::vector<std::vector<int>>&p,
            int i,int j,int n,bool &exist, 
            void(*setter)(const std::vector<std::vector<int>>&)){
    //std::cout<<"1";
    if(j==n-1){
        if(!isPartialyMagic(p,i,n))return;
        if(i==n-1){
            if(isMagic(p,n)){
                setter(p);
                exist=true;
                return;
            }else{return;}
        }
        j=0;
        i++;
    }else{
        j++;
    }
    for(int m=0;m<n*n;m++){
        p[i][j]=m;
        magic_square(p,i,j,n,exist,setter);
        if(exist)return;
    }
    return;
}