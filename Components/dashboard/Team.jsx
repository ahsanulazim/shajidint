"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import TeamTable from "./TeamTable";
import Breadcrumbs from "./Breadcrumbs";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { NavContext } from "@/context/MyContext";
import Skeleton from "./Skeleton";

export default function Team() {
  const { serverUrl } = useContext(NavContext);
  const [employees, setEmployees] = useState(null);
  const [remove, setRemove] = useState(null);

  useEffect(() => {
    fetch(`${serverUrl}/users`)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [employees]);

  const deleteUser = useRef();

  const handleUserRemove = (email) => {
    deleteUser.current.showModal();
    setRemove(email);
  };

  return (
    <>
      <Modal ref={deleteUser} remove={remove} />
      <Breadcrumbs title="Team" />
      <div className="flex items-center justify-between mb-10 gap-5">
        <div>
          <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
            Team
          </h1>
          <p className="text-gray-400 text-sm sm:text-md tracking-tighter text-balance">
            Add, Edit & View Team Members
          </p>
        </div>
        <Link href="/dashboard/team/addemployee">
          <button className="btn rounded-md btn-neutral hidden sm:inline-flex">
            <FaPlus /> Add Employee
          </button>
        </Link>
      </div>
      <div className="fab sm:hidden fixed z-10 bottom-5 right-5">
        <div className="tooltip tooltip-left" data-tip="Add Employee">
          <Link href="/dashboard/team/addemployee">
            <button className="btn btn-lg btn-circle btn-neutral">
              <FaPlus />
            </button>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto bg-base-200 shadow-md rounded-lg p-5 mt-5">
        <table className="table table-xs md:table-md">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees
              ? employees.map((employee, i) => (
                <TeamTable
                  key={i}
                  employee={employee}
                  i={i}
                  btn={() => handleUserRemove(employee.email)}
                />
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
