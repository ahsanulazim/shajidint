"use client";

import auth from "@/Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
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
  const { user, currentUser, serverUrl } = useContext(NavContext);

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: currentUser?.phone || "",
    designation: currentUser?.designation || "",
    proPic: currentUser?.profilePic || "",
  });

  const handleInputChange = ({ target: { name, value } }) =>
    setProfileData((prev) => ({ ...prev, [name]: value }));

  const handleSave = async () => {
    setIsEditing(false);
    try {
      await updateProfile(auth.currentUser, {
        displayName: profileData.name,
        email: profileData.email,
      });

      const res = await fetch(`${serverUrl}/users/${user.email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      });

      const result = await res.json();
      result.success
        ? toast.success("Information updated successfully")
        : toast.error(result.message || "MongoDB update failed");
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Something went wrong while saving");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (currentUser) {
      setProfileData({
        name: user?.displayName || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        designation: currentUser.designation || "",
        proPic: currentUser.profilePic || "",
      });
    }
  };

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
        setProfileData((prev) => ({
          ...prev,
          proPic: data.profilePic || prev.proPic,
        }));
        if (currentUser) currentUser.profilePic = data.profilePic;
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

  const renderInput = (label, name, type = "text") => (
    <>
      <label className="label" htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="input"
        onChange={handleInputChange}
        placeholder="Type here"
        value={profileData[name]}
      />
    </>
  );

  const renderStatic = (label, value) => (
    <>
      <label className="label">{label}</label>
      <p className="text-lg">{value || <Skeleton />}</p>
    </>
  );

  const SocialIcons = () => (
    <div className="flex gap-x-2">
      {[FaFacebook, FaLinkedin, FaSquareXTwitter].map((Icon, i) => (
        <a key={i} href="#" className="text-xl">
          <Icon />
        </a>
      ))}
    </div>
  );

  return (
    <div className="md:flex md:items-center lg:max-w-3xl bg-white rounded-md overflow-clip shadow-sm">
      <div className="rounded-md overflow-clip md:p-5 md:pr-0 relative w-full">
        {profileData?.proPic ? (
          <img
            className="w-full md:rounded-md"
            src={profileData.proPic}
            alt={profileData.name || "Profile Picture"}
          />
        ) : (
          <div className="avatar avatar-placeholder w-full">
            <div className="bg-neutral text-neutral-content w-full rounded-md">
              <span className="text-6xl sm:text-8xl">
                {profileData.name?.[0]}
              </span>
            </div>
          </div>
        )}

        <form
          encType="multipart/form-data"
          className="absolute bottom-0 left-0 w-full bg-transparent md:p-5 md:pr-0"
          data-theme="dark"
        >
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/*"
            className="hidden"
            onChange={handleProfile}
            required
          />
          <label
            htmlFor="profilePic"
            className="flex items-center justify-center gap-x-2 py-1.5 sm:py-2.5 tracking-tight cursor-pointer glass rounded-b-md"
          >
            <MdOutlineCameraAlt className="text-lg" /> Upload Photo
          </label>
        </form>
      </div>

      <fieldset className="fieldset p-5">
        <h1 className="text-2xl sm:text-3xl tracking-tighter md:whitespace-nowrap mb-5">
          Personal Information
        </h1>

        {isEditing ? (
          <>
            {renderInput("Name", "name")}
            {renderInput("Email", "email", "email")}
            {renderInput("Phone", "phone", "tel")}
            {renderInput("Designation", "designation")}
            <label className="label">Social Accounts</label>
            <SocialIcons />
            <div className="flex gap-x-3">
              <button
                onClick={handleSave}
                className="btn rounded-md btn-success mt-5 flex-1"
              >
                <FaCheck /> Save
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
            {renderStatic("Name", profileData.name)}
            {renderStatic("Email", profileData.email)}
            {renderStatic("Phone", profileData.phone)}
            {renderStatic("Designation", profileData.designation)}
            <label className="label">Social Accounts</label>
            <SocialIcons />
            <button
              className="btn rounded-md btn-neutral mt-5"
              onClick={() => setIsEditing(true)}
            >
              <FaPenToSquare /> Edit
            </button>
          </>
        )}
      </fieldset>
    </div>
  );
}