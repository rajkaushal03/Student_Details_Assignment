import React from 'react';
import { useStudentContext } from '../Context/StudentContext';
import { useAuthContext } from '../Context/AuthContext';

const Table = () => {
    const { students, loading, setShowDetails, setStudentDetails, userLoggedIn } = useStudentContext();
    const { setShowLoginForm } = useAuthContext()    

    return (
        <div className='p-3 bg-white w-fit'>
            <table className="table table-md ">
                <thead>
                    <tr className='text-black lg:text-lg text-sm'>
                        <th className="border border-gray-500 px-4 py-2">Name</th>
                        <th className="border border-gray-500 px-4 py-2">Course</th>
                        <th className="border border-gray-500 px-4 py-2">Details</th>
                    </tr>
                </thead>
                <tbody className='lg:text-lg text-xs'>
                    {loading ? (
                        // Show 5 skeleton rows while loading
                        Array.from({ length: 5 }).map((_, index) => (
                            <tr key={index}>
                                <td className="border border-gray-500 px-4 py-2"><div className="skeleton h-4 w-16 md:w-24"></div></td>
                                <td className="border border-gray-500 px-4 py-2"><div className="skeleton h-4 w-16 md:w-24"></div></td>
                                <td className="border border-gray-500 px-4 py-2"><div className="skeleton h-4 w-16 md:w-32"></div></td>
                            </tr>
                        ))
                    ) : (
                        students.map((student, index) => (
                            <tr key={index}>
                                <td className="border border-gray-500 px-4 py-2">{student.name}</td>
                                <td className="border border-gray-500 px-4 py-2">{student.course}</td>
                                <td className="border border-gray-500  ">
                                    <button className='btn lg:btn-md btn-xs  text-white capitalize bg-blue-500'
                                        onClick={() => {
                                            if (userLoggedIn) {
                                                setShowDetails(prev => !prev);
                                                setStudentDetails(student)
                                            }
                                            else setShowLoginForm(prev => !prev)
                                        }}>
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
