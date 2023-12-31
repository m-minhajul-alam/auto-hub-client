import { useState } from 'react';
import Swal from "sweetalert2";
import Rating from 'react-rating-stars-component';
import { useRef } from 'react';

const AddProduct = () => {
    const [userRating, setUserRating] = useState(0);
    const formRef = useRef();

    const handleRating = (rating) => {
        setUserRating(rating);
    };
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productImage = (form.get('productImage'));
        const productName = (form.get('productName'));
        const brandName = (form.get('brandName'));
        const productType = (form.get('productType'));
        const productPrice = (form.get('productPrice'));
        const shortDesc = (form.get('shortDesc'));
        const newProduct = { productImage, productName, brandName, productType, productPrice, shortDesc, rating: userRating };

        fetch('https://auto-hub-server-jqo6suew1-muhammad-minhajul-alams-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Product Added',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    });
                    formRef.current.reset();
                    setUserRating(0);
                }
            });
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="h-20">
                <h2 className="text-3xl font-bold text-center  mb-7">Add <span className="text-red-600">Product</span></h2>
            </div>
            <div className="hero">
                <div className="flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleAddProduct} ref={formRef}>
                        <div className="form-control my-2">
                            <input type="url" name='productImage' placeholder="Product Image URL" className="input input-bordered text-sm" />
                        </div>

                        <div className="form-control my-2">
                            <input type="text" name='productName' placeholder="Product Name" className="input input-bordered text-sm" required />
                        </div>

                        <select name='brandName' className="select select-bordered w-full my-2" required>
                            <option disabled selected >Select a Brand Name</option>
                            <option>Toyota</option>
                            <option>Rolls Royce</option>
                            <option>BMW</option>
                            <option>Mercedes-Benz</option>
                            <option>Tesla</option>
                            <option>Honda</option>
                        </select>

                        <div className="form-control my-2">
                            <input type="text" name='productType' placeholder="Product Type" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2">
                            <input type="text" name='productPrice' placeholder="Product Price" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2">
                            <input type="text" name='shortDesc' placeholder="Short description" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2  flex justify-center items-center">
                            <p>Select Your Rating</p>
                            <Rating count={5} onChange={handleRating} size={24} value={userRating} />
                        </div>

                        <div className="form-control my-2">
                            <input type="submit" className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white" value="Add Product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default AddProduct;