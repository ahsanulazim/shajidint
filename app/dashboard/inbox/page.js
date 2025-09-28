"use client";

import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import ModalInbox from "@/Components/dashboard/ModalInbox";
import Skeleton from "@/Components/dashboard/Skeleton";
import { NavContext } from "@/context/MyContext";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FaEllipsisVertical,
  FaEnvelope,
  FaEye,
  FaPhone,
  FaRegCalendarDays,
  FaTrashCan,
} from "react-icons/fa6";

export default function Inbox() {
  const { msgs } = useContext(NavContext);
  const [delMsg, setDelMsg] = useState(null);

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

      {/* Massages box */}

      <ul className="list bg-base-100 rounded-box shadow-md mt-5">

        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Recent Massages First</li>

        {msgs
          ? msgs.map((msg, i) => (
            <li className="list-row items-center" key={msg._id}>
              <Link href={`/dashboard/inbox/${msg._id}`} className="list-col-grow flex-1 min-w-0">

                <h3 className="font-bold uppercase">{msg.name}</h3>
                <p className="text-xs opacity-60 truncate">{msg.query}</p>
                <span className="text-xs flex items-center gap-2 mt-1 opacity-60"><FaRegCalendarDays /> {msg.sendDate}</span>

              </Link>
              <div className="dropdown dropdown-end">
                <button tabIndex={0} role="button" className="btn m-1 btn-soft btn-info btn-square btn-sm md:btn-md"><FaEllipsisVertical /></button>
                <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-md">
                  <li><Link href={`/dashboard/inbox/${msg._id}`} className="list-col-grow "><FaEye className="text-success" /> View</Link></li>
                  <li><a href={`tel:${msg.phone}`}><FaPhone className="text-info" /> Call</a></li>
                  <li><a href={`mailto:${msg.email}`}><FaEnvelope className="text-warning" /> Send Email</a></li>
                  <li><button onClick={() => handleMsgDel(msg._id)}>
                    <FaTrashCan className="text-error" /> Delete
                  </button></li>
                </ul>
              </div>
            </li>
          ))
          : Array.from({ length: 5 }).map((_, i) => (
            <li className="list-row items-center" key={i}>
              <div className="list-col-grow flex-1 min-w-0">

                <Skeleton className="block max-w-xs" />
                <Skeleton className="block mt-2" />
                <span className="text-xs flex items-center gap-2 mt-2 opacity-60"><FaRegCalendarDays /> <Skeleton /></span>

              </div>
            </li>))
        }

      </ul>
    </>
  );
}
