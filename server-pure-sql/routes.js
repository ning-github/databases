var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}


module.exports = router;

/* router is a function:

  function router(req, res, next) {
    router.handle(req, res, next);
  }

*/
