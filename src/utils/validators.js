// src/utils/validators.js
import * as yup from "yup";

// 🔹 Login Form Schema
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  role: yup.string().required("Please select a role"),
});

// 🔹 Registration Form Schema
export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  role: yup.string().required("Please select a role"),
  address: yup
    .string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters"),
});
