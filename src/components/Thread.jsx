"use client";

import FormatDate from "@/lib/date";
import { Avatar } from "@material-tailwind/react";
import { LuMoreHorizontal, LuHeart, LuMessageCircle } from "react-icons/lu";
import { useState } from "react";

export default function Thread({ data }) {
  // states
  const [liked, hasLiked] = useState(false);
  const [open, setOpen] = useState(false);
  // State handle
  const handleClick = () => {
    hasLiked(!liked); // Toggle the state
  };
  // map over thread component
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
          <div className="pl-12 pt-5 flex items-center gap-4">
            <button
              onClick={handleClick}
              className={
                liked
                  ? "text-red-500 transition duration-300"
                  : "text-grey-500 transition duration-300"
              }
            >
              <LuHeart />
            </button>
            <button className="hover:bg-gray-900 p-3 rounded-full transition duration-200">
              <LuMessageCircle />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
