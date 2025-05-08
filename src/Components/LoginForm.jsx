
import { useAuthContext } from "../Context/AuthContext";

const LoginForm = () => {
    const { email, setEmail, password, setPassword, isRegister, error, toggleMode, handleGoogleSignIn, handleSubmit } = useAuthContext()


    return (
        <div className="fixed inset-0 flex items-center justify-center z-10  backdrop-blur-sm">
            <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
                <fieldset className="fieldset border-base-300 rounded-box border p-4">
                    <legend className="fieldset-legend text-xl mb-2">
                        {isRegister ? "Register" : "Login"}
                    </legend>

                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="label mt-2">Password</label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <button className="btn btn-neutral mt-4 w-full" onClick={handleSubmit}>
                        {isRegister ? "Register" : "Login"}
                    </button>

                    <button className=" flex items-center justify-center btn btn-outline mt-2 w-full" onClick={handleGoogleSignIn}>
                        <img src="/public/google.png" alt="Google" className="w-5 h-5" />Google {isRegister ? "Sign Up" : "Login"}
                    </button>

                    <p className="text-sm text-center mt-4">
                        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button onClick={toggleMode} className="text-blue-500 underline cursor-pointer">
                            {isRegister ? "Login" : "Register"}
                        </button>
                    </p>
                </fieldset>
            </div>
        </div>
    );
};

export default LoginForm;
