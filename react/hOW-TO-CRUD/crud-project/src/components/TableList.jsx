export default function TableList ({handleOpen}) {
    const students = [
        {id: 1, dni: "11111111A", name: "Enrique", last_name: "Jara", date_of_birth: "1997-05-26"},
        {id: 2,dni: "21111111A", name: "Enrique1", last_name: "Jara1", date_of_birth: "1998-05-26"},
        {id: 3,dni: "31111111A", name: "Enrique2", last_name: "Jara2", date_of_birth: "1999-05-26"},
    ]

    return (
        <>
            <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Dni</th>
                    <th>Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody className="hover">
                {/* row 1 */}

                {students.map((student) => (
                    <tr>
                    <th>{student.id}</th>
                    <td>{student.dni}</td>
                    <td>{student.name}</td>
                    <td>{student.last_name}</td>
                    {/*<td>
                        <button className={`btn rounded-full w-20 ${student.isactive ? "Active" : "Inactive" "btn-primary" : "btn-outline-primary"}`}>

                        </button>
                    </td>*/}
                    <td>
                        <button onClick={() => handleOpen('edit')} className="btn btn-secondary">Update</button>
                    </td>
                    <td>
                        <button className="btn btn-accent">Delete</button>
                    </td>
                   
                    </tr>
                ))}
                
                </tbody>
            </table>
            </div>
        </>
    )
}