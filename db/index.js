import pg from 'pg';


// Setup the pool to connect to Heroku
const pool = new pg.Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false }
});

// make the query available to other docs
export function query(text, params, cb) {
  return pool.query(text, params, cb);
}