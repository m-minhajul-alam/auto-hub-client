import Swal from "sweetalert2";

import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

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
        const rating = (form.get('rating'));
        const updateProduct = { productImage, productName, brandName, productType, productPrice, shortDesc, rating };
        console.log(updateProduct);

        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json(updateProduct))
            .then(data => {
                // console.log(data);
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
        <div>
            <div className="h-20">
                <h1 className="text-red-500 text-3xl text-center font-bold">Update Product</h1>
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

                        <div className="form-control my-2">
                            <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2">
                            <input type="submit" className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white" value="Update Product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;