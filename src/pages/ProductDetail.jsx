import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const loadedProduct = useLoaderData();
    const { productImage, productName, brandName, productType, productPrice, shortDesc, rating } = loadedProduct;
    const myCart = { productImage, productName, brandName, productType, productPrice, shortDesc, rating };
    console.log(myCart);

    const handelMyCart = () => {
        fetch('http://localhost:5000/myCart', {
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
        <div>
            <div className="h-20">
                <h1 className="text-3xl text-center font-bold pt-3">{productName} Details</h1>
            </div>
            <div className="max-w-6xl w-[90%] mx-auto mt-3">
                <div className="flex flex-col lg:flex-row mb-10 gap-7">
                    <img className="h-full max-w-xl" src={productImage} alt="" />
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-5">{productName}</h1>
                        <h5 className="text-sm font-bold mb-2">Brand Name: <span className="text-lg  mb-4">{brandName}</span></h5>
                        <h5 className="text-sm font-bold mb-2">Product Type: <span className="text-lg  mb-4">{productType}</span></h5>
                        <h5 className="text-sm font-bold mb-2">Short Description: <span className="text-lg  mb-4">{shortDesc}</span></h5>
                        <h5 className="text-sm font-bold mb-2">Rating: <span className="text-lg">{rating}/10</span></h5>
                        <h5 className="text-sm font-bold">Product Price: <span className="font-normal"> {productPrice}$</span></h5>
                        <button onClick={handelMyCart} className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white mt-5">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;