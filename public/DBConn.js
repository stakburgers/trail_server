const express = require('express');
const app = express();
const pg = require('pg');

// Replace with your PostgreSQL connection details
const pool = new pg.Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

// Example endpoint to fetch spatial data
app.get('/fetch-spatial-data', (req, res) => {
  const query = 'SELECT * FROM your_table WHERE ST_Contains(geom, ST_MakePoint($1, $2))';
  const values = [req.query.longitude, req.query.latitude];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(result.rows);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
