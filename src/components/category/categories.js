import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import {addCart} from "../../redux/action";
// Import your firestore instance

const Category = () => {
    const { category } = useParams(); // Extract category from URL
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [categoryData, setCategoryData] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                setLoading(true);
                if (!category) {
                    throw new Error("Category is missing or invalid.");
                }
                // Fetch the category document to get its ID
                const categoryDocRef = doc(collection(db, "categories"), category);
                const categorySnapshot = await getDoc(categoryDocRef);
                const categoryId = categorySnapshot.id;

                // Query the products subcollection of the category
                const q = query(collection(db, "categories", category, "products"));
                const querySnapshot = await getDocs(q);

                // Map through the documents and extract the data
                const fetchedProducts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }));
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };


        fetchCategoryData();
    }, [category]);

    console.log(category)
    const Loading = () => (
        <div className="container my-5 py-2">
            <Skeleton height={400} width={400} />
        </div>
    );

    const addProductToCart = (productId) => {
        const product = products.find(product => product.id === productId);
        if (product) {
            dispatch(addCart(product));
        }
    };

    const ShowProduct = () => (
        <div className="container my-5 py-2">
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">All Products in {category}</h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {products.map(({ id, data }) => (
                    <div key={id} className="col mb-4">
                        <div className="card h-100">
                            {data.mainImageUrl && (
                                <img
                                    src={data.mainImageUrl}
                                    alt="Product"
                                    className="card-img-top img-fluid"
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{truncateString(data.description, 100)}</p>
                                {/*<p className="card-text">${data.price}</p>*/}
                                <div className="d-grid gap-2">
                                    <Link to={`/products/${id}`} className="btn btn-dark" role="button">Open</Link>
                                    {/*<button onClick={() => addProductToCart(id)} className="btn btn-dark">Add to Cart</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

// Function to truncate a string to a specified length
    const truncateString = (str, maxLength) => {
        if (!str) return '';
        return str.length > maxLength ? str.substring(0, maxLength - 3) + '...' : str;
    };



    const ErrorMessage = ({ message }) => (
        <div className="container my-5 py-2">
            <p>{message}</p>
        </div>
    );

    return (
        <>
            <Navbar />
            {loading ? (
                <Loading />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : (
                <ShowProduct />
            )}
            <Footer />
        </>
    );
};

export default Category;
