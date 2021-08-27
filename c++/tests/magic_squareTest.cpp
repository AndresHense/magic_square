#include <gtest/gtest.h>
#include "../magic_square.hpp"

bool isContained(const std::vector<int>&a,const std::vector<std::vector<int>>&b){

    bool res=false;
    for(int j=0;j<b.size();j++){
        res |= a.size()==b[j].size() &&
        a==b[j];
    }
    return res;
}
bool isMatrixEqual(const std::vector<std::vector<int>>&a,const std::vector<std::vector<int>>&b){
    bool res=false;
    for(int i=0;i<a.size();i++){
        res=res||isContained(a[i],{b[i]});
    }
    return res;
}

std::vector<std::vector<int>> sol={
        {-1,-1,-1},
        {-2,-1,-1},
        {-1,-1,-1}
    };
void setter(const std::vector<std::vector<int>>& p){
    sol=p;
}

TEST(base_3, primeraOpcion) {
    // 
    bool exist=false;
    
    std::vector<std::vector<int>> result={
        {2,7,6},
        {9,5,1},
        {4,3,8}
    };
    std::vector<std::vector<int>> p={
        {-1,-1,-1},
        {-2,-1,-1},
        {-1,-1,-1}
    };

    magic_square(p,0,0,3,exist,&setter);

    std::vector<std::vector<int>>resultados={{0,1,0},{1,0,1}};
    magic_square(p,0,-1,3,exist,&setter);
    EXPECT_TRUE(isMatrixEqual(sol,result));
}
