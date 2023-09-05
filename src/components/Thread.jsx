"use client";

import FormatDate from "@/lib/date";
import { Avatar } from "@material-tailwind/react";
import { LuMoreHorizontal } from "react-icons/lu";

export default function Thread({ data }) {
  return (
    <>
      {data?.map((thread) => (
        <div key={thread.id} className="text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                className="h-9 w-9"
                src="/av-placeholder.png"
                alt="avatar"
              />
              <div className="">{thread.username}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500">
                {/* <FormatDate dateString={thread.created_at} /> */}3 h ago
              </div>
              <button className="text-lg">
                <LuMoreHorizontal />
              </button>
            </div>
          </div>
          <div className="pl-12">{thread.content}</div>
        </div>
      ))}
    </>
  );
}
