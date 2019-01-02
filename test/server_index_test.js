process.env.NODE_ENV = 'test';

//const server = require('../server/index');
//const https = require('https');
//const https = require('http');
// https://www.npmjs.com/package/node-fetch
//{
  // These properties are part of the Fetch Standard
//  method: 'GET',
//  headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
//  body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
//  redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect
//  signal: null,       // pass an instance of AbortSignal to optionally abort requests

  // The following properties are node-fetch extensions
//  follow: 20,         // maximum redirect count. 0 to not follow redirect
//  timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies). Signal is recommended instead.
//  compress: true,     // support gzip/deflate content encoding. false to disable
//  size: 0,            // maximum response body size in bytes. 0 to disable
//  agent: null         // http(s).Agent instance, allows custom proxy, certificate, dns lookup etc.
//}
const assert = require('assert');
const fetch = require('node-fetch');

process.env.API_PORT = process.env.API_PORT || 3003;

describe('routes :: server', () => {

  describe('method http GET /', () => {
    it('should return text', (done) => {
      const thevalue = "Mafalda";
      fetch( 'http://127.0.0.1:' + process.env.API_PORT + '/'+thevalue
      ).then( res => res.text() 
      ).then(
        (body) => {
          assert.ok( new RegExp(thevalue+"$").test(
            JSON.parse(body)) , ":::Data Error!!!");
          done();
        }
      ).catch(done);
      });
    });      
  describe('method http POST /', () => {
    it('should return text', (done) => {
      const thevalue = "Larguirucho";
      fetch(
        'http://127.0.0.1:' + process.env.API_PORT + '/msg', {
          method: 'POST',
          body:    JSON.stringify(thevalue),
          headers: { 'Content-Type': 'application/json' },
      }        
      ).then( res => res.text() 
      ).then(
        (body) => {
          assert.ok( new RegExp(thevalue+"$").test(
            JSON.parse(body)) , ":::Data Error!!!");
          done();
        }
      ).catch(done);
    });
  });
  describe('metodo http PUT /', () => {
    it('should return text', (done) => {
      const thevalue = "Profesor Neurus";
      fetch(
        'http://127.0.0.1:' + process.env.API_PORT + '/msg', {
          method: 'PUT',
          body:    JSON.stringify(thevalue),
          headers: { 'Content-Type': 'application/json' },
      }        
      ).then( res => res.text() 
      ).then(
        (body) => {
          assert.ok( new RegExp(thevalue+"$").test(
            JSON.parse(body)) , ":::Data Error!!!");
          done();
        }
      ).catch(done);
    });
  });  
  describe('metodo http DELETE /', () => {
    it('should return text', (done) => {
      const thevalue = "Pedrito";
      fetch( 'http://127.0.0.1:' + process.env.API_PORT + '/'+thevalue
      ).then( res => res.text() 
      ).then(
        (body) => {
          assert.ok( new RegExp(thevalue+"$").test(
            JSON.parse(body)) , ":::Data Error!!!");
          done();
        }
      ).catch(done);
    });
  });
});

