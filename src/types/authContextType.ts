export interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (token: string) => Promise<void>;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}
