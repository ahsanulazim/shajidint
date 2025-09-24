"use client";

import { useContext, useRef, useState } from "react";
import ContactModal from "./ContactModal";
import { NavContext } from "@/context/MyContext";
import { toast } from "react-toastify";

export default function ContactFrom() {
  const sendModal = useRef();
  const [loading, setLoading] = useState(false);
  const { serverUrl } = useContext(NavContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const company = e.target.company.value || "";
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const query = e.target.query.value;

    fetch(`${serverUrl}/msg`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, company, query }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoading(false);
          sendModal.current.show();
          e.target.reset();
        } else {
          setLoading(false);
          toast.error("Failed to send query");
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Server error");
      });
  };

  return (
    <>
      <ContactModal ref={sendModal} />
      <form
        className="fieldset bg-white rounded-box shadow-md p-4 xl:p-8 md:max-w-xs xl:max-w-md 2xl:max-w-lg md:w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl xl:text-3xl font-bold tracking-tighter mb-2">
          Book an Appointment
        </h2>

        <label className="floating-label mb-1">
          <span>Name</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-md placeholder:tracking-tight w-full"
            required
          />
        </label>
        <label className="floating-label mb-1">
          <span>Company Name</span>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-md placeholder:tracking-tight w-full"
          />
        </label>
        <label className="floating-label mb-1">
          <span>Email</span>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-md placeholder:tracking-tight w-full"
          />
        </label>
        <label className="floating-label mb-1">
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="input input-md placeholder:tracking-tight w-full"
            required
          />
        </label>
        <label className="floating-label mb-1">
          <span>Query</span>
          <textarea
            name="query"
            className="textarea placeholder:tracking-tight w-full"
            placeholder="Write your query"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-neutral !rounded-md"
          disabled={loading ? true : false}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner"></span>
              loading
            </>
          ) : (
            <>Send</>
          )}
        </button>
      </form>
    </>
  );
}
