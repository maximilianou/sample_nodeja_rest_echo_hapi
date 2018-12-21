# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

<pre>

1. At first, we create the repository, i'm using bitbucket and mercurial

2. We clone the repository localy

educacion@educacion:~/src/resthapi$ hg clone https://bitbucket.org/maximilianou/rest_echo_hapi/

3. List this folder to see the files.

educacion@educacion:~/src/resthapi$ ls
rest_echo_hapi

4. Change Dir, inside where you will have the code.

educacion@educacion:~/src/resthapi$ cd rest_echo_hapi/

educacion@educacion:~/src/resthapi/rest_echo_hapi$ ls -a
.  ..  .hg  LICENSE.txt  README.md

5. Create the package.json

educacion@educacion:~/src/resthapi/rest_echo_hapi$ npm init -y

6. let see the repository files status sync
educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg status
? package.json

7. Add new files
educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg add .

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg status
A package.json

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg commit -m 'initial commit' -u maximilianou@gmail.com

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg push

educacion@educacion:~/src/resthapi/rest_echo_hapi$ npm install hapi --save

educacion@educacion:~/src/resthapi/rest_echo_hapi$ vi .hgignore

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg add .
adding .hgignore
adding package-lock.json

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg status
M package.json
A .hgignore
A package-lock.json

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg commit -m 'repository sanity' -u maximilianou@gmail.com

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg push

educacion@educacion:~/src/resthapi/rest_echo_hapi$ mkdir server

educacion@educacion:~/src/resthapi/rest_echo_hapi$ touch server/index.js

educacion@educacion:~/src/resthapi/rest_echo_hapi$ node server/index.js 
Here we have the echo Server Hapi running:: http://localhost:3000

educacion@educacion:~$ curl http://localhost:3000/
{"statusCode":404,"error":"Not Found","message":"Not Found"}

educacion@educacion:~/src/resthapi/rest_echo_hapi$ cat server/index.js 
const Hapi = require('hapi');

class EchoServerHapi{
    constructor(args){
        this.server = Hapi.server(args);
    };
    async init(){
        try {
          await this.server.start();
          console.log(`Here we have the echo Server Hapi running:: ${this.server.info.uri}`);
        } catch (error) {
          console.log('Error while trying to run echo Server Hapi:: ' + error.message);
        }
      };
      
};

const firstEchoServer = new EchoServerHapi({
    port: 3000,
    host: 'localhost',
    app: {}
  });

firstEchoServer.init();


educacion@educacion:~/src/resthapi/rest_echo_hapi$ cat server/index.js 
const Hapi = require('hapi');

class EchoServerHapi{
    constructor(args){
        this.server = Hapi.server(args);
    }
    async init(){
        try {
          await this.routing();
          await this.server.start();
          console.log(`Here we have the echo Server Hapi running:: ${this.server.info.uri}`);
        } catch (error) {
          console.log('Error while trying to run echo Server Hapi:: ' + error.message);
        }
    }
    async routing(){
        this.server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Hello, Javascript Developer!\n';
            }
        });        
        this.server.route({
            method: 'GET',
            path: '/{name}',
            handler: (request, h) => {
                return 'Hello, ' + encodeURIComponent(request.params.name) + '!\n';
            }
        });
    }
}

const firstEchoServer = new EchoServerHapi({
    port: 3000,
    host: 'localhost',
    app: {}
  });

firstEchoServer.init();

educacion@educacion:~/src/resthapi/rest_echo_hapi$ node server/index.js 
Here we have the echo Server Hapi running:: http://localhost:3000

educacion@educacion:~/src/resthapi/rest_echo_hapi$ curl http://localhost:3000/
Hello, Javascript Developer!
educacion@educacion:~/src/resthapi/rest_echo_hapi$ curl http://localhost:3000/Mafalda
Hello, Mafalda!

educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg status
M server/index.js
educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg commit -u maximilianou@gmail.com -m 'Hello URL routing()'
educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg status
educacion@educacion:~/src/resthapi/rest_echo_hapi$ hg push




</pre>
