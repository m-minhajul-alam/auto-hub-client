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
                fetch(`https://auto-hub-server-3dj7qilkx-muhammad-minhajul-alams-projects.vercel.app/myCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                `Cart has been deleted.`,
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
                <h1 className="text-red-600 text-3xl text-center font-bold">My Cart</h1>
            </div>

            <div className="max-w-lg mx-auto space-y-3">
                {
                    carts.map(myCart => <div className="border border-gray-400 rounded-md flex flex-col md:flex-row justify-between items-center" key={myCart._id}>
                        <img className="h-32 p-3" src={myCart.productImage} alt="" />
                        <div className="space-y-1 p-2 text-center md:text-right">
                            <h4 className="text-xl font-bold pb-2">{myCart.productName}</h4>
                            <p>Price: {myCart.productPrice}$ </p>
                            <Link to={`/productDetail/${myCart._id}`}><button className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white mr-2">Details</button></Link>
                            <button onClick={() => handelDelete(myCart._id)} className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;