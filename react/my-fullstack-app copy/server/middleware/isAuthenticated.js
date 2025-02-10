// Middleware para verificar si el usuario está autenticado
function isAuthenticated(req, res, next) {
    if (req.session.user) {
      return next();
    }
    return res.redirect('/login');
  }
  
module.exports = isAuthenticated;