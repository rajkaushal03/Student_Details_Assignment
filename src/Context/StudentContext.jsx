/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const StudentContext = createContext();

export const useStudentContext = () => {
    return useContext(StudentContext);
}


export const StudentContextProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const courses = ["Computer Science", "Electronics", "Mechanical", "Chemical"];
    const [allStudents, setAllStudents] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchStudents = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: "John Doe", age: 20, course: "Computer Science", email: 'xyz@gmail.com' },
                    { id: 2, name: "Jane Smith", age: 21, course: "Electronics", email: 'jane@gmail.com' },
                    { id: 3, name: "Sam Wilson", age: 22, course: "Mechanical", email: 'sam@gmail.com' },
                    { id: 4, name: "Nina Patel", age: 23, course: "Chemical", email: 'nina@gmail.com' },
                    { id: 1, name: "John Doe", age: 20, course: "Computer Science", email: 'xyz@gmail.com' },
                    { id: 2, name: "Jane Smith", age: 21, course: "Electronics", email: 'jane@gmail.com' },
                    { id: 3, name: "Sam Wilson", age: 22, course: "Mechanical", email: 'sam@gmail.com' },
                    { id: 4, name: "Nina Patel", age: 23, course: "Chemical", email: 'nina@gmail.com' },
                    { id: 1, name: "John Doe", age: 20, course: "Computer Science", email: 'xyz@gmail.com' },
                    { id: 2, name: "Jane Smith", age: 21, course: "Electronics", email: 'jane@gmail.com' },
                    { id: 3, name: "Sam Wilson", age: 22, course: "Mechanical", email: 'sam@gmail.com' },
                    { id: 4, name: "Nina Patel", age: 23, course: "Chemical", email: 'nina@gmail.com' },
                    { id: 1, name: "John Doe", age: 20, course: "Computer Science", email: 'xyz@gmail.com' },
                    { id: 2, name: "Jane Smith", age: 21, course: "Electronics", email: 'jane@gmail.com' },
                    { id: 3, name: "Sam Wilson", age: 22, course: "Mechanical", email: 'sam@gmail.com' },
                    { id: 4, name: "Nina Patel", age: 23, course: "Chemical", email: 'nina@gmail.com' },
                ]);
            }, 1000);
        });
    };

    useEffect(() => {
        setLoading(true);
        fetchStudents().then((data) => {
            setStudents(data);
            setAllStudents(data);
            setLoading(false);
        });
    }, []);

    const handlefilter = (value) => {
        if (value === "all") {
            setStudents(allStudents);
        } else {
            const filtered = allStudents.filter((student) => student.course === value);
            // console.log(filtered);/
            setStudents(filtered);
        }
    };

    const handleInput = (e) => {
        setInput(e.target.value);
        const filtered = allStudents.filter((student) => student.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setStudents(filtered);
    };

    const handleDelete = (id) => {
        const updatedStudents = allStudents.filter((student) => student.id !== id);
        setStudents(updatedStudents);
        setAllStudents(updatedStudents);
    }

    // form data
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        course: courses[0],
        email: ""
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formData.age || isNaN(formData.age) || Number(formData.age) <= 0) {
            newErrors.age = "Valid age is required.";
        }

        if (!formData.course || formData.course.trim() === "") {
            newErrors.course = "Course selection is required.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Valid email is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log("Form submitted:", formData);
            // Reset form if needed
            const newStudent = { ...formData, id: Date.now() };
            setStudents((prev) => [...prev, newStudent]);
            setAllStudents((prev) => [...prev, newStudent]);
            setShowForm(prev => !prev);
            setFormData({
                name: "",
                age: "",
                course: courses[0],
                email: ""
            });
            setErrors({});
        }
    };


    // student details
    const [studentDetails, setStudentDetails] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    return (
        <StudentContext.Provider value={{
            students,
            setStudents,
            handlefilter,
            allStudents,
            handleInput,
            input,
            courses,
            formData,
            handleChange,
            errors,
            handleSubmit,
            showForm,
            setShowForm,
            loading,
            showDetails,
            setShowDetails,
            studentDetails,
            setStudentDetails, 
            handleDelete,           
        }}>
            {children}
        </StudentContext.Provider>
    );
};
