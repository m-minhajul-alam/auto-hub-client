import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
    const myCarts = useLoaderData();
    console.log(myCarts);
    return (
        <div>
            <div className="h-20">
                <h1 className="text-red-500 text-3xl text-center font-bold">My Cart</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {
                    myCarts.map(myCart => <div className="border border-gray-400 rounded-md space-x-5" key={myCart._id}>
                        <img className="h-56 p-2" src={myCart.productImage} alt="" />
                        <h4 className="text-xl font-bold pb-2">Name: {myCart.productName}</h4>
                        <p className="text-base font-bold">Band Name: {myCart.brandName}</p>
                        <p className="">Type: {myCart.productType} </p>
                        <p>Price: {myCart.productPrice}$ </p>
                        <p className="mb-2">Rating: {myCart.rating}/10 </p>
                        <Link to={`/productDetail/${myCart._id}`}><button className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white mb-2 mr-6">Details</button></Link>
                        <button className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white ">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;