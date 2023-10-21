import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../proivders/AuthProvider";

const ProductDetail = () => {
    const { user } = useContext(AuthContext)
    const userMail = (user.email);
    const loadedProduct = useLoaderData();
    const { productImage, productName, brandName, productType, productPrice, shortDesc, rating } = loadedProduct;
    const myCart = { userMail, productImage, productName, brandName, productType, productPrice, shortDesc, rating };

    const handelMyCart = () => {
        fetch('https://auto-hub-server-jqo6suew1-muhammad-minhajul-alams-projects.vercel.app/myCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added In Cart',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <div className="min-h-screen">
            <div className="h-20">
                <h2 className="text-3xl font-bold text-center  mb-7">Details of <span className="text-red-600">{productName}</span></h2>
            </div>
            <div className="max-w-6xl w-[90%] mx-auto mt-5">
                <div className="flex flex-col lg:flex-row mb-10 gap-7">
                    <img className="h-full max-w-xl" src={productImage} alt="" />
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-xl font-bold mb-3">{productName}</h1>
                        <h5 className="text-sm font-bold mb-2">Brand Name: <span className="font-normal">{brandName}</span></h5>
                        <h5 className="text-sm font-bold mb-2">Product Type: <span className="font-normal">{productType}</span></h5>
                        <h5 className="text-sm font-bold mb-2">Short Description: <span className="font-normal">{shortDesc}</span></h5>
                        <h5 className="text-sm font-bold mb-2">Rating: <span className="font-normal">{rating}/5</span></h5>
                        <h5 className="text-sm font-bold">Product Price: <span className="font-normal"> {productPrice}$</span></h5>
                        <button onClick={handelMyCart} className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white mt-5">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;