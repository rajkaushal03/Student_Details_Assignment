import React from 'react'
import { useStudentContext } from '../Context/StudentContext'
import { RiDeleteBin3Line } from "react-icons/ri";
const StudentDetails = () => {
    const { showDetails, setShowDetails, studentDetails, handleDelete } = useStudentContext();
    return (
        <>{showDetails && <div className="fixed inset-0 flex items-center justify-center z-10  backdrop-blur-sm">
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{studentDetails.name}</h2>
                    <p><strong>Age:</strong> {studentDetails.age}</p>
                    <p><strong>Course:</strong> {studentDetails.course}</p>
                    <p><strong>Email:</strong> {studentDetails.email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => setShowDetails(prev => !prev)}>
                            {showDetails ? "Hide Details" : "Show Details"}
                        </button>
                        <button className="btn " onClick={() => {setShowDetails(prev => !prev); handleDelete(studentDetails.id)}}>
                            <RiDeleteBin3Line className='text-red-500 '/>Delete 
                        </button>
                    </div>
                </div>

            </div>
        </div>}
        </>
    )
}

export default StudentDetails