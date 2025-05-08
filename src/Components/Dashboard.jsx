import React from 'react';
import { useStudentContext } from '../Context/StudentContext';
import { IoMdPersonAdd } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import Table from './Table';
import { useAuthContext } from '../Context/AuthContext';
const Dashboard = () => {
    const { handlefilter, allStudents, input, handleInput, setShowForm } = useStudentContext();
    const { userLoggedIn, setShowLoginForm } = useAuthContext()
    return (
        <div className='p-2'>
            <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4'>

                <div className='flex items-center gap-3'>
                    <h1 className='lg:text-6xl sm:text-3xl text-4xl border-2 rounded-full sm:border-0'><PiStudent /></h1>
                    <div >
                        <h1 className="lg:text-2xl text-xs font-bold hidden sm:block">Student Dashboard</h1>
                        <p className="text-gray-600 lg:text-xl sm:text-md text-xs hidden md:inline">Manage and view student information.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-white rounded-t-lg '>
                    <div className='flex items-center gap-3 p-3'>
                        <input type="text" placeholder=" Search Name" value={input} className="input lg:input-lg input:xs " onChange={(e) => { handleInput(e) }} />
                    </div>
                    <button className='btn lg:btn-lg sm:btn-md  btn-sm  text-white capitalize bg-blue-500 hidden sm:inline' onClick={() => { userLoggedIn ? setShowForm(prev => !prev) : setShowLoginForm(prev => !prev) }}>add  student</button>
                    <button className='btn lg:btn-lg sm:btn-md  btn-sm  text-white capitalize bg-blue-500 sm:hidden' onClick={() => { userLoggedIn ? setShowForm(prev => !prev) : setShowLoginForm(prev => !prev) }}><IoMdPersonAdd /></button>
                </div>
            </div>




            <div className='bg-white rounded-lg shadow-md'>
                <div className='flex items-center gap-3 p-3'><h2 className="text-lg  italic ">filter:</h2>
                    <select
                        name="filtered"
                        className='bg-white lg:w-64 w-24 lg:p-2  lg:rounded-lg shadow-md border-black border-1'
                        onChange={(e) => handlefilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        {[...new Set(allStudents.map((s) => s.course))].map((course, index) => (
                            <option key={index} value={course}>{course}</option>
                        ))}
                    </select>
                </div>
                <Table />
            </div>
        </div>
    );
};

export default Dashboard;