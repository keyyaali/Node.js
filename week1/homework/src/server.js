'use strict';

const response= require('response');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;
  let home = 'Home';
  let error = 'Not found';

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    switch (request.url) {
      case '/':
        sendResponse(response, 'Home', 200);
        sendResponse(response, {
          home: home
        }, 200);
        break;
      case '/state':
        sendResponse(response, {
          state: state
        }, 200);
        break;
      case '/add':
        state++;
        sendResponse(response, {
          state: state
        }, 200);
        break;
      case '/subtract':
        state--;
        sendResponse(response, {
          state: state
        }, 200);
        break;
      case '/reset':
        state = 10;
        sendResponse(response, {
          state: state
        }, 200);
        break;
      default:
        sendResponse(response, {
          error: error
        }, 404);
        break;
    }
    }
  });