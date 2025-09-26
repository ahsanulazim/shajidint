export default function TeamTable({ employee, btn, i }) {
  return (
    <>
      <tr className="hover:bg-base-300">
        <td>
          <h3 className="font-bold">{employee.name}</h3>
          <p className="opacity-60">{employee.designation}</p>
        </td>
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
