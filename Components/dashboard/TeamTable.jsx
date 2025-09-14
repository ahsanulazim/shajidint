export default function TeamTable({ employee }) {
    return (
        <>
            <tr className="hover:bg-base-300">
                <th>{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>{employee.role}</td>
                <td><button className="btn btn-error rounded-md" disabled={employee.role === "Admin" ? true : false}>Remove</button></td>
            </tr>
        </>
    )
}
