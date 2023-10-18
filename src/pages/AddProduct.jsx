const AddProduct = () => {

    const handelAddProduct = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const productImage = (from.get('productImage'));
        const productName = (from.get('productName'));
        const brandName = (from.get('brandName'));
        const productType = (from.get('productType'));
        const productPrice = (from.get('productPrice'));
        const shortDesc = (from.get('shortDesc'));
        const rating = (from.get('rating'));
        const newProduct = { productImage, productName, brandName, productType, productPrice, shortDesc, rating };
        console.log(newProduct);
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
                            <option disabled selected>Select a Brand Name</option>
                            <option>Toyota</option>
                            <option>Ford</option>
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
                            <button className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;