"use client";

import { NavContext } from "@/context/MyContext";
import { useContext } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function ModalInbox({ ref, delMsg }) {
  const { serverUrl } = useContext(NavContext);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${serverUrl}/msgs/${delMsg}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        // setLoading(false);
        toast.success("Massage deleted successfully");
        ref.current.close();
        // Optionally redirect or refresh
      } else {
        //setLoading(false);
        toast.error(result.message || "Deletion failed");
        ref.current.close();
      }
    } catch (error) {
      // setLoading(false);
      toast.error("Something went wrong while deleting");
      ref.current.close();
    }
    //setLoading(false);
    ref.current.close();
  };

  return (
    <>
      <dialog ref={ref} id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="avatar avatar-placeholder flex justify-center">
            <div className="bg-error text-error-content w-20 rounded-full">
              <span className="text-3xl">
                <FaTriangleExclamation />
              </span>
            </div>
          </div>

          <p className="py-4 text-center text-balance">
            You are going to delete the massage! Are you sure?
          </p>
          <div className="modal-action justify-center gap-x-8">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded-md">No, Keep It</button>
            </form>
            <button className="btn btn-error rounded-md" onClick={handleDelete}>
              Yes, Delete It
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
