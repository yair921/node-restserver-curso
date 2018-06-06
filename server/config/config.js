// ===========================
// Puerto
// ===========================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// Entorno
// ===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===========================
// Base de datos
// ===========================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb://cafe-user:abc123@ds017726.mlab.com:17726/cafe';
}
process.env.URLDB = urlDB;
// mongodb://localhost:27017/cafe
// mongodb://<dbuser>:<dbpassword>@ds017726.mlab.com:17726/cafe