import { Link } from "react-router-dom";

const Brands = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-red-500 mb-7">Brands</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="p-3">
                    <Link>
                        <img className="mx-auto" src="https://i.ibb.co/dbMn5hg/tesla-250.png" alt="" />
                        <h4 className="text-xl font-light text-center">TESLA</h4>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Brands;