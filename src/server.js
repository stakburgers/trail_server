const express = require('express');
const { Pool } = require('pg'); // Import the Pool class from pg
const app = express();
const port = process.env.PORT || 3000;

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to retrieve trail coordinates by TrailName
app.get('/trail_coordinates/:trailName', async (req, res) => {
  const { trailName } = req.params; // Get the trailName from the URL parameter

  try {
    const client = await pool.connect(); // Get a connection from the pool

    // Query to retrieve trail coordinates based on the specified TrailName
    const result = await client.query('SELECT * FROM TrailCoordinates WHERE TrailName = $1', [trailName]);

    client.release(); // Release the connection back to the pool

    if (result.rows.length === 0) {
      // If no matching records are found, return a 404 Not Found response
      res.status(404).json({ error: 'Trail not found' });
    } else {
      // Return the query result as JSON
      res.json(result.rows);
    }
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
