"use client";

import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import ModalInbox from "@/Components/dashboard/ModalInbox";
import Skeleton from "@/Components/dashboard/Skeleton";
import { NavContext } from "@/context/MyContext";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaRegCalendarDays,
  FaTrashCan,
} from "react-icons/fa6";

export default function Inbox() {
  const { serverUrl } = useContext(NavContext);
  const [msgs, setMsgs] = useState(null);
  const [delMsg, setDelMsg] = useState(null);

  useEffect(() => {
    fetch(`${serverUrl}/msgs`)
      .then((res) => res.json())
      .then((data) => setMsgs(data));
  }, [msgs]);

  const deleteMsg = useRef();

  const handleMsgDel = (id) => {
    deleteMsg.current.showModal();
    setDelMsg(id);
  };

  return (
    <>
      <ModalInbox ref={deleteMsg} delMsg={delMsg} />
      <Breadcrumbs title="Inbox" />
      <div>
        <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
          Inbox
        </h1>
        <p className="text-gray-400 text-sm sm:text-md tracking-tighter">
          See All massages and entries
        </p>
      </div>
      <div className="overflow-x-auto  bg-base-200 shadow-md rounded-lg p-5 mt-5">
        <table className="table table-xs md:table-md">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Massage</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {msgs
              ? msgs.map((msg, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>

                  <td>
                    {msg.query.length >= 100
                      ? msg.query.slice(0, 100) + "..."
                      : msg.query}
                    <p className="flex items-center gap-x-2 text-gray-500 w-fit">
                      <FaRegCalendarDays /> {msg.sendDate}
                    </p>
                  </td>
                  <td>
                    <h4 className="font-bold uppercase">{msg.name}</h4>
                    {msg.company && <p>{msg.company}</p>}
                    <a
                      href={`mailto:${msg.email}`}
                      className="w-fit text-gray-500 flex gap-x-2 items-center"
                    >
                      <FaEnvelope /> {msg.email}
                    </a>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/inbox/${msg._id}`}>
                        <button className="btn btn-success btn-circle btn-sm md:btn-md">
                          <FaEye />
                        </button>
                      </Link>
                      <button
                        className="btn btn-error btn-circle btn-sm md:btn-md"
                        onClick={() => handleMsgDel(msg._id)}
                      >
                        <FaTrashCan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
              : Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="hover:bg-base-300 animate-pulse">
                  <th>
                    <Skeleton className="block" />
                  </th>
                  <td>
                    <Skeleton className="block" />
                  </td>
                  <td>
                    <Skeleton className="block" />
                  </td>
                  <td>
                    <Skeleton className="block" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
