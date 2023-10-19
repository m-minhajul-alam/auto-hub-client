import { useEffect, useState } from "react";
import Slider from "../components/Slider";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log('Error in useEffect:', error);
            });
    }, []);

    console.log(products);

    return (
        <div>
            <Slider></Slider>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {
                    products ? products.map(product => <div className="border border-gray-400 rounded-md space-x-5" key={product._id}>
                        <img className="h-56 py-2" src={product.productImage} alt="" />
                        <h4 className="text-xl font-bold pb-2">Name: {product.productName}</h4>
                        <p className="text-base font-bold">Band Name: {product.brandName}</p>
                        <p className="">Type: {product.productType} </p>
                        <p>Price: {product.productPrice} </p>
                        <p className="mb-2">Rating: {product.rating} </p>
                        <button className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white mb-2 mr-6">Details</button>
                        <button className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white ">Update</button>
                    </div>)
                        : <div><p>No Data Found</p></div>
                }
            </div>

        </div>
    );
};

export default Products;