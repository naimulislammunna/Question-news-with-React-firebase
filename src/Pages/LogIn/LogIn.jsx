import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Navber from "../../Components/Navber/Navber";

const LogIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success('Log In Successfully')
                form.reset()
                navigate('/')
            })
            .catch((err) => {
                toast.error(err.message.split('/')[1])
            })
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navber/>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-[500px]">
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-xl font-semibold">Log In</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary mb-4">Log In</button>
                                <p>I don`t have an Account<Link to='/register' className="text-blue-800 ml-1 underline">Register</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;