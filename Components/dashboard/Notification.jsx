"use client";
import { NavContext } from "@/context/MyContext";
import { useContext, useEffect, useState } from "react";
import { IoChatbubbles } from "react-icons/io5";
import Skeleton from "./Skeleton";
import Link from "next/link";

export default function Notification() {
  const { serverUrl, isDark } = useContext(NavContext);
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    fetch(`${serverUrl}/notifications`)
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  console.log(notifications);

  return (
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-64 md:w-80 shadow h-96 overflow-y-scroll"
    >
      <div className="card-body p-0">
        <h2 className="text-lg bg-base-200 z-10 font-bold sticky top-0 p-5">
          Notifications
        </h2>
        <ul className="list bg-base-100 px-0">
          {notifications
            ? notifications.map((notification, i) => (
                <li
                  className={`list-row items-start ${
                    notification.read === false
                      ? isDark === false
                        ? "rounded-none bg-info/30"
                        : "rounded-none bg-info-content"
                      : ""
                  }`}
                  key={i}
                >
                  <div className="avatar avatar-placeholder">
                    <div className="bg-info text-info-content w-8 rounded-full">
                      <IoChatbubbles />
                    </div>
                  </div>
                  <Link
                    href={`/dashboard/inbox/${notification._id}`}
                    className="min-w-0"
                  >
                    <div>New Massage</div>
                    <p className="list-col-wrap text-co text-xs opacity-60 truncate">
                      {notification.query}
                    </p>
                    <h3 className=" text-xs">{notification.name}</h3>
                  </Link>
                </li>
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <li className="list-row items-start">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-info text-info-content w-8 rounded-full">
                      <IoChatbubbles />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <Skeleton className="block max-w-24" />
                    <Skeleton className="block mt-1" />
                    <Skeleton className="block max-w-28 mt-1" />
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}
