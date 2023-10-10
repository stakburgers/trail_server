const express = require('express');
const { Pool } = require('pg'); // Import the Pool class from pg
const app = express();
const port = process.env.PORT || 3000;

// Create a PostgreSQL connection pool
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

// Define a route to fetch trail coordinates
app.get('/trail_coordinates/:trailName', async (req, res) => {
  const trailName = req.params.trailName;

  try {
      // Query your database to retrieve the binary geometries based on the trail name
      const result = await pool.query(
          'SELECT wkb_geometry FROM your_table WHERE trail_name = $1',
          [trailName]
      );

      // Convert binary geometries to GeoJSON
      const geoJSONFeatures = result.rows.map((row) => {
          const wktGeometry = row.wkb_geometry;
          const geoJSONGeometry = wellknown(wktGeometry); // Convert WKT to GeoJSON
          return {
              type: 'Feature',
              geometry: geoJSONGeometry,
              properties: {}, // You can add more properties here if needed
          };
      });

      // Create a GeoJSON FeatureCollection
      const geoJSON = {
          type: 'FeatureCollection',
          features: geoJSONFeatures,
      };

      // Respond with the GeoJSON data
      res.json(geoJSON);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});