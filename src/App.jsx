import Dashboard from "./Components/Dashboard"
import LoginForm from "./Components/LoginForm"
import NavBar from "./Components/NavBar"
import StudentDetails from "./Components/StudentDetails";
import StudentForm from "./Components/StudentForm"
import { useAuthContext } from "./Context/AuthContext";


function App() {
  const { showLoginForm } = useAuthContext();

  return (
    <div className=" bg-gray-200 ">
      <StudentForm/>
      <StudentDetails/>
      {showLoginForm && <LoginForm/>}
      <NavBar />
      <div className="w-full min-h-screen">
        <Dashboard />
      </div>
    </div>
  )
}

export default App
