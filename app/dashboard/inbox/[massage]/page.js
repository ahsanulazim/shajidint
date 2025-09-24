"use client";

import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import { NavContext } from "@/context/MyContext";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaRegCalendarDays } from "react-icons/fa6";

export default function page({}) {
  const { massage } = useParams();
  const { serverUrl } = useContext(NavContext);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    fetch(`${serverUrl}/msgs/${massage}`)
      .then((res) => res.json())
      .then((data) => setQuery(data));
  }, [serverUrl, massage]);

  return (
    <>
      <Breadcrumbs title="Inbox" secTitle="Massage" />
      <div className="mb-5">
        <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
          Massage Details
        </h1>
        <p className="text-gray-400 text-sm sm:text-md tracking-tighter">
          In dept information of the Massage and Author
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-5 mt-5">
        <p> {query ? query.query : "no Data"}</p>
        <div className="mt-5">
          <h4>
            <span className="font-bold">Author :</span> {query?.name}
          </h4>
          <a
            href={`mailto:${query?.email}`}
            className="w-fit text-gray-500 flex gap-x-2 items-center"
          >
            <FaEnvelope /> {query?.email}
          </a>
          <a
            href={`tel:${query?.phone}`}
            className="w-fit text-gray-500 flex gap-x-2 items-center"
          >
            <FaPhone /> {query?.phone}
          </a>
          <p className="flex items-center gap-x-2 text-gray-500 w-fit">
            <FaRegCalendarDays /> {query?.sendDate}
          </p>
        </div>
      </div>
      ;
    </>
  );
}
