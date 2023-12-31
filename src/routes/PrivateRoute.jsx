import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../proivders/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { loding } = useContext(AuthContext)
    const location = useLocation();

    if (loding) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;