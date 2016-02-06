# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 2.4

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canoncical targets will work.
.SUFFIXES:

.SUFFIXES: .hpux_make_needs_suffix_list

# Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# The program to use to edit the cache.
CMAKE_EDIT_COMMAND = /usr/bin/ccmake

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/bhattgopal/dev/cpp/qgis_1.0.2

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/bhattgopal/dev/cpp/qgis_1.0.2/build

# Include any dependencies generated for this target.
include src/providers/memory/CMakeFiles/memoryprovider.dir/depend.make

# Include the progress variables for this target.
include src/providers/memory/CMakeFiles/memoryprovider.dir/progress.make

# Include the compile flags for this target's objects.
include src/providers/memory/CMakeFiles/memoryprovider.dir/flags.make

src/providers/memory/CMakeFiles/memoryprovider.dir/depend.make.mark: src/providers/memory/CMakeFiles/memoryprovider.dir/flags.make
src/providers/memory/CMakeFiles/memoryprovider.dir/depend.make.mark: ../src/providers/memory/qgsmemoryprovider.cpp

src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o: src/providers/memory/CMakeFiles/memoryprovider.dir/flags.make
src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o: ../src/providers/memory/qgsmemoryprovider.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /Users/bhattgopal/dev/cpp/qgis_1.0.2/build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o"
	/usr/bin/c++   $(CXX_FLAGS) -o src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o -c /Users/bhattgopal/dev/cpp/qgis_1.0.2/src/providers/memory/qgsmemoryprovider.cpp

src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.i"
	/usr/bin/c++  $(CXX_FLAGS) -E /Users/bhattgopal/dev/cpp/qgis_1.0.2/src/providers/memory/qgsmemoryprovider.cpp > src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.i

src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.s"
	/usr/bin/c++  $(CXX_FLAGS) -S /Users/bhattgopal/dev/cpp/qgis_1.0.2/src/providers/memory/qgsmemoryprovider.cpp -o src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.s

src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o.requires:

src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o.provides: src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o.requires
	$(MAKE) -f src/providers/memory/CMakeFiles/memoryprovider.dir/build.make src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o.provides.build

src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o.provides.build: src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o

src/providers/memory/CMakeFiles/memoryprovider.dir/depend: src/providers/memory/CMakeFiles/memoryprovider.dir/depend.make.mark

src/providers/memory/CMakeFiles/memoryprovider.dir/depend.make.mark:
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --magenta --bold "Scanning dependencies of target memoryprovider"
	cd /Users/bhattgopal/dev/cpp/qgis_1.0.2/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/bhattgopal/dev/cpp/qgis_1.0.2 /Users/bhattgopal/dev/cpp/qgis_1.0.2/src/providers/memory /Users/bhattgopal/dev/cpp/qgis_1.0.2/build /Users/bhattgopal/dev/cpp/qgis_1.0.2/build/src/providers/memory /Users/bhattgopal/dev/cpp/qgis_1.0.2/build/src/providers/memory/CMakeFiles/memoryprovider.dir/DependInfo.cmake

# Object files for target memoryprovider
memoryprovider_OBJECTS = \
"CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o"

# External object files for target memoryprovider
memoryprovider_EXTERNAL_OBJECTS =

src/providers/memory/libmemoryprovider.so: src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/QtCore.framework
src/providers/memory/libmemoryprovider.so: src/core/libqgis_core.dylib
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/QtGui.framework
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/QtXml.framework
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/QtSvg.framework
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/QtNetwork.framework
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/proj.framework
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/GEOS.framework/unix/lib/libgeos_c.dylib
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/GDAL.framework/Versions/1.5/unix/lib/libgdal.dylib
src/providers/memory/libmemoryprovider.so: /Library/Frameworks/sqlite3.framework
src/providers/memory/libmemoryprovider.so: src/providers/memory/CMakeFiles/memoryprovider.dir/build.make
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX shared module libmemoryprovider.so"
	cd /Users/bhattgopal/dev/cpp/qgis_1.0.2/build/src/providers/memory && $(CMAKE_COMMAND) -P CMakeFiles/memoryprovider.dir/cmake_clean_target.cmake
	cd /Users/bhattgopal/dev/cpp/qgis_1.0.2/build/src/providers/memory && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/memoryprovider.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
src/providers/memory/CMakeFiles/memoryprovider.dir/build: src/providers/memory/libmemoryprovider.so

src/providers/memory/CMakeFiles/memoryprovider.dir/requires: src/providers/memory/CMakeFiles/memoryprovider.dir/qgsmemoryprovider.o.requires

src/providers/memory/CMakeFiles/memoryprovider.dir/clean:
	cd /Users/bhattgopal/dev/cpp/qgis_1.0.2/build/src/providers/memory && $(CMAKE_COMMAND) -P CMakeFiles/memoryprovider.dir/cmake_clean.cmake
