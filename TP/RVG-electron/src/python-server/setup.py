from cx_Freeze import setup, Executable

base = None

executables = [Executable("python-rest-server.py", base=base)]

options = {
  'build_exe': {
  },

}

setup(name="python-rest-server", options=options, version="1.0", description='', executables=executables)

# Run with python setup.py build
