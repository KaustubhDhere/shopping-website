import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice";



export default function CartTile({ cartItem }) {

    const dispatch = useDispatch();
    function handleRemoveFromCart() {
        dispatch(removeFromCart(cartItem.id))
    }

    return <>
        <div className="flex items-center justify-center bg-red-500 mt-2 mb-3 rounded-xl">
            <div className="flex p-3 border border-s-black">

                <img src={cartItem?.image} className="h-28 rounded-lg" alt={cartItem?.title} />
                <div className="ml-10 self-start space-y-5">
                    <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
                    <p className="text-white font-extrabold">${cartItem?.price}</p>
                </div>
            </div>
            <div className="mx-2.5">
                <button onClick={handleRemoveFromCart} className="bg-red-600 text-white border-1 rounded-lg font-bold p-3">
                    Remove from cart
                </button>
            </div>

        </div>

    </>
}