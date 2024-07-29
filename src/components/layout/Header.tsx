import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

// icons
import { ShoppingCart, User } from "lucide-react";
// components
import ProfileTrigger from "../ui/ProfileTrigger";

const menu = ["Home", "Products", "Horoscope", "Contact Us"];

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="bg-white h-[60px] lg:h-[68px] shadow-lg sticky top-0 z-20">
        <nav className="container h-full flex justify-between items-center">
          <Link to="/">
            <h1 className="font-medium text-xl lg:text-3xl lg:font-semibold">
              Mutayloo
            </h1>
          </Link>

          <menu className="flex gap-8 font-medium">
            {menu.map((item) => (
              <li key={item} className="hover:text-primary">
                <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>
                  {item}
                </Link>
              </li>
            ))}
          </menu>

          <div className="flex gap-4 items-center">
            {isAuthenticated ? (
              <ProfileTrigger />
            ) : (
              <Link to="/login">
                <User />
              </Link>
            )}
            <ShoppingCart />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
