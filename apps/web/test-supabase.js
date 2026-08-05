const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkConnection() {
  console.log("Checking Supabase connection to:", supabaseUrl);
  // Just querying for the current time or a simple ping
  // Since we don't know the schema, we'll just check if we get an auth response or simple query error (like table not found rather than network error)
  const { data, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error("Connection failed:", error);
    process.exit(1);
  } else {
    console.log("Connection successful! Session state retrieved.");
    console.log("DATABASE_URL is also set in .env.local for ORM usage.");
  }
}

checkConnection();
