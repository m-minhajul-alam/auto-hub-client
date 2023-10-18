import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from '../proivders/AuthProvider';

const Login = () => {
    const { logIn, googleSingIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(" ");
    const [loginSuccess, setLoginSuccess] = useState(" ");
    const [showPass, setShowPass] = useState(false);
    const hendelLogin = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const email = (from.get('email'));
        const password = (from.get('password'));
        setLoginError(" ");
        setLoginSuccess(" ");
        logIn(email, password)
            .then(result => {
                console.log(result);
                setLoginSuccess("Login Success.");
                e.target.reset();
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }

    const hendelGoogleReg = () => {
        googleSingIn()
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="h-20">
                <h1 className="text-red-500 text-3xl text-center font-bold">Login Now!</h1>
            </div>
            <div className="hero h-full py-2">
                <div className="flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={hendelLogin} className="">
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered my-2" required />
                        </div>
                        <div className="relative form-control">
                            <input type={showPass ? "text" : "password"} name='password' placeholder="Your Password" className="input input-bordered my-2" required />
                            <span onClick={() => setShowPass(!showPass)}
                                className="absolute top-1/3 right-3 text-red-500 text-xs font-bold cursor-pointer">
                                {
                                    showPass ? "Hide" : "Show"
                                }
                            </span>
                        </div>
                        {
                            loginError && <p className="text-xs text-red-500 font-bold text-center mt-2">{loginError}</p>
                        }
                        {
                            loginSuccess && <p className="text-xs text-green-500 text-center font-bold">{loginSuccess}</p>
                        }
                        <div className="form-control my-2">
                            <button
                                className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white">
                                Login</button>
                        </div>
                        <p className="text-xs text-center">
                            Do not have account? Please <Link
                                className="text-red-500 font-bold hover:underline" to={"/register"}>
                                Register</Link>
                        </p>

                        <button onClick={hendelGoogleReg} className='text-center w-full py-1 font-bold my-2'>Login With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;