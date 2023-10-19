import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="text-4xl text-red-600">Oops, something went wrong!</div>
            <div className="text-xl text-gray-400 mb-4">We are sorry, but there was an error.</div>
            <Link to={'/'}><button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Back To Home</button></Link>
        </div>
    );
};

export default Error;