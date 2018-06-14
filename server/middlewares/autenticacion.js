const jwt = require('jsonwebtoken');
//=====================
// Verificar token
//=====================

let verificaToken = (req, res, next) => {
  let token = req.get('token');
  let SEED =
    jwt.verify(token, process.env.SEED, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err: 'Token no válido'
        });
      }
      req.usuario = decoded.usuario;
      next();
    });
};

//=====================
// Verifica AdminRole
//=====================

let verificaAdmin_Role = (req, res, next) => {

  let usuario = req.usuario;
  if (usuario.role === 'ADMIN_ROLE') {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      err: 'El usuario no es administrador'
    });
  }

}

module.exports = {
  verificaToken,
  verificaAdmin_Role
}