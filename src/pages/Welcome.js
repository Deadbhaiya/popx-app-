import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="card welcome-card">
        <h2 className="title">Welcome to PopX</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button className="primary" onClick={() => nav("/register")}>
          Create Account
        </button>

        <button className="secondary" onClick={() => nav("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}