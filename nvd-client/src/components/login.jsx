import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form submission reload

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email: 'user@gmail.com',
          password: 'user1',
        },
      );

      console.log("Login successful:", response.data);

      // Optional: store token in localStorage or context
      // localStorage.setItem("token", response.data.token);

     navigate("/"); // redirect after login
    } catch (error) {
      console.error("Login failed:", error);
      alert("Невалиден email или лозинка");
    }
  };

    return (
        <>
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-primary bg-gradient p-4">
      <div className="w-100" style={{ maxWidth: "400px"}}>
        <div className="card shadow rounded">
          <div className="card-body">
            <div className="text-center mb-4">
              <h1 className="h3 text-primary">Student services</h1>
              <p className="text-muted mt-2 mb-0">Sign in to your account</p>
            </div>

            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Login;