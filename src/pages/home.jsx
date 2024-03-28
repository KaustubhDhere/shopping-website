import { useEffect, useState } from "react"
import { ColorRing } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListOfProducts() {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        if (data) {
            console.log("data coming....");
            setLoading(false);
            setProducts(data);
        }

    }

    useEffect(() => {
        //console.log(products)

        fetchListOfProducts()

    }, [])


    return <div>
        {
            loading ?
                <div className="min-h-screen w-full flex justify-center items-center">
                    <ColorRing
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />

                </div> :
                <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  ls:grid-cols-4 max-w-6xl mx-auto">
                    {
                        products && products.length ?
                            products.map(productItem => <ProductTile product={productItem} key={productItem.id} />): null
                    }
                </div>
        }
    </div>
}