import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    if (password !== confirm) return setError("Passwords do not match.");

    setLoading(true);
    try {
      const { data } = await resetPassword(token, password);
      setMessage(data.message);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Kuch gadbad ho gayi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create a new password</h1>
        <p className="auth-copy">Choose a password with at least 6 characters.</p>

        <label htmlFor="new-password">New password</label>
        <input id="new-password" type="password" placeholder="New password" value={password}
          onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" minLength="6" required />
        <label htmlFor="confirm-password">Confirm password</label>
        <input id="confirm-password" type="password" placeholder="Confirm new password" value={confirm}
          onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" minLength="6" required />
        <button type="submit" disabled={loading || Boolean(message)}>
          {loading ? "Updating..." : "Reset password"}
        </button>
        {message && <p className="form-message success" role="status">{message} Redirecting to login...</p>}
        {error && <p className="form-message error" role="alert">{error}</p>}
      </form>
    </section>
  );
}
