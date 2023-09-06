"use client";

import FormatDate from "@/lib/date";
import { Avatar } from "@material-tailwind/react";
import {
  LuMoreHorizontal,
  LuHeart,
  LuMessageCircle,
  LuRepeat2,
  LuSend,
} from "react-icons/lu";
import { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { parseISO, format } from "date-fns";

export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
// gets data from parent
export default function Thread({ thread }) {
  return (
    <div className="text-white border-b border-gray-800 py-5 w-full">
      <div className="flex ">
        <Avatar className="h-9 w-9" src="/av-placeholder.png" alt="avatar" />
        <div className="flex justify-between w-full pl-3">
          <div className="">{thread.username}</div>
          <div className="flex gap-3">
            <div className="text-sm text-gray-500">
              <Date dateString={thread.created_at} />
            </div>
            <Menu placement="bottom-end">
              <MenuHandler>
                <button className="text-lg mb-5">
                  <LuMoreHorizontal />
                </button>
              </MenuHandler>

              <MenuList className="bg-[#181818] border border-gray-900">
                <MenuItem>Hide</MenuItem>
                <MenuItem className="text-red-500">Block</MenuItem>
                <MenuItem className="text-red-500">Report</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="px-[16px]">
          <div className="w-[2px] h-full bg-gray-800 "></div>
        </div>
        <div>
          <div className="-mt-3 text-sm pl-4">{thread.body}</div>
          <div>
            <button className="hover:bg-gray-900 p-3 rounded-full transition duration-200 hover:text-red-500">
              <LuHeart />
            </button>

            <button className="hover:bg-gray-900 p-3 rounded-full transition duration-200">
              <LuMessageCircle />
            </button>

            <button className="hover:bg-gray-900 p-3 rounded-full transition duration-200">
              <LuRepeat2 />
            </button>

            <button className="hover:bg-gray-900 p-3 rounded-full transition duration-200 text-lg">
              <LuSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
