import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const myCarts = useLoaderData();
    const [carts, setCarts] = useState(myCarts);

    const handelDelete = (_id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your one cart has been deleted.',
                                'success'
                            )
                        }
                        const remainingCart = myCarts.filter(cart => cart._id !== _id);
                        setCarts(remainingCart);
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }


    return (
        <div>
            <div className="h-20">
                <h1 className="text-red-500 text-3xl text-center font-bold">My Cart</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {
                    carts.map(myCart => <div className="border border-gray-400 rounded-md space-x-5" key={myCart._id}>
                        <img className="h-56 p-2" src={myCart.productImage} alt="" />
                        <h4 className="text-xl font-bold pb-2">Name: {myCart.productName}</h4>
                        <p className="text-base font-bold">Band Name: {myCart.brandName}</p>
                        <p className="">Type: {myCart.productType} </p>
                        <p>Price: {myCart.productPrice}$ </p>
                        <p className="mb-2">Rating: {myCart.rating}/10 </p>
                        <Link to={`/productDetail/${myCart._id}`}><button className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white mb-2 mr-6">Details</button></Link>
                        <button onClick={() => handelDelete(myCart._id)} className="btn btn-primary border-none hover:border-none bg-red-500 hover:bg-red-700 text-white ">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;