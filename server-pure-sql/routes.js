var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
<<<<<<< HEAD
  console.log();
=======
>>>>>>> orm
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

<<<<<<< HEAD
// router is a function:
/*
=======
module.exports = router;

/* router is a function:
>>>>>>> orm

  function router(req, res, next) {
    router.handle(req, res, next);
  }

<<<<<<< HEAD
 */
module.exports = router;

=======
*/
>>>>>>> orm
