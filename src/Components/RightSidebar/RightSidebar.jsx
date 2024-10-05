import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const RightSidebar = () => {
    const { googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const hnadleLogIn = () => {
        googleLogIn()
            .then(() => {
                toast.success('Log In Successfully')
                navigate('/')
            })
            .catch((err) => {
                toast.error(err.message.split('/')[1])
            })

    }

    return (
        <div className="h-full">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="sticky top-5">
                <h2 className="font-bold mb-3">Login With</h2>
                <div className="space-y-3">
                    <p onClick={hnadleLogIn} className="flex gap-2 items-center justify-center border-2 rounded-lg py-2 text-center cursor-pointer"> <FaGoogle /> LogIn With Google</p>
                    <p className="flex gap-2 items-center justify-center border-2 rounded-lg py-2 text-center  cursor-pointer"><FaGithub /> Login With Github</p>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;