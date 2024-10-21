const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10,
});
// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbConnection.promise()
