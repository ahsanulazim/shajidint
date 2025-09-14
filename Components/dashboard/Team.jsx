import TeamTable from "./TeamTable";

export default function Team() {

    const employees = [
        { id: 1, name: "MD Aminul Islam", job: "Founder & CEO", role: "Admin" },
        { id: 2, name: "Jane Smith", job: "Product Manager", role: "Employee" },
        { id: 3, name: "Sam Johnson", job: "UX Designer", role: "Employee" },
        { id: 4, name: "Steve Rogers", job: "Developer", role: "Employee" },
    ];

    return (
        <>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-5 mt-5">
                <table className="table">
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
                        {employees.map(employee => (
                            <TeamTable key={employee.id} employee={employee} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
