#include<vector>

void magic_square(std::vector<std::vector<int>>&p,
            int i,int j,int n,bool &exist, 
            void(*setter)(const std::vector<std::vector<int>>&));

bool isPartialyMagic(const std::vector<std::vector<int>>&p,
            int i,int n);
bool isMagic(const std::vector<std::vector<int>>&p,
            int n);