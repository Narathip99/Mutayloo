export interface User {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  password: string;
  dob: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterData {
  fname: string;
  lname: string;
  email: string;
  password: string;
  dob: string;
}

export interface RegisterResponse {
  token: string;
}

export interface UpdateProfileData {
  username?: string;
  email?: string;
  profileImage?: File;
}
