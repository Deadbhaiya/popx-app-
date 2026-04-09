import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  return (
    <div className="container">
      <div className="card register-card">

        <div className="form-content">
          <h2 className="title">Create your PopX account</h2>

          <div className="form-group">
            <label>Full Name<span>*</span></label>
            <input placeholder="Marry Doe" />
          </div>

          <div className="form-group">
            <label>Phone number<span>*</span></label>
            <input placeholder="Marry Doe" />
          </div>

          <div className="form-group">
            <label>Email address<span>*</span></label>
            <input placeholder="Marry Doe" />
          </div>

          <div className="form-group">
            <label>Password<span>*</span></label>
            <input type="password" placeholder="Marry Doe" />
          </div>

          <div className="form-group">
            <label>Company name</label>
            <input placeholder="Marry Doe" />
          </div>

          <div className="form-group">
            <label>Are you an Agency?<span>*</span></label>
            <div className="radio-group">
              <label className="radio-item">
                <input type="radio" defaultChecked /> Yes
              </label>
              <label className="radio-item">
                <input type="radio" /> No
              </label>
            </div>
          </div>
        </div>

        <button className="primary bottom-btn" onClick={() => nav("/settings")}>
          Create Account
        </button>

      </div>
    </div>
  );
}