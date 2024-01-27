import { createClient } from "@supabase/supabase-js"

const supabaseUrl : string = process.env.SUPABASE_URL ?? import.meta.env.VITE_SUPABASE_URL
const supabaseKey : string = process.env.API_KEY ?? import.meta.env.VITE_API_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)