import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

// get latest threads
export async function getAllThreads() {
  const { data, error } = await supabase
    .from("threads")
    .select("*")
    .order("id", { ascending: false });
  if (error) throw new Error("Fetching failed.");

  if (!data) {
    return <div className="text-white">No threads has been loaded.</div>;
  }

  return data;
}
