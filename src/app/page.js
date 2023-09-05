import { getAllThreads } from "@/lib/supabase";
import Thread from "@/components/Thread";

export default async function RootPage() {
  const data = await getAllThreads();
  return <Thread data={data} />;
}
