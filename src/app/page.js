import { getAllThreads } from "@/lib/supabase";
import Thread from "@/components/Thread";
import { revalidatePath } from "next/cache";

// feed page
export default async function RootPage() {
  const thread = await getAllThreads();

  // every time page reloads we get fresh data

  revalidatePath("/");

  return (
    <>
      {thread?.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
    </>
  );
}
