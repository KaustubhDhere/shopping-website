import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);

    function handleAddToCart() {
        // console.log(product);
        console.log("add button clicked");
        dispatch(addToCart(product));
    }

    function handleRemoveFromCart() {
        console.log("removed");
        dispatch(removeFromCart(product.id))
    }


    return <div>
        <div className="group flex flex-col items-center border-2 border-red-900 gap p-4 h-[360px] mt-10 ml-5 rounded-xl ">
            <div className="h-[180px]">
                <img src={product?.image}
                    alt={product?.title}
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
                <h1>{product?.title}</h1>
                <div className="w-30 truncate mt-2 font-bold text-lg ml-12 text-red-600">
                    <h3>${product?.price}</h3>
                    
                </div>
               
            </div>

            <div className="flex items-center justify-center w-full mt-6">

                <button onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart} className="bg-red-600 text-white border-1 rounded-lg font-bold p-3">
                    {
                        cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
                    }
                </button>
            </div>

        </div>
    </div>
}