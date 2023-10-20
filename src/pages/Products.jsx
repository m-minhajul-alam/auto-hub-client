import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://auto-hub-server-3dj7qilkx-muhammad-minhajul-alams-projects.vercel.app/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log('Error in useEffect:', error);
            });
    }, []);

    return (
        <div>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    products ? products.map(product => <div className="border border-gray-400 rounded-md text-center p-2 " key={product._id}>
                        <img className="h-56" src={product.productImage} alt="" />
                        <h4 className="text-xl font-bold">Name: {product.productName}</h4>
                        <p className="text-base font-bold">Band Name: {product.brandName}</p>
                        <p>Type: {product.productType} </p>
                        <p>Price: {product.productPrice}$ </p>
                        <p className="mb-2">Rating: {product.rating}/10 </p>
                        <div className="flex justify-between items-center px-10">
                            <Link to={`/productDetail/${product._id}`}><button className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white">Details</button></Link>
                            <Link to={`/updateProduct/${product._id}`}><button className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white ">Update</button></Link>
                        </div>
                    </div>)
                        : <div className="min-h-screen flex items-center justify-center">
                            <p className="text-xl text-red-600">No Data Found</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Products;