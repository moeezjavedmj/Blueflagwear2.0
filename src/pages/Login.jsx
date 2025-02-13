import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { app, auth } from "../firebase"; // Import auth from Firebase configuration
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const adminEmail = "Blueflagwear@gmail.com";
      const adminPassword = "Haroonkhan12.";

      if (email === adminEmail && password === adminPassword) {
        // Admin login successful
        console.log("Admin login successful!");
        // Redirect to admin page
        navigate("/admin");
      } else {
        // Regular user login
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful!");
        // Redirect to home page after successful login
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error logging in:", error);
    }
  };
  return (
      <>
        <Navbar />
        <div className="container my-3 py-3">
          <h1 className="text-center">Login</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleLogin}>
                <div className="my-3">
                  <label htmlFor="email">Email address</label>
                  <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="my-3">
                  <p>
                    New Here?{" "}
                    <Link
                        to="/register"
                        className="text-decoration-underline text-info"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Login;
