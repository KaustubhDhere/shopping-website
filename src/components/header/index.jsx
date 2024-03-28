import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const { cart } = useSelector((state) => state)
    return (
        <div className="bg-slate-200		">
            <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
                <Link to={"/"}>
                    <div className="ml-5">
                        <h1 className="text-orange-600 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
                            REACT REDUX SHOPPING CART
                        </h1>
                    </div>
                </Link>
                <div className="flex list-none item-center space-x-6 text-gray-800 font-semibold mt-2">
                    <Link to={'/'}>
                        <button type="button" class="mt-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                           Home
                        </button>
                    </Link>
                    <Link to={'/cart'}>
                        <button type="button" class="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Cart
                            <span class="flex absolute top-0 end-0 -mt-2 -me-2">
                                <span class="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                                <span class="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                                    {cart.length}
                                </span>
                            </span>
                        </button>
                    </Link>
                </div>

            </nav>
        </div>
    );
}
