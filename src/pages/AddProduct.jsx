import Swal from "sweetalert2";

const AddProduct = () => {
    const handelAddProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productImage = (form.get('productImage'));
        const productName = (form.get('productName'));
        const brandName = (form.get('brandName'));
        const productType = (form.get('productType'));
        const productPrice = (form.get('productPrice'));
        const shortDesc = (form.get('shortDesc'));
        const rating = (form.get('rating'));
        const newProduct = { productImage, productName, brandName, productType, productPrice, shortDesc, rating };
        // console.log(newProduct);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Coffee Added',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div>
            <div className="h-20">
                <h1 className="text-red-500 text-3xl text-center font-bold">Add A New Product</h1>
            </div>
            <div className="hero">
                <div className="flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handelAddProduct}>
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

                        <div className="form-control my-2">
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control my-2">
                            <input type="submit" className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white" value="Add Product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default AddProduct;