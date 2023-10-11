const express = require('express');
const { Pool } = require('pg'); // Import the Pool class from pg
const app = express();
const port = process.env.PORT || 3000;
const wkx = require('wkx');

// Create a PostgreSQL connection pool
// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DOCData',
  password: 'Group03',
  port: 5432,
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to fetch trail coordinates
app.get('/trail_coordinates/:trailName', async (req, res) => {
  const trailName = req.params.trailName;
  var ogc_fid = 69;
  //if(trailName == 'albany'){ogc_fid = 69;}
  var s = 'SELECT wkb_geometry FROM docdatatable WHERE ogc_fid = '+[ogc_fid];
  try {
      // Query your database to retrieve the binary geometries based on the trail name
      const result = await pool.query(
          'SELECT wkb_geometry FROM docdatatable WHERE ogc_fid = $1',
          [ogc_fid]
      );

      const geoJSON = result.rows.map((row) => {
          const wktGeometry = row.wkb_geometry;
          //would convert here
          return {
              geometry: wktGeometry,
          };
      });

      //Respond with the GeoJSON data
      res.json(geoJSON);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});