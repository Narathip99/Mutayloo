import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (value: string) => {
    if (value === "Log Out") {
      handleLogout();
    } else {
      switch (value) {
        case "Account":
          navigate("/account");
          break;
        case "Address":
          navigate("/account/address");
          break;
        case "Orders":
          navigate("/account/orders");
          break;
        case "Wishlist":
          navigate("/account/wishlist");
          break;
        default:
          break;
      }
    }
  };

  const getCurrentPage = () => {
    switch (location.pathname) {
      case "/account":
        return "Account";
      case "/account/address":
        return "Address";
      case "/account/orders":
        return "Orders";
      case "/account/wishlist":
        return "Wishlist";
      default:
        return "Account";
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="w-full">
      <div className="flex flex-col px-4 py-12 gap-8 bg-base-200 rounded-lg">
        <div className="flex flex-col">
          <Avatar className="self-center aspect-square w-[82px] h-auto">
            <AvatarImage src="https://via.placeholder.com/1080" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <p className="text-center mt-2 text-2xl font-semibold">John Doe</p>
        </div>

        <nav className="px-8 lg:hidden">
          {/* mobile */}
          <Select onValueChange={handleNavigate}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getCurrentPage()} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Account">Account</SelectItem>
                <SelectItem value="Address">Address</SelectItem>
                <SelectItem value="Orders">Orders</SelectItem>
                <SelectItem value="Wishlist">Wishlist</SelectItem>
                <SelectItem value="Log Out">Log Out</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </nav>

        <nav className="hidden lg:flex flex-col px-8 gap-4">
          {["Account", "Address", "Orders", "Wishlist", "Log Out"].map(
            (item) => (
              <Link
                key={item}
                to={
                  item !== "Log Out"
                    ? `/account${
                        item !== "Account" ? `/${item.toLowerCase()}` : ""
                      }`
                    : "#"
                }
                onClick={item === "Log Out" ? handleLogout : undefined}
                className={`
                  ${
                    getCurrentPage() === item &&
                    "font-bold pb-2 border-b-2 border-base-500"
                  }
                `}
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
