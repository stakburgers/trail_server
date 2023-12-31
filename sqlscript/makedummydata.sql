-- Enable the PostGIS extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS postgis;

-- Create a table to store trail coordinates with a LINESTRING geometry
CREATE TABLE TrailCoordinates (
    TrailID SERIAL PRIMARY KEY,
    TrailName VARCHAR(255),
    TrailGeometry GEOMETRY(LINESTRING)
);

-- Insert the data for Albany trail
INSERT INTO TrailCoordinates (TrailName, TrailGeometry)
VALUES (
    'Albany Trail',
    ST_GeomFromText('LINESTRING(-36.724965 174.694171, -36.725132 174.693974,
     -36.725239 174.693958, -36.725313 174.693770, -36.725285 174.693726, 
     -36.725146 174.693446, -36.725290 174.693347, -36.725610 174.693662, 
     -36.725716 174.693677, -36.725909 174.693548, -36.727070 174.693667, 
     -36.728560 174.693204, -36.72891 174.69131, -36.72804 174.69065, 
     -36.72810 174.69034, -36.72875 174.69033, -36.72938 174.68990, 
     -36.72991 174.68985, -36.73018 174.68950, -36.73055 174.68927, 
     -36.73103 174.68926, -36.73175 174.68876, -36.73225 174.68882,
      -36.73298 174.68870, -36.73388 174.69168, -36.73295 174.69246, 
      -36.73190 174.69421, -36.73086 174.69397, -36.73060 174.69354, 
      -36.72855 174.69320)')
);
