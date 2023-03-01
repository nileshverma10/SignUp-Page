import { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import Gender from "./Gender";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  console.log({ email, password, fname, lname, number, confirmPassword });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePassword1 = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password, fname, lname, number });

    axios
      .post("http://localhost:5000/addData", {
        email: email,
        password: password,
        fname: fname,
        lname: lname,
        phone: number,
      })
      .then((result) => {
        console.log(result.data);
        alert("success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });

    axios
      .get("http://localhost:5000/getData")
      .then((result) => {
        console.log(result.data);
        // alert("success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h3 className="fname">First Name</h3>
      <input
        className="finput"
        value={fname}
        type="text"
        placeholder="Enter your first name"
        onChange={handleFname}
      />
      <br />
      <h3>Last Name</h3>
      <input
        className="linput"
        value={lname}
        type="text"
        placeholder="Enter your Last name"
        onChange={(e) => setLname(e.target.value)}
      />
      <br />
      <h3>Gender</h3>
      <Gender />
      <br />
      <h3>Contact Number</h3>
      <input
        className="linput"
        type="text"
        value={number}
        placeholder="Enter your Number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <h3>Email</h3>
      <input
        className="email"
        value={email}
        onChange={handleEmail}
        type="text"
        placeholder="Enter your Email"
      />
      <br />
      <h3>Password </h3>
      <input
        className="pass"
        value={password}
        onChange={handlePassword}
        type="text"
        placeholder="Enter your Password"
      />
      <br />
      <h3> Confirm Password </h3>
      <input
        className="pass"
        value={confirmPassword}
        onChange={handlePassword1}
        type="text"
        placeholder="Enter your Confirm Password"
      />
      <br />
      <button className="btn" onClick={handleApi}>
        Login
      </button>
    </div>
  );
}

export default SignUp;
