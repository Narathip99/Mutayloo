import apiClient from "./apiClient";
import {
  User,
  LoginResponse,
  RegisterData,
  RegisterResponse,
} from "@/types/userTypes";

// Login
export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("/users/login", {
    email,
    password,
  });
  return response.data;
};

// Get user profile
export const getProfile = async (): Promise<User> => {
  const response = await apiClient.get<User>("/users/profile");
  return response.data;
};

// Register
export const registerUser = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  const response = await apiClient.post("/users/register", data);
  return response.data;
};

// Update user profile
export const updateUserProfile = async (formData: FormData): Promise<User> => {
  const response = await apiClient.post<User>("/users/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
