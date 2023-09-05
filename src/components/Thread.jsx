import FormatDate from "@/lib/date";

export default function Thread({ data }) {
  return (
    <>
      {data?.map((thread) => (
        <div key={thread.id} className="text-white">
          <div className="">{thread.username}</div>
          <div className="">{thread.content}</div>
          <div className="">
            <FormatDate dateString={thread.created_at} />
          </div>
        </div>
      ))}
    </>
  );
}
