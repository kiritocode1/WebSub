import { Database } from "@/types/supa";
import { createClient } from "@supabase/supabase-js";

import { env } from "@/env/server";

const page = async ({}) => {
  const supabase = createClient<Database>(env.SUPABASE_PROJECT_URL, env.SUPABASE_API_KEY);
  const { data, error } = await supabase.from("Rappers").select("*");
  if (error)  return <div>{error.message}</div>;
	return <div>{JSON.stringify(data)}</div>;
};

export default page;
