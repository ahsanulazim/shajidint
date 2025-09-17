'use client'

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
import { toast } from "react-toastify";
import Skeleton from "./Skeleton";
import { NavContext } from "@/context/MyContext";

export default function ProfileCard() {

  //Firebase user data from context
  const { user, serverUrl } = useContext(NavContext);
  const email = user?.email;
  const [userData, setUserData] = useState(null)

  //current user data from mongodb and backend

  useEffect(() => {

    if (!email) return;

    fetch(`${serverUrl}/loginuser/${email}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data)
      })

  }, [user])

  const [profileData, setProfileData] = useState({
    name: user?.displayName,
    email: user?.email,
    phone: "",
    designation: "Founder & CEO",
    profilePic: "/plabon.jpg", // Placeholder image URL
  });

  useEffect(() => {
    if (userData) {
      setProfileData(prev => ({
        ...prev,
        phone: userData.phone,
      }));
    }
  }, [userData]);

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

  //Cancel Changes
  const handleCancel = () => {
    setIsEditing(false);
    if (userData) {
      setProfileData(prev => ({
        ...prev,
        phone: userData.phone,
        email: userData.email,
        name: user?.displayName,
        designation: "Founder & CEO", // or userData.designation if dynamic
      }));
    }

  }

  return (
    <div className="md:flex md:items-center lg:max-w-3xl bg-white rounded-md overflow-clip shadow-sm">
      <div className="rounded-md overflow-clip md:p-5 md:pr-0">
        <img
          className="w-full md:rounded-md"
          src="/plabon.jpg"
          alt="Ahsanul Azim Plabon"
        />
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
            <div className="flex gap-x-3">
              <button
                onClick={handleSave}
                className="btn rounded-md btn-success mt-5 flex-1"
              >
                <FaCheck />
                Save
              </button>
              <button className="btn rounded-md btn-error mt-5 flex-1" onClick={handleCancel}><FaXmark /> Cancel</button>
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
  )
}
