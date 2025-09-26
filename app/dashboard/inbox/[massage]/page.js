"use client";

import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import Skeleton from "@/Components/dashboard/Skeleton";
import { NavContext } from "@/context/MyContext";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaRegCalendarDays } from "react-icons/fa6";

export default function Page() {
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

      <div className="bg-base-100 shadow-md rounded-lg p-5 mt-5">
        {query ? <>
          <p> {query.query}</p>
          <div className="mt-5">
            <h4>
              <span className="font-bold">Author :</span> {query.name}
            </h4>
            <a
              href={`mailto:${query.email}`}
              className="w-fit text-gray-500 flex gap-x-2 items-center"
            >
              <FaEnvelope /> {query.email}
            </a>
            <a
              href={`tel:${query.phone}`}
              className="w-fit text-gray-500 flex gap-x-2 items-center"
            >
              <FaPhone /> {query.phone}
            </a>
            <p className="flex items-center gap-x-2 text-gray-500 w-fit">
              <FaRegCalendarDays /> {query.sendDate}
            </p>
          </div> </>
          : <div className="flex flex-col gap-y-3">
            <Skeleton className="block" />
            <Skeleton className="block" />
            <Skeleton className="block" />
            <Skeleton className="block" />
            <Skeleton className="block" />
            <Skeleton className="block" />
            <Skeleton className="block max-w-2xs" />
            <Skeleton className="block max-w-56" />
            <Skeleton className="block max-w-52" />
            <Skeleton className="block max-w-60" />
          </div>}
      </div>
    </>
  );
}
