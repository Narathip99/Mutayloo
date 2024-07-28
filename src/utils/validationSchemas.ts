import { z } from "zod";

export const registerSchema = z
  .object({
    fname: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must not exceed 50 characters"),
    lname: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must not exceed 50 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address")
      .max(255, "Email must not exceed 255 characters"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    month: z
      .string()
      .min(1, "Month is required")
      .regex(/^(0[1-9]|1[0-2])$/, "Month must be between 01 and 12"),
    day: z
      .string()
      .min(1, "Day is required")
      .regex(/^(0[1-9]|[12][0-9]|3[01])$/, "Day must be between 01 and 31"),
    year: z
      .string()
      .min(1, "Year is required")
      .regex(/^\d{4}$/, "Year must be a valid year")
      .refine(
        (year) =>
          parseInt(year, 10) >= 1900 &&
          parseInt(year, 10) <= new Date().getFullYear(),
        "Year must be between 1900 and current year"
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must not exceed 100 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
