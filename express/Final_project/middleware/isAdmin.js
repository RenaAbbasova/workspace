// Middleware de autenticación para proteger el endpoint
function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.type === 'admin') {
      return next();
    }
    res.redirect('/login');
  }

module.exports = isAdmin ;  