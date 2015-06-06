var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  console.log();
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

// router is a function:
/*

  function router(req, res, next) {
    router.handle(req, res, next);
  }

 */
module.exports = router;

