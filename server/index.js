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
                return JSON.stringify('Hello, Javascript Developer');
            }
        });        
        this.server.route({
            method: 'GET',
            path: '/{name}',
            handler: (request, h) => {
                return JSON.stringify('Hello, ' + encodeURIComponent(request.params.name) );
            }
        });
        this.server.route({
            method: 'POST',
            path: '/msg',
            handler: (request, h) => {
                return JSON.stringify(request.payload);
            }
        });
        this.server.route({
            method: 'PUT',
            path: '/msg',
            handler: (request, h) => {
                return JSON.stringify(request.payload);
            }
        });
        this.server.route({
            method: 'DELETE',
            path: '/{name}',
            handler: (request, h) => {
                return JSON.stringify( 'Bye, ' + encodeURIComponent(request.params.name) );
            }
        });
    }
}
const firstEchoServer = new EchoServerHapi({
  port: 3002,
  host: '0.0.0.0',
  app: {}
});
firstEchoServer.init();
