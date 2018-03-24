# node-tut-library
1. Install npm: ```brew install npm```
2. Install nvm: ```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash```
3. Install Node: ```nvm install node 9.9.0```
4. Default the nvm Node version: ```nvm alias default 9.9.0```
5. Check versions: ```node -v``` | ```nvm --version``` | ```npm -v```
6. ```git init```
7. ```npm init``` 

# Notes on modules in use
Chalk lets you do colorful text outputs in the console.
Debug hides debug messages unless running in DEBUG mode: ```DEBUG=* node app.js``` or if you do don't want to see all the DEBUG messages, just your own: ```DEBUG=app node app.js```
