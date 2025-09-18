export default function TeamTable({ employee, btn, i }) {
  return (
    <>
      <tr className="hover:bg-base-300">
        <th>{i + 1}</th>
        <td>{employee.name}</td>
        <td>{employee.designation}</td>
        <td>{employee.role}</td>
        <td>
          <button
            className="btn btn-error btn-sm md:btn-md rounded-md"
            disabled={employee.role === "Admin" ? true : false}
            onClick={btn}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}
