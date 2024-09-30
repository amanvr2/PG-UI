import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");

  function hanldeSubmit(e) {
    e.preventDefault();

    const registerUser = {
      name: name,
      email: email,
      phone: phone,
      company_name: companyName,
      password: password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerUser),
    };

    fetch("http://localhost:8080/owner/create", options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h5>Login/Sign Up</h5>

      <div className="form">
        <form onSubmit={hanldeSubmit}>
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <br />
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button className="addBtn btn btn-success">Add</button>
        </form>
      </div>
    </>
  );
}
