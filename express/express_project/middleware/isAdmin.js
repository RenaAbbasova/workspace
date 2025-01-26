// Middleware de autenticación para proteger el endpoint
function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.type === 'admin') {
      return next();
    }
    res.status(401).send('No autorizado');
  }

module.exports = isAdmin ;  