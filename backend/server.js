const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'classicmodels',
    password: '4149055160Pp!#',
  });

  const app = express()
  app.use(cors())
  app.use(express.json())

  app.listen(5000, () => {
    console.log('CORS-enabled web server listening on port 5000')
  })

  
app.get('/customers', function (req, res) {
    connection.query(
      'SELECT * FROM `customers`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })