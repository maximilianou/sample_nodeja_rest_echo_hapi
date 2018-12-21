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