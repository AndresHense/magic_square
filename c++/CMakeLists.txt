project(cmake_generated)
cmake_minimum_required(VERSION 3.10)
set(INCROOT ${CMAKE_CURRENT_SOURCE_DIR}/)
set(SRCROOT ${CMAKE_CURRENT_SOURCE_DIR}/)
set(DIRROOT ${CMAKE_CURRENT_SOURCE_DIR}/)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR})
set(OUT_NAME main)
set(CMAKE_CXX_FLAGS"${CMAKE_CXX_FLAGS} -Wall -g")
find_package(GTest REQUIRED)
set(LIBS ${GTEST_LIBRARIES} pthread)
set(FILES_HEADER
	${INCROOT}/magic_square.hpp
)
set(FILES_SRC
	${SRCROOT}/tests/magic_squareTest.cpp
	${SRCROOT}/magic_square.cpp
	${SRCROOT}/main.cpp
)
set(FILES_DIR
	${DIRROOT}/
)
include_directories(${FILES_DIR},${GTEST_INCLUDE_DIRS})
add_executable(${OUT_NAME} ${FILES_SRC})
target_link_libraries(${OUT_NAME} ${LIBS})
