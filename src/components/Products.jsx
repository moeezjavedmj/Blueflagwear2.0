import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const firestoreApiBaseUrl = "https://firestore.googleapis.com/v1/projects/haroon-proj/databases/(default)/documents";
const pageSize = 1000;

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${firestoreApiBaseUrl}/products?pageSize=${pageSize}`);
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
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(({ data }) => {
        const category = data.category?.stringValue.toLowerCase();
        const title = data.name?.stringValue.toLowerCase();
        const searchValue = searchQuery.toLowerCase();
        return (filter === "All" || category === filter.toLowerCase()) && title.includes(searchValue);
    });

    return (
        <div className="container mx-auto px-4 py-10 bg-gradient-to-r from-black to-gray-900">
            <h2 className="text-4xl font-bold text-center text-white-900 mb-8">Latest Products</h2>

            {/* Search Input */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-1/2 px-4 py-3 border rounded-full shadow-md focus:ring-2 focus:ring-gray-500 outline-none"
                />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["All", "Hodies", "Joggers", "Sweatshirt", "CropsTops", "Shirts"].map((category) => (
                    <button
                        key={category}
                        className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                            filter === category
                                ? "bg-gray-900 text-white shadow-lg"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            {loading ? (
                <p className="text-center text-gray-500 text-lg">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(({ id, data }) => (
                        <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            {data.mainImageUrl && (
                                <img
                                    src={data.mainImageUrl.stringValue}
                                    alt="Product"
                                    className="w-full h-52 object-cover"
                                />
                            )}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-800">{data.name?.stringValue}</h3>
                                <p className="text-sm text-gray-600">{data.category?.stringValue}</p>
                                <div className="mt-4 flex justify-center">
                                    <Link to={`/products/${id}`} className="text-sm bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
