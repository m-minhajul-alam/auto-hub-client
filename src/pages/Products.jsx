import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { Link, useParams } from "react-router-dom";
import UserRating from "../components/UserRating";
// import { Rating } from "primereact/rating";

const Products = () => {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://auto-hub-server-jqo6suew1-muhammad-minhajul-alams-projects.vercel.app/products')
            .then((response) => response.json())
            .then((data) => {
                setLoadedProducts(data);
            })
            .catch((error) => {
                console.log('Error in useEffect:', error);
            });
    }, []);

    useEffect(() => {
        if (id == 1) {
            const filtered = loadedProducts.filter(product => { return product.brandName === "Toyota" })
            return setProducts(filtered);
        } else if (id == 2) {
            const filtered = loadedProducts.filter(product => { return product.brandName === "Rolls Royce" })
            return setProducts(filtered);
        } else if (id == 3) {
            const filtered = loadedProducts.filter(product => { return product.brandName === "BMW" })
            return setProducts(filtered);
        } else if (id == 4) {
            const filtered = loadedProducts.filter(product => { return product.brandName === "Mercedes-Benz" })
            return setProducts(filtered);
        } else if (id == 5) {
            const filtered = loadedProducts.filter(product => { return product.brandName === "Tesla" })
            return setProducts(filtered);
        } else if (id == 6) {
            const filtered = loadedProducts.filter(product => { return product.brandName === "Honda" })
            return setProducts(filtered);
        }
    }, [id, loadedProducts])
    console.log(products.rating);

    return (
        <div className="min-h-screen">
            <Slider></Slider>
            {
                products.length === 0 ? (
                    <p className="text-center text-gray-500 mb-24 font-bold">No Data Found</p>
                ) :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {

                            (products.map(product => <div className="border border-gray-400 rounded-md text-center p-2 " key={product._id}>
                                <img className="h-56" src={product.productImage} alt="" />
                                <h4 className="text-xl font-bold">Name: {product.productName}</h4>
                                <p className="text-base font-bold">Band Name: {product.brandName}</p>
                                <p>Type: {product.productType} </p>
                                <p>Price: {product.productPrice}$ </p>
                                <p className="mb-2">Rating: {product.rating}/5 </p>
                                <UserRating value={5} readOnly cancel={false}></UserRating>
                                {/* <Rating value={5} readOnly cancel={false} /> */}
                                <div className="flex justify-between items-center px-10">
                                    <Link to={`/productDetail/${product._id}`}><button className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white">Details</button></Link>
                                    <Link to={`/updateProduct/${product._id}`}><button className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white ">Update</button></Link>
                                </div>
                            </div>))
                        }
                    </div>
            }
        </div>
    );
};

export default Products;