import sql from "mysql";

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

export default db;
