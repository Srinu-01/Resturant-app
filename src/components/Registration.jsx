import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios.js";

// Validation Schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Full name is required")
    .min(3, "At least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Min 6 characters"),
  role: yup.string().required("Select a role"),
  // Restaurant-specific fields
  restaurantName: yup.string().when("role", {
    is: "restaurant",
    then: () => yup.string().required("Restaurant name is required"),
  }),
});

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [showRestaurantFields, setShowRestaurantFields] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState("");

  React.useEffect(() => {
    // Reset error when form is modified
    setRegistrationError("");
  }, []);

  const onSubmit = async (data) => {
    try {
      setRegistrationError(""); // Clear any previous errors

      let payload = {
        ...data,
        address: "", // Default empty address
        location: { lat: 0, lng: 0 }, // Default location
      };

      // Add additional fields for restaurant registration
      if (data.role === "restaurant") {
        // Create restaurant payload with just the name
        payload = {
          ...payload,
          restaurant: {
            name: data.restaurantName,
            rating: 0, // Default rating for new restaurant
            menu: [], // Empty menu array for new restaurant
          },
        };
      }

      console.log("Sending registration request:", payload);
      const res = await axiosInstance.post("/auth/register", payload);

      if (res.status === 201 || res.status === 200) {
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else {
        setRegistrationError(
          res.data.message ||
            "Registration failed. Please check your details and try again."
        );
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.code === "ERR_NETWORK") {
        setRegistrationError(
          "Unable to connect to the server. Please check if the server is running."
        );
      } else {
        setRegistrationError(
          err.response?.data?.message ||
            "Registration failed. Please check your details and try again."
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src="/Images/registerbanner.jpg"
            alt="Register Banner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#FF6B00]">
              Create an Account
            </h2>
            <Link
              to="/login"
              className="text-sm text-[#FF6B00] hover:underline"
            >
              Sign In
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1 text-gray-600">
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-[#FF6B00] outline-none"
              />
              {errors.name && (
                <p className="text-[#FF3B3B] text-sm mt-1">
                  {errors.name.message}
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

            {/* Role Selection */}
            <div>
              <label className="block text-sm mb-1 text-gray-600">
                Select Role
              </label>
              <select
                {...register("role")}
                onChange={(e) => {
                  register("role").onChange(e);
                  setShowRestaurantFields(e.target.value === "restaurant");
                }}
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

            {/* Restaurant-specific fields */}
            {showRestaurantFields && (
              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Restaurant Name
                </label>
                <input
                  {...register("restaurantName")}
                  type="text"
                  placeholder="Enter restaurant name"
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-[#FF6B00] outline-none"
                />
                {errors.restaurantName && (
                  <p className="text-[#FF3B3B] text-sm mt-1">
                    {errors.restaurantName.message}
                  </p>
                )}
              </div>
            )}

            {/* Error Message */}
            {registrationError && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                {registrationError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-6 bg-[#FF6B00] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sm text-[#FF6B00] hover:underline"
            >
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;