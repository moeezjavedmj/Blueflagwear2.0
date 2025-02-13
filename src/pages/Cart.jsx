import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart, clearCart } from "../redux/action"; // Import clearCart action
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const firestoreApiBaseUrl =
    "https://firestore.googleapis.com/v1/projects/haroon-proj/databases/(default)/documents";
const pageSize = 1000;

const Cart = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.handleCart);
  const [products, setProducts] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      if (!hasMoreData || dataFetched) {
        return;
      }

      let url = `${firestoreApiBaseUrl}/products?pageSize=${pageSize}`;

      if (nextPageToken) {
        url += `&pageToken=${nextPageToken}`;
      }

      const response = await axios.get(url);

      const fetchedProducts = response.data.documents.map((doc) => {
        const data = doc.fields;
        return {
          id: doc.name.split("/").pop(),
          title: data.title.stringValue,
          price: parseFloat(data.price?.integerValue),
          image: data.mainImageUrl.stringValue,
        };
      });

      setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
      setDataFetched(true);

      if (response.data.nextPageToken) {
        setNextPageToken(response.data.nextPageToken);
      } else {
        setNextPageToken(null);
        setHasMoreData(false);
      }
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setLoading(false);
    }
  };

  const EmptyCart = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">Your Cart is Empty</h4>
              <Link to="/" className="btn btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
    );
  };
  const addItem = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].qty += 1;
      dispatch(addCart(updatedCart));
    } else {
      const newItem = { ...product, qty: 1 };
      dispatch(addCart([...cartItems, newItem]));
    }
  };

  const removeItem = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      if (updatedCart[existingItemIndex].qty > 1) {
        updatedCart[existingItemIndex].qty -= 1;
        dispatch(addCart(updatedCart));
      } else {
        updatedCart.splice(existingItemIndex, 1);
        if (updatedCart.length === 0) {
          dispatch(clearCart()); // Dispatch clearCart action if cart becomes empty
        } else {
          dispatch(delCart(updatedCart));
        }
      }
    }
  };

  const calculateSubtotal = (price, qty) => {
    return price * qty;
  };

  const handleWhatsAppCheckout = async () => {
    // Check if user entered name and address
    if (!userName.trim() || !address.trim()) {
      alert("Please enter your name and address.");
      return;
    }

    // Initialize total price and shipping charge
    let totalPrice = 0;
    const shippingCharge = 10; // Example shipping charge, you can set it according to your requirements

    // Extract necessary order details
    let message = `New Order from ${userName}:\n\n`;
    message += `Address: ${address}\n\n`;

    // Add product details to the message and calculate total price
    cartItems.forEach((item) => {
      const product = products.find((product) => product.id === item.id);
      if (product) {
        // Fetch image of the product
        const image = product.image ? `<img src="${product.image}" alt="${product.title}" width="100" height="75" />\n` : ''; // Include image in HTML format if available

        message += `${image}Product: ${product.title}, Quantity: ${item.qty}, Price: ${product.price}\n`;

        // Calculate subtotal for each item and add to total price
        totalPrice += item.qty * product.price;
      }
    });

    // Add shipping charge to the total price
    totalPrice += shippingCharge;

    // Add total price and shipping charge to the message
    message += `\nSubtotal: $${(totalPrice - shippingCharge).toFixed(2)}`;
    message += `\nShipping Charge: $${shippingCharge.toFixed(2)}`;
    message += `\nTotal Price (including shipping): $${totalPrice.toFixed(2)}`;

    // Replace YOUR_ADMIN_WHATSAPP_NUMBER with the admin's WhatsApp number
    const adminWhatsAppNumber = "+923338744696";

    // Create the WhatsApp message URL with pre-filled content
    const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(whatsappUrl, "_blank");
  };


  const ShowCart = ({ cartItems }) => {
    let totalItems = 0;

    if (!products.length) {
      return <div>Loading...</div>;
    }

    return (
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {cartItems.map((item) => {
                      const product = products.find((p) => p.id === item.id);
                      if (!product) {
                        console.warn(`Product not found for ID: ${item.id}`);
                        return null;
                      }
                      const subtotal = calculateSubtotal(product.price, item.qty);
                      return (
                          <div key={item.id}>
                            <div className="row d-flex align-items-center">
                              <div className="col-lg-3 col-md-12">
                                <div className="bg-image rounded" data-mdb-ripple-color="light">
                                  <img src={product.image} alt={product.title} width={100} height={75} />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-6">
                                <p><strong>{product.title}</strong></p>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className="d-flex align-items-center justify-content-center">
                                  <button className="btn btn-secondary btn-sm" onClick={() => removeItem(product)}>-</button>
                                  <p className="mx-2">{item.qty}</p>
                                  <button className="btn btn-secondary btn-sm" onClick={() => addItem(product)}>+</button>
                                </div>
                                <p className="text-start text-md-center">
                                  <strong><span className="text-muted">{item.qty}</span> x {product.price}</strong><br />
                                  <span>Subtotal: {subtotal.toFixed(2)}</span>
                                </p>
                              </div>
                            </div>
                            <hr className="my-4" />
                          </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  };

  return (
      <>
        <Navbar />
        <div className="container my-3 py-3">
          <h1 className="text-center">Cart</h1>
          <hr />
          {cartItems.length > 0 ? (
              <section className="h-100 gradient-custom">
                <div className="container py-5">
                  <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                      <div className="card mb-4">
                        <div className="card-header py-3">
                          <h5 className="mb-0">Item List</h5>
                        </div>
                        <div className="card-body">
                          {cartItems.map((item) => {
                            const product = products.find((p) => p.id === item.id);
                            if (!product) {
                              console.warn(`Product not found for ID: ${item.id}`);
                              return null;
                            }
                            const subtotal = calculateSubtotal(product.price, item.qty);
                            return (
                                <div key={item.id}>
                                  <div className="row d-flex align-items-center">
                                    <div className="col-lg-3 col-md-12">
                                      <div className="bg-image rounded" data-mdb-ripple-color="light">
                                        <img src={product.image} alt={product.title} width={100} height={75} />
                                      </div>
                                    </div>

                                    <div className="col-lg-5 col-md-6">
                                      <p><strong>{product.title}</strong></p>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                        <button className="btn px-3" onClick={() => removeItem(product)}><i className="fas fa-minus"></i></button>
                                        <button className="btn px-3" onClick={() => addItem(product)}><i className="fas fa-plus"></i></button>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-center">
                                        <button className="btn btn-secondary btn-sm" onClick={() => removeItem(product)}>-</button>
                                        <p className="mx-2">{item.qty}</p>
                                        <button className="btn btn-secondary btn-sm" onClick={() => addItem(product)}>+</button>
                                      </div>
                                      <p className="text-start text-md-center">
                                        <strong><span className="text-muted">{item.qty}</span> x {product.price}</strong><br />
                                        <span>Subtotal: {subtotal.toFixed(2)}</span>
                                      </p>
                                    </div>
                                  </div>
                                  <hr className="my-4" />
                                </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          ) : (
              <EmptyCart />
          )}

          <div className="col-md-12 mt-3">
            <form onSubmit={handleWhatsAppCheckout}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">Name</label>
                <input type="text" className="form-control" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <button type="submit" className="w-100 btn btn-success">
                <FontAwesomeIcon icon={faWhatsapp} /> Checkout via WhatsApp
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>

);
};

export default Cart;
