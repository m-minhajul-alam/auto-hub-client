import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../proivders/AuthProvider";

const Register = () => {
    const { createUser, googleSingIn } = useContext(AuthContext);
    const [emailError, setEmailError] = useState(" ");
    const [passError, setPassError] = useState(" ");
    const [regSuccess, setRegSuccess] = useState(" ");
    const [showPass, setShowPass] = useState(false);
    const [namePhoto, setNamePhoto] = useState()
    const navigate = useNavigate();
    const location = useLocation();

    const hendelRegister = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = (from.get('name'));
        const photo = (from.get('photo'));
        const email = (from.get('email'));
        const password = (from.get('password'));
        setRegSuccess(" ");
        setEmailError(" ");
        setPassError(" ");
        if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            setPassError("password should be minimum 6 characters, at least 1 capitel letter and 1 special characte.");
            return;
        }
        createUser(email, password)
            .then(result => {
                setRegSuccess("Rgistration Success.");
                e.target.reset();
                navigate(location?.state ? location.state : '/')
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                    }).catch((error) => {
                        console.log(error);
                    })
            })
            .catch(error => {
                setEmailError(error.message);
            })
    }

    const hendelGoogleReg = () => {
        googleSingIn()
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
        navigate(location?.state ? location.state : '/')
    }

    return (
        <div>
            <div className="h-20">
                <h1 className="text-red-600 text-3xl text-center font-bold">Register Now!</h1>
            </div>
            <div className="hero">
                <div className="flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={hendelRegister}>
                        <div className="form-control my-2">
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control my-2">
                            <input type="url" name='photo' placeholder="Your Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control my-2">
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="relative form-control my-2">
                            <input type={showPass ? "text" : "password"} name='password' placeholder="Your Password" className="input input-bordered" required />
                            <span onClick={() => setShowPass(!showPass)}
                                className="absolute top-1/3 right-3 text-red-600 text-xs font-bold cursor-pointer">
                                {
                                    showPass ? "Hide" : "Show"
                                }
                            </span>
                        </div>
                        {
                            passError && <p className="text-xs text-red-600 font-bold ml-3 mt-2">{passError}</p>
                        }

                        {
                            regSuccess && <p className="text-xs text-green-500 text-center font-bold">{regSuccess}</p>
                        }
                        {
                            emailError && <p className="text-xs text-red-600 font-bold ml-3 mt-2">{emailError}</p>
                        }
                        <div className="form-control my-2">
                            <button className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white">Register</button>
                        </div>
                        <p className="text-xs text-center">Alredy have account? Please <Link
                            className="text-red-600 font-bold hover:underline" to={"/login"}>Login</Link>
                        </p>
                    </form>
                    <button onClick={hendelGoogleReg} type="submit" className='text-center w-full py-1 font-bold my-2'>Singin With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;