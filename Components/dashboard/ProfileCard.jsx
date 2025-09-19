"use client";

import auth from "@/Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import {
  FaCheck,
  FaFacebook,
  FaLinkedin,
  FaPenToSquare,
  FaSquareXTwitter,
  FaXmark,
} from "react-icons/fa6";
import { MdOutlineCameraAlt } from "react-icons/md";
import { toast } from "react-toastify";
import Skeleton from "./Skeleton";
import { NavContext } from "@/context/MyContext";

export default function ProfileCard() {
  //Firebase user data from context
  const { user, currentUser, serverUrl } = useContext(NavContext);

  const [profileData, setProfileData] = useState({
    name: user?.displayName,
    email: user?.email,
    phone: <Skeleton />,
    designation: <Skeleton />,
    proPic: currentUser?.profilePic, // Placeholder image URL
  });

  useEffect(() => {
    if (currentUser) {
      setProfileData((prev) => ({
        ...prev,
        phone: currentUser.phone,
        designation: currentUser.designation,
      }));
    }
  }, [currentUser]);

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Function to handle saving changes
  const handleSave = async () => {
    setIsEditing(false);
    try {
      // Update Firebase display name
      await updateProfile(auth.currentUser, {
        displayName: profileData.name,
        email: profileData.email,
      });

      // Update MongoDB via Express API
      const response = await fetch(`${serverUrl}/users/${user.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: profileData.name,
          phone: profileData.phone,
          designation: profileData.designation,
          email: profileData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Information updated successfully");
      } else {
        toast.error(result.message || "MongoDB update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Something went wrong while saving");
    }
  };

  //Cancel Changes
  const handleCancel = () => {
    setIsEditing(false);
    if (currentUser) {
      setProfileData((prev) => ({
        ...prev,
        designation: currentUser.designation,
        phone: currentUser.phone,
        email: currentUser.email,
        name: user?.displayName,
      }));
    }
  };

  //Handle Image Upload
  const handleProfile = async (e) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("profilePic", file);

      const res = await fetch(`${serverUrl}/users/${user.email}/image`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Profile picture uploaded");

        // লোকাল state আপডেট
        setProfileData(prev => ({
          ...prev,
          proPic: data.profilePic || prev.proPic,
        }));

        // context-এর currentUser-ও আপডেট করো
        if (currentUser) {
          currentUser.profilePic = data.profilePic;
        }
      } else {
        toast.error(data.message || "Failed to upload profile picture");
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Server error");
    } finally {
      e.target.value = "";
    }
  };


  return (
    <div className="md:flex md:items-center lg:max-w-3xl bg-white rounded-md overflow-clip shadow-sm">
      <div className="rounded-md overflow-clip md:p-5 md:pr-0 relative w-full">
        {currentUser?.profilePic || profileData.proPic ? (
          <img
            className="w-full md:rounded-md"
            src={currentUser?.profilePic || profileData.proPic}
            alt={user?.displayName || "Profile Picture"}
          />
        ) : (
          <div className="avatar avatar-placeholder w-full">
            <div className="bg-neutral text-neutral-content w-full rounded-md">
              <span className="text-6xl sm:text-8xl">{user?.displayName.slice(0, 1)}</span>
            </div>
          </div>
        )}

        <form encType="multipart/form-data" className="absolute bottom-0 left-0 w-full bg-transparent md:p-5 md:pr-0" data-theme="dark">
          <input type="file" id="profilePic" name="profilePic" accept="image/*" className="hidden" onChange={handleProfile} required />
          <label htmlFor="profilePic" className="flex items-center justify-center gap-x-2 py-1.5 sm:py-2.5 tracking-tight cursor-pointer glass rounded-b-md"><MdOutlineCameraAlt className="text-lg" /> Upload Photo</label>
        </form>

      </div>
      <fieldset className="fieldset p-5">
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
              type="tel"
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
            <div className="flex gap-x-3">
              <button
                onClick={handleSave}
                className="btn rounded-md btn-success mt-5 flex-1"
              >
                <FaCheck />
                Save
              </button>
              <button
                className="btn rounded-md btn-error mt-5 flex-1"
                onClick={handleCancel}
              >
                <FaXmark /> Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <label className="label">Name</label>
            {profileData.name ? (
              <p className=" text-lg">{profileData.name}</p>
            ) : (
              <Skeleton />
            )}
            <label className="label">Email</label>
            {profileData.email ? (
              <p className=" text-lg">{profileData.email}</p>
            ) : (
              <Skeleton />
            )}

            <label className="label">Phone</label>
            <p className=" text-lg">{profileData.phone}</p>
            <label className="label">Designation</label>
            <p className=" text-lg">{profileData.designation}</p>
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
  );
}
