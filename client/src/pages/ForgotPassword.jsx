import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    setError("");
    try {
      const { data } = await forgotPassword(email.trim());
      setMsg(data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Kuch gadbad ho gayi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Forgot password?</h1>
        <p className="auth-copy">Apna registered email daalein. Hum reset link bhej denge.</p>

        <label htmlFor="reset-email">Email address</label>
        <input
          id="reset-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending link..." : "Send reset link"}
        </button>
        {msg && <p className="form-message success" role="status">{msg}</p>}
        {error && <p className="form-message error" role="alert">{error}</p>}
        <Link className="auth-link" to="/login">Back to login</Link>
      </form>
    </section>
  );
}
