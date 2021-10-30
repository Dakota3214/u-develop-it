const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '98Avatar!1998',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

//// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   }); 

//// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });

//// GET all candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// Default response for any other request (Not Found) PUT THIS LAST!!!
app.use((req, res) => {
    res.status(404).end();
  });

// Sends a message to the server and responds with "Hello World" object
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });