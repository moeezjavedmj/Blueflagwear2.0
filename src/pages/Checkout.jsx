import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase";
// import OrderDetails from "../admin/order";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const firestoreDb = getFirestore(app);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const items = state.map(item => ({
        id: item.id,
        data: {
          category: item.data.category,
          description: item.data.description,
          mainImageUrl: item.data.mainImageUrl,
          name: item.data.name,
          price: parseFloat(item.data.price), // Ensure price is stored as a number
          subImageUrls: item.data.subImageUrls,
          title: item.data.title
        }
      }));

      const totalPrice = calculateTotalPrice();

      const docRef = await addDoc(collection(firestoreDb, "orders"), {
        billingAddress: {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          address: formData.get("address"),
          address2: formData.get("address2"),
          state: formData.get("state"),
          zip: formData.get("zip"),
        },
        items: items,
        totalPrice: totalPrice,
      });

      event.target.reset();

      dispatch({ type: "CLEAR_CART" });

      setOrderPlaced(true);
      setOrderId(docRef.id);
    } catch (error) {
      console.error("Error submitting order: ", error);
    }
  };

  const calculateTotalPrice = () => {
    let subtotal = 0;
    let shipping = 30.0;

    state.forEach((item) => {
      subtotal += parseFloat(item.data.price);
    });

    return Math.round(subtotal + shipping);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };


  return (
      <>
        <Navbar />
        <div className="container my-3 py-3">
          <h1 className="text-center">Checkout</h1>
          <hr />
          {state.length ? (
              <div className="container py-5">
                <div className="row my-4">
                  <div className="col-md-7 col-lg-8">
                    <div className="card mb-4">
                      <div className="card-header py-3">
                        <h4 className="mb-0">Billing address</h4>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleCheckout} className="needs-validation" noValidate>
                          <div className="row g-3">
                            <div className="col-sm-6 my-1">
                              <label htmlFor="firstName" className="form-label">
                                First name
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  name="firstName"
                                  placeholder=""
                                  required
                              />
                              <div className="invalid-feedback">Valid first name is required.</div>
                            </div>
                            <div className="col-sm-6 my-1">
                              <label htmlFor="lastName" className="form-label">
                                Last Name
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  name="lastName"
                                  placeholder=""
                                  required
                              />
                              <div className="invalid-feedback">Valid Last name is required.</div>
                            </div>

                            <div className="col-sm-6 my-1">
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  placeholder="Email"
                                  required
                              />
                              <div className="invalid-feedback">Valid email is required.</div>
                            </div>

                            <div className="col-sm-6 my-1">
                              <label htmlFor="address1" className="form-label">
                                Address
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="address"
                                  name="address"
                                  placeholder="address"
                                  required
                              />
                              <div className="invalid-feedback">Valid address is required.</div>
                            </div>

                            <div className="col-sm-6 my-1">
                              <label htmlFor="address2" className="form-label">
                                Address Temp
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="address2"
                                  name="address2"
                                  placeholder="Temp Address"
                                  required
                              />
                              <div className="invalid-feedback">Valid Address is required.</div>
                            </div>

                            <div className="col-sm-6 my-1">
                              <label htmlFor="state" className="form-label">
                                Province
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="state"
                                  name="state"
                                  placeholder="Province"
                                  required
                              />
                              <div className="invalid-feedback">Valid Address is required.</div>
                            </div>
                          </div>
                          <div className="col-md-12 my-1">
                            <label className="form-label">Payment Method</label>
                            <div className="form-check">
                              <input
                                  className="form-check-input"
                                  type="radio"
                                  name="paymentMethod"
                                  id="cashOnDelivery"
                                  value="cashOnDelivery"
                                  checked={paymentMethod === 'cashOnDelivery'}
                                  onChange={handlePaymentMethodChange}
                                  required
                              />
                              <label className="form-check-label" htmlFor="cashOnDelivery">
                                Cash on Delivery
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                  className="form-check-input"
                                  type="radio"
                                  name="paymentMethod"
                                  id="creditCard"
                                  value="creditCard"
                                  checked={paymentMethod === 'creditCard'}
                                  onChange={handlePaymentMethodChange}
                                  required
                              />
                              <label className="form-check-label" htmlFor="creditCard">
                                Credit Card
                              </label>
                            </div>
                          </div>
                          {/* Credit card fields */}
                          {paymentMethod === 'creditCard' && (
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="cardNumber">Card Number</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      id="cardNumber"
                                      name="cardNumber"
                                      placeholder="Enter card number"
                                      required
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="expiryDate">Expiry Date</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      id="expiryDate"
                                      name="expiryDate"
                                      placeholder="MM/YYYY"
                                      required
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="cvv">CVV</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      id="cvv"
                                      name="cvv"
                                      placeholder="CVV"
                                      required
                                  />
                                </div>
                              </div>
                          )}
                          {/* End Credit card fields */}
                          {/* Zip code field */}
                          <div className="col-md-3 my-1">
                            <label htmlFor="zip" className="form-label">
                              Zip
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                name="zip"
                                placeholder=""
                                required
                            />
                            <div className="invalid-feedback">Zip code required.</div>
                          </div>
                          <button className="w-100 btn btn-primary" type="submit">
                            Continue to checkout
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ) : (
              <div className="text-center">Your cart is empty.</div>
          )}
          {/* {orderPlaced && orderId && (
              <div className="container mt-3">
                <OrderDetails orderId={orderId} />
              </div>
          )} */}
        </div>
        <Footer />
      </>
  );
};

export default Checkout;
