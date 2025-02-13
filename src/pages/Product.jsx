import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Footer, Navbar } from "../components";
import axios from "axios";

const firestoreApiBaseUrl =
    "https://firestore.googleapis.com/v1/projects/haroon-proj/databases/(default)/documents";
const pageSize = 1000;

const Product = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                let url = `${firestoreApiBaseUrl}/products?pageSize=${pageSize}`;
                const response = await axios.get(url);
                const fetchedProducts = response.data.documents.map((doc) => ({
                    id: doc.name.split("/").pop(),
                    data: doc.fields,
                }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, []);

    const addProductToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                {loading ? (
                    <Skeleton height={400} width={"100%"} />
                ) : (
                    products
                        .filter(({ id: productId }) => productId === id)
                        .map(({ id, data }) => (
                            <div key={id} className="grid md:grid-cols-2 gap-6">
                                {/* Product Image */}
                                <div className="w-full flex justify-center">
                                    <img
                                        src={data.mainImageUrl?.stringValue}
                                        alt="Product"
                                        className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                {/* Product Info */}
                                <div className="flex flex-col justify-between p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
                                    <h4 className="text-gray-500 dark:text-gray-300 uppercase">{data.category?.stringValue}</h4>
                                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{data.title?.stringValue}</h2>
                                    <h3 className="text-2xl font-semibold my-4 text-blue-600">${data.price?.integerValue}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{data.description?.stringValue}</p>
                                    <div className="flex space-x-4 mt-4">
                                        {/* <button
                                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition"
                                            onClick={() => addProductToCart(data)}
                                        >
                                            Add to Cart
                                        </button>
                                        <Link
                                            to="/cart"
                                            className="bg-gray-900 hover:bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md transition"
                                        >
                                            Go to Cart
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        ))
                )}
                {/* Similar Products */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">You may also like</h2>
                    <Marquee pauseOnHover={true} speed={50}>
                        {products.slice(0, 4).map(({ id, data }) => (
                            <div key={id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 m-2 w-60 flex flex-col items-center">
                                <img
                                    src={data.mainImageUrl?.stringValue}
                                    alt="Product"
                                    className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mt-3">{data.title?.stringValue}</h5>
                                <p className="text-sm text-gray-500 dark:text-gray-300">{data.category?.stringValue}</p>
                                <Link
    to={`/products/${id}`}
    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition text-center"
>
    View Product
</Link>

                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
