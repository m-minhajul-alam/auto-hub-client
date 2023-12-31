import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Rating from 'react-rating-stars-component';

const UpdateProduct = () => {
    const [userRating, setUserRating] = useState(0);

    const handleRating = (rating) => {
        setUserRating(rating);
    };
    const loadedProduct = useLoaderData();
    const { _id, productImage, productName, brandName, productType, productPrice, shortDesc, rating } = loadedProduct;

    const handelUpdateProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productImage = (form.get('productImage'));
        const productName = (form.get('productName'));
        const brandName = (form.get('brandName'));
        const productType = (form.get('productType'));
        const productPrice = (form.get('productPrice'));
        const shortDesc = (form.get('shortDesc'));
        const updateProduct = { productImage, productName, brandName, productType, productPrice, shortDesc, rating: userRating };

        fetch(`https://auto-hub-server-jqo6suew1-muhammad-minhajul-alams-projects.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${productName} is Updated`,
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="h-20">
                <h2 className="text-3xl font-bold text-center  mb-7">Update <span className="text-red-600">Product</span></h2>
            </div>
            <div className="hero">
                <div className="flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handelUpdateProduct}>
                        <div className="form-control my-2">
                            <input type="url" name='productImage' defaultValue={productImage} placeholder="Product Image URL" className="input input-bordered text-sm" />
                        </div>

                        <div className="form-control my-2">
                            <input type="text" name='productName' defaultValue={productName} placeholder="Product Name" className="input input-bordered text-sm" required />
                        </div>

                        <select name='brandName' defaultValue={brandName} className="select select-bordered w-full my-2" required>
                            <option disabled selected >Select a Brand Name</option>
                            <option>Toyota</option>
                            <option>Rolls Royce</option>
                            <option>BMW</option>
                            <option>Mercedes-Benz</option>
                            <option>Tesla</option>
                            <option>Honda</option>
                        </select>

                        <div className="form-control my-2">
                            <input type="text" name='productType' defaultValue={productType} placeholder="Product Type" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2">
                            <input type="text" name='productPrice' defaultValue={productPrice} placeholder="Product Price" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2">
                            <input type="text" name='shortDesc' defaultValue={shortDesc} placeholder="Short description" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2 flex justify-center items-center">
                            <p>Select Your Rating</p>
                            <Rating count={5} onChange={handleRating} size={24} value={rating} />
                        </div>

                        <div className="form-control my-2">
                            <input type="submit" className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white" value="Update Product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;