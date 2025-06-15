import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email: email,
          password: password,
        },
      );

      console.log("Login successful:", response.data);
      setUser(response.data);


      

     navigate("/"); 
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
              <h1 className="h3 text-primary">Студентски сервис</h1>
              <p className="text-muted mt-2 mb-0">Најавете се на вашиот профил</p>
            </div>

            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                 Емаил
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  required
                   value={email}
  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label">
                    Лозинка
                  </label>
                  
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder=""
                  required
                    value={password}
  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>
                Најава
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