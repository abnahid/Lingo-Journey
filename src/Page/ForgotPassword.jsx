import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = () => {
    window.location.href = "https://mail.google.com";
  };
  return (
    <div className="py-11">
      <Helmet>
        <title>Forgot Password - Warm Hearts</title>
      </Helmet>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <form className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-primary mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={handleResetPassword}
            className="w-full bg-primary text-white py-2 rounded-md"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
