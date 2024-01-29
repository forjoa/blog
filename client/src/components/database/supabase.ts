import { createClient } from "@supabase/supabase-js"

const supabaseUrl : string = import.meta.env.VITE_SUPABASE_URL ?? 'https://qryxnxryvjnrbgfroqrp.supabase.co'
const supabaseKey : string = import.meta.env.VITE_API_KEY ?? import.meta.env.API_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)