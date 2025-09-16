import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import ProfileCard from "@/Components/dashboard/ProfileCard";

export default function page() {
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
      <ProfileCard />
    </>
  );
}
