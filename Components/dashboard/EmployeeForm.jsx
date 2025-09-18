"use client";
import { NavContext } from "@/context/MyContext";
import auth from "@/Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function EmployeeForm() {
  //Loader Button State
  const [loading, setLoading] = useState(false);
  const { serverUrl } = useContext(NavContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const role = e.target.role.value;
    const designation = e.target.designation.value;
    const password = e.target.password.value;
    setLoading(true);
    //Firebase Backend Register User
    fetch(`${serverUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, role, designation, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("New Employee Added Successfully");
          setLoading(false);
          e.target.reset();
        } else {
          toast.error("Failed to add employee");
          setLoading(false);
        }
      })
      .catch(() => {
        toast.error("Server error");
        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleRegister} className="fieldset rounded-box w-xs">
        <h2 className="font-bold text-2xl tracking-tight">Employee Form</h2>

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Your Full Name"
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />

        <label className="label">Phone</label>
        <input
          type="tel"
          name="phone"
          className="input"
          placeholder="Phone Number"
        />

        <label className="label">Role</label>
        <select defaultValue="Set Role" name="role" className="select" required>
          <option disabled={true}>Set Role</option>
          <option>Admin</option>
          <option>Moderator</option>
          <option>Employee</option>
        </select>
        <label className="label">Designation</label>
        <input
          type="text"
          className="input"
          name="designation"
          placeholder="Designation"
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          required
        />
        <label className="label">Confirm Password</label>
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Confirm Password"
          required
        />

        {loading ? (
          <button className="btn" disabled>
            <span className="loading loading-spinner"></span>
            loading
          </button>
        ) : (
          <button type="submit" className="btn btn-neutral mt-4 rounded-md">
            Register
          </button>
        )}
      </form>
    </>
  );
}
