import { useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";

// try to pass parameters to Jumbotron component through props
// offset-md-3 shift md-3 on both sides
export default function Login() {
  // state
  const [email, setEmail] = useState("chikmatthew@gmail.com");
  const [password, setPassword] = useState("abc1234");
  // {(e) => console.log(e)} onChange() to get typing in to use setName() to save it to Name
  // console.log(process.env.REACT_APP_AP);

  const handleSubmit = async (e) => {
    e.preventDefault();  // prevent default reloading when click the submit button
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/login`, {
        email, 
        password
      });
      console.log(data);
      console.log(data?.error);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Login successful");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div>
      <Jumbotron title="Login" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-4 p-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4 p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div> 
    </div>
  );
}