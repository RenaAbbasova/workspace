// Students.js
import React, { useEffect, useState } from 'react';

function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1443/api/teacher/students', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((err) => console.error('Error fetching students:', err));
    }, []);

    return (
        <div>
            <h2>Your Students</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Students;
