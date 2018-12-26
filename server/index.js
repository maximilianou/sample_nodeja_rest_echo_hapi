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
                return 'Hello, Javascript Developer! ! !\n';
            }
        });        
        this.server.route({
            method: 'GET',
            path: '/{name}',
            handler: (request, h) => {
                return 'Hello, ' + encodeURIComponent(request.params.name) + '!\n';
            }
        });
        this.server.route({
            method: 'POST',
            path: '/msg',
            handler: (request, h) => {
                return "POSTing:: "+JSON.stringify(request.payload) + '\n';
            }
        });
        this.server.route({
            method: 'PUT',
            path: '/msg',
            handler: (request, h) => {
                return "PUTing:: "+JSON.stringify(request.payload) + '\n';
            }
        });
        this.server.route({
            method: 'DELETE',
            path: '/{name}',
            handler: (request, h) => {
                return 'Bye, ' + encodeURIComponent(request.params.name) + '!\n';
            }
        });
    }
}
/* LOOK THIS COMMENT, NO localhost, just 0.0.0.0 */
/*const firstEchoServer = new EchoServerHapi({
    port: 3001,
    host: 'localhost',
    app: {}
  });*/
  const firstEchoServer = new EchoServerHapi({
    port: 3001,
    host: '0.0.0.0',
    app: {}
  });

firstEchoServer.init();
