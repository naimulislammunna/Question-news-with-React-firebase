import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Navber from "../../Components/Navber/Navber";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                updateUser(name, photoUrl)
                    .then(() => toast.success('Successfully Registered'))
                    .catch(err => console.log(err))
                form.reset()
                navigate('/')
            })
            .catch((err) => {
                toast.error(err.message.split('/')[1].slice(0, 20))
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
                            <h1 className="text-xl font-semibold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo url" name="photoUrl" className="input input-bordered" required />
                            </div>
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
                                <button type="submit" className="btn btn-primary">Register</button>
                                <p className="mt-4">I have an Account<Link to='/log-in' className="text-blue-800 ml-1 underline">Log In</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;