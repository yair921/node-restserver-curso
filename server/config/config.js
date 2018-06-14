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
  urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
// mongodb://localhost:27017/cafe
// mongodb://<dbuser>:<dbpassword>@ds017726.mlab.com:17726/cafe

// ===========================
// Vencimiento del token
// ===========================
// 60 segundos
// 60 min
// 24 hrs
// 30 days
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===========================
// SEED de autenticación
// ===========================
// 60 segundos
// 60 min
// 24 hrs
// 30 days
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
