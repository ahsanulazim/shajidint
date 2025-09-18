import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import EmployeeForm from "@/Components/dashboard/EmployeeForm";

export default function page() {
  return (
    <>
      <Breadcrumbs title="Team" secTitle="Add Employee" />
      <div className="mb-5">
        <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
          Register
        </h1>
        <p className="text-gray-400 text-sm sm:text-md tracking-tighter">
          Add Members who shapes your business
        </p>
      </div>
      <EmployeeForm />
    </>
  );
}
