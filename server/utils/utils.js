
exports.isLoggedIn = function (req) {
  //return req.session ? !!req.session.user : false;
  return true;
};

exports.createSession = function(req, res, newUser, uid) {
  return req.session.regenerate(function () {
    req.session.user = newUser;
    req.session.uid = uid;
    //res.redirect(200, '/');
  });
};

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)){
    res.redirect('/');
  } else {
    next();
  }
};