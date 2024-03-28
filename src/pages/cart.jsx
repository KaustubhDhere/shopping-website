import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
    const [totalCart, setTotalCart] = useState(0)

    const { cart } = useSelector((state) => state)

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    console.log(cart, totalCart);
    return <div className="flex justify-center">
        {
            cart && cart.length ?
                <>
                    <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
                        <div className="flex flex-col justify-center items-center p-3">
                            {
                                cart.map(cartItem => <CartTile cartItem={cartItem} />)
                            }
                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center p-5 space-y-5 mt-10 border border-b-gray-700 rounded-md mx-3.5">
                            <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                            <ul>
                                <li> <p>
                                    <span className="text-gray-800 font-bold">
                                        Total Items :
                                    </span>
                                    <span > {cart.length}</span>

                                </p>
                                    <p>
                                        <span className="text-gray-800 font-bold">
                                            Total Amount :
                                        </span>
                                        <span > ${totalCart}</span>
                                    </p></li>
                            </ul>
                        </div>
                    </div>
                </>
                : <div className="min-h-[80hv] flex flex-col items-center justify-center">
                    <h1 className="text-gray-800 font-bold text-xl mb-2">Your cart is empty</h1>
                    <Link to={'/'}>
                        <button className="bg-red-600 text-white border-1 rounded-lg font-bold p-3">
                            SHOP NOW
                        </button>
                    </Link>
                </div>



        }
    </div>
}