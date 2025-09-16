"use client";

import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import auth from "@/Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import {
  FaCheck,
  FaFacebook,
  FaLinkedin,
  FaPenToSquare,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { toast } from "react-toastify";

export default function page() {
  const user = auth.currentUser;

  const [profileData, setProfileData] = useState({
    name: user?.displayName,
    email: user?.email,
    phone: "01612345678",
    designation: "Founder & CEO",
    profilePic: "/plabon.jpg", // Placeholder image URL
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Function to handle saving changes
  const handleSave = () => {
    setIsEditing(false);
    updateProfile(auth.currentUser, {
      displayName: profileData.name,
    })
      .then(() => {
        // Profile updated!
        // ...
        toast.success("Informations Updated");
      })
      .catch((error) => {
        // An error occurred
        // ...
        toast.error("Cannot Update Information");
      });
  };

  return (
    <>
      <Breadcrumbs title="Profile" />
      <div>
        <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
          Profile
        </h1>
        <p className="text-gray-400 text-sm sm:text-md tracking-tighter">
          Your Personal Informations
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-5 items-center bg-white p-8 rounded-md shadow-sm sm:max-w-fit">
        <div className="avatar">
          <div className="ring-main ring-offset-base-100 w-full max-w-56 rounded-full ring-2 ring-offset-2">
            <img
              className="max-w-56"
              src="/plabon.jpg"
              alt="Ahsanul Azim Plabon"
            />
          </div>
        </div>
        <fieldset className="fieldset">
          <h1 className="text-2xl sm:text-3xl tracking-tighter md:whitespace-nowrap mb-5">
            Personal Information
          </h1>
          {isEditing ? (
            <>
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input"
                onChange={handleInputChange}
                placeholder="Type here"
                value={profileData.name}
              />
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input"
                onChange={handleInputChange}
                placeholder="Type here"
                value={profileData.email}
              />
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                className="input"
                onChange={handleInputChange}
                placeholder="Type here"
                value={profileData.phone}
              />
              <label className="label" htmlFor="designation">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                className="input"
                onChange={handleInputChange}
                placeholder="Type here"
                value={profileData.designation}
              />
              <label className="label">Social Accounts</label>
              <div className="flex gap-x-2">
                <a href="#" className="text-xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-xl">
                  <FaSquareXTwitter />
                </a>
              </div>
              <button
                onClick={handleSave}
                className="btn rounded-md btn-success mt-5"
              >
                <FaCheck />
                Save
              </button>
            </>
          ) : (
            <>
              <label className="label">Name</label>
              {profileData.name ? (
                <p className="text-md sm:text-lg">{profileData.name}</p>
              ) : (
                <div className="skeleton h-4 w-full"></div>
              )}
              <label className="label">Email</label>
              {profileData.email ? (
                <p className="text-md sm:text-lg">{profileData.email}</p>
              ) : (
                <div className="skeleton h-4 w-full"></div>
              )}

              <label className="label">Phone</label>
              <p className="text-md sm:text-lg">{profileData.phone}</p>
              <label className="label">Designation</label>
              <p className="text-md sm:text-lg">{profileData.designation}</p>
              <label className="label">Social Accounts</label>
              <div className="flex gap-x-2">
                <a href="#" className="text-xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-xl">
                  <FaSquareXTwitter />
                </a>
              </div>
              <button
                className="btn rounded-md btn-neutral mt-5"
                onClick={() => setIsEditing(true)}
              >
                <FaPenToSquare />
                Edit
              </button>
            </>
          )}
        </fieldset>
      </div>
    </>
  );
}
