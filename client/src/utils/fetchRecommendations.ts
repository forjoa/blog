import { supabase } from "../components/database/supabase";

export const fetchRecommendations = async () => {
    return await supabase.from('blogs').select()
}