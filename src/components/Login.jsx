import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "../api/axios";
// import { loginSchema } from "../utils/validators.js";
import { useState } from "react";

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Min 6 characters"),
  role: yup.string().required("Select a role"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const { login } = useAuth();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setServerError("");
    setLoading(true);
    try {
      // Send credentials to backend for verification
      const res = await axios.post("/auth/login", {
        email: data.email,
        password: data.password,
        role: data.role,
      });

      // Expecting { token: '...', user: { name, email, role, ... } }
      const { token, user, role } = res.data;
      if (!token) throw new Error("Invalid credentials");

      // If backend provides a role, ensure it matches the role selected by the user
      if (role && data.role && role.toLowerCase() !== data.role.toLowerCase()) {
        setServerError(
          `Selected role "${data.role}" does not match account role "${role}".`
        );
        setLoading(false);
        return; // do not proceed to login
      }

      // Persist auth in context with full user object
      const userData = user || {
        name: data.email.split("@")[0], // fallback: use email username as name
        email: data.email,
        role: role || data.role,
      };
      login(token, userData);

      // Navigate based on role
      switch (role || data.role) {
        case "customer":
          navigate("/customer");
          break;
        case "restaurant":
          navigate("/restaurant");
          break;
        case "delivery":
          navigate("/delivery");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setServerError(error.response.data.message);
      } else {
        setServerError("Invalid email or password. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src="/Images/loginbanner.jpg"
            alt="Login Banner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#FF6B00]">Login</h2>
            <a
              href="/register"
              className="text-sm text-[#FF6B00] hover:underline"
            >
              Sign Up
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Role Selection */}
            <div>
              <label className="block text-sm mb-1 text-gray-600">
                Select Role
              </label>
              <select
                {...register("role")}
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-[#FF6B00] outline-none"
              >
                <option value="">-- Choose Role --</option>
                <option value="customer">Customer</option>
                <option value="restaurant">Restaurant</option>
                <option value="delivery">Delivery Partner</option>
              </select>
              {errors.role && (
                <p className="text-[#FF3B3B] text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-gray-600">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-[#FF6B00] outline-none"
              />
              {errors.email && (
                <p className="text-[#FF3B3B] text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1 text-gray-600">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-[#FF6B00] outline-none"
              />
              {errors.password && (
                <p className="text-[#FF3B3B] text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Server error message */}
            {serverError && (
              <p className="text-[#FF3B3B] text-sm mt-1">{serverError}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 mt-6 bg-[#FF6B00] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#FF6B00] font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
