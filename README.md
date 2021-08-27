# Subset Sum Problem

## dependencies

* Install dependencies.

```bash
sudo apt install libgtest-dev build-essentials cmake nodejs npm perl
```

* Compile gtest.

```bash
cd /usr/src/gtest
sudo cmake CMakeLists.txt
sudo make
 
# copy or symlink libgtest.a and libgtest_main.a to your /usr/lib folder
cd lib
sudo cp *.a /usr/lib
```

## building

```bash
cd subset_sum/c++
perl prln.pl -cmk
cmake . -B build
cd build
make .
```
