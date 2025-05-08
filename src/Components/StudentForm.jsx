import { useStudentContext } from '../Context/StudentContext';

const StudentForm = () => {

    const { courses, showForm,setShowForm, formData, handleChange, errors, handleSubmit } = useStudentContext()

    return (
        <>
            {showForm && <div className="fixed inset-0 flex items-center justify-center z-10  backdrop-blur-sm">
                <div className="w-96 bg-white p-6 rounded-lg shadow-lg z-2">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-xl">Student</legend>
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" value={formData.name} onChange={handleChange} name="name" />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}

                        <label className="label">Age</label>
                        <input type="number" className="input" placeholder="Age" value={formData.age} onChange={handleChange} name="age" />
                        {errors.age && <p className="text-red-500">{errors.age}</p>}

                        <label className="label">Course</label>
                        <select
                            className='bg-white p-2 rounded-sm border-gray-400 border-2'
                            onChange={handleChange}
                            name="course"
                        >
                            {courses.map((course, index) => (
                                <option key={index} value={course}>{course}</option>
                            ))}
                        </select>
                        {errors.course && <p className="text-red-500">{errors.course}</p>}

                        <label className="label">Email</label>

                        <input type="email" className="input" placeholder="Email" value={formData.email} onChange={handleChange} name='email' />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}


                        <div className='flex justify-end gap-2 items-center'>
                            <button className="btn btn-neutral mt-4" onClick={handleSubmit}>Add</button>
                            <button className="btn btn-neutral mt-4" onClick={() => {setShowForm(prev => !prev)}}>Cancel</button>
                        </div>
                    </fieldset>
                </div>
            </div>}
        </>
    );
};

export default StudentForm;

