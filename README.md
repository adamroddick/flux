# node-tut-library
1. Install npm: ```brew install npm```
2. Install nvm: ```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash```
3. Install Node: ```nvm install node 9.9.0```
4. Default the nvm Node version: ```nvm alias default 9.9.0```
5. Check versions: ```node -v``` | ```nvm --version``` | ```npm -v```
6. ```git init```
7. ```npm init``` 
8. Run with ```npm start``` or ```node app.js``` or ```DEBUG=* node app.js```

# Notes on modules in use
- 'chalk' lets you do colorful text outputs in the console ```    debug(`Hi Adam, listening on port ${chalk.green('3000')}`);```

- 'debug' hides debug messages unless running in DEBUG mode: ```DEBUG=* node app.js``` or if you only want to see your own DEBUG messages: ```DEBUG=app node app.js```

- 'morgan' gives some nice web traffic information, GET requests and responses etc

- 'path' comes with Node and lets you use things like path.join: ```path.join(__dirname, '/node_modules/bootstrap/dist/css')``` which nicely handles slashes and concatenation.

- 'nodemon' (node mon)

- 'eslint' - 



# Notes to remember
- To tell Express where it might find static files for the /js directory other than the actual /js directory: ```app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));```

- ```npm start``` -

- ```nodemon``` - 

- npm scripts always assume local so an npm script with ```eslint app.js``` is actually running ```./node_modules/.bin/eslint```

- https://node.green/ website has a matrix showing Node.js ES Support functionality across versions