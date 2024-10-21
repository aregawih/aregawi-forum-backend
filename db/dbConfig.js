const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  user: "sql3739945",
  database: "sql3739945",
  host: "sql3.freesqldatabase.com",
  password: "RzMER7cAtJ",
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
