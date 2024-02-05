import db from "../configdb.js";

export const getUser = async (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

export const createUser = async (req, res) => {
  const sql =
    "INSERT INTO user (`fullName`,`age`) VALUES ('" +
    req.body.fullName +
    "','" +
    req.body.age +
    "')";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("User added successfully");
  });
};

export const updateUser = async (req, res) => {
  const sql = `UPDATE user SET fullName = '${req.body.fullName}', age = '${req.body.age}' WHERE id = ${req.body.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("User updated successfully");
  });
};

export const deleteUser = async (req, res) => {
  const sql = `DELETE FROM user WHERE id = ${req.body.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("User deleted successfully");
  });
};
