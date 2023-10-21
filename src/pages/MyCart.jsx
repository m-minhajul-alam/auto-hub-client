import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../proivders/AuthProvider";

const MyCart = () => {
    const { user } = useContext(AuthContext)
    const myCarts = useLoaderData();
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const userCart = myCarts.filter((cart) => cart.userMail === user.email);
        setCarts(userCart);
    }, [myCarts, user.email]);

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
                fetch(`https://auto-hub-server-jqo6suew1-muhammad-minhajul-alams-projects.vercel.app/myCart/${_id}`, {
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
                        const remainingCart = carts.filter((cart) => cart._id !== _id);
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
        <div className="min-h-screen">
            <div className="h-20">
                <h2 className="text-3xl font-bold text-center  mb-7">My <span className="text-red-600">Carts</span></h2>
            </div>

            <div className="max-w-lg mx-auto space-y-3">
                {
                    carts.length === 0 ? (
                        <p className="text-center text-gray-500 mt-48 font-bold">No Cart Added</p>
                    ) :
                        (carts.map(myCart => <div className="border border-gray-400 rounded-md flex flex-col md:flex-row justify-between items-center" key={myCart._id}>
                            <img className="h-32 p-3" src={myCart.productImage} alt="" />
                            <div className="space-y-1 p-2 text-center md:text-right">
                                <h4 className="text-xl font-bold">{myCart.productName}</h4>
                                <p>Price: {myCart.productPrice}$ </p>
                                <button onClick={() => handelDelete(myCart._id)} className="btn btn-primary border-none hover:border-none bg-red-600 hover:bg-red-700 text-white">Delete Item</button>
                            </div>
                        </div>))
                }
            </div>
        </div>
    );
};

export default MyCart;