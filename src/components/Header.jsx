// src/components/Header.jsx
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MapPin, ShoppingBag, ChevronDown, User } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Cart from "./Cart";

const PillLink = ({ to, children, ...props }) => (
  <NavLink
    to={to}
    {...props}
    className={({ isActive }) =>
      [
        "px-5 py-2 rounded-full text-sm font-medium transition",
        isActive
          ? "bg-primary text-white shadow"
          : "text-foreground hover:bg-muted",
      ].join(" ")
    }
  >
    {children}
  </NavLink>
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  // Calculate total items and price
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const auth = useAuth();
  const { token, role, logout } = auth;
  const isDashboard =
    location.pathname === "/delivery" || location.pathname === "/restaurant";

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      switch (role) {
        case "restaurant":
          navigate("/restaurant");
          break;
        case "delivery":
          navigate("/delivery");
          break;
        case "customer":
          navigate("/customer"); // Redirect customer to dashboard
          break;
        default:
          navigate("/");
      }
    }
  };

  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-card">
      {/* ---------- Top Promo + Location Bar ---------- */}
      {!isDashboard && (
        <div className="border-b bg-muted/40">
          <div className="container mx-auto flex h-11 items-center justify-between px-4 text-xs">
            <div className="flex items-center gap-2">
              <span>🌟 Get 5% Off your first order,</span>
              <span className="font-semibold text-primary">Promo: ORDER5</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="hidden items-center gap-1 sm:flex hover:text-primary transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>{totalItems} items</span>
              </button>
              <span className="hidden rounded-full bg-green-600 px-2 py-0.5 text-white sm:inline">
                GBP {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Main Nav Bar ---------- */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Images/logo.png"
            alt="Order.UK Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Center nav */}
        {!isDashboard && (
          <nav className="hidden items-center gap-2 md:flex">
            <PillLink to="/" onClick={handleHomeClick}>
              Home
            </PillLink>
            {!["/mcdonalds", "/kfc", "/texaschicken", "/track"].includes(
              location.pathname
            ) && (
              <>
                <a
                  href="#categories"
                  onClick={handleAnchorClick}
                  className="px-5 py-2 rounded-full text-sm font-medium text-foreground hover:bg-muted"
                >
                  Browse Menu
                </a>
                <a
                  href="#deals"
                  onClick={handleAnchorClick}
                  className="px-5 py-2 rounded-full text-sm font-medium text-foreground hover:bg-muted"
                >
                  Special Offers
                </a>
                <a
                  href="#restaurants"
                  onClick={handleAnchorClick}
                  className="px-5 py-2 rounded-full text-sm font-medium text-foreground hover:bg-muted"
                >
                  Restaurants
                </a>
              </>
            )}
            <Link
              to="/track"
              className="px-5 py-2 rounded-full text-sm font-medium text-foreground hover:bg-muted"
            >
              Track Order
            </Link>
          </nav>
        )}

        {/* ✅ Replaced Login/Signup with My Account dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setIsAccountOpen(!isAccountOpen)}
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            <User className="h-4 w-4" />
            My Account
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isAccountOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isAccountOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-white shadow-md z-50">
              <div className="p-3 border-b">
                <p className="text-sm font-semibold">
                  {auth?.user?.name || "Guest"}
                </p>
                <p className="text-xs text-gray-500">
                  {auth?.user?.email || ""}
                </p>
              </div>
              <ul className="text-sm">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-muted text-red-500 transition"
                    onClick={() => {
                      logout();
                      setIsAccountOpen(false);
                      navigate("/login");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile menu stub */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1 rounded-xl border px-3 py-1.5 text-sm hover:bg-muted transition"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{totalItems}</span>
          </button>

          {/* Mobile Menu Button */}
          <div className="relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl border px-3 py-1.5 text-sm hover:bg-muted transition"
            >
              Menu{" "}
              <ChevronDown
                className={`inline h-4 w-4 transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-lg border bg-white shadow-md z-50">
                <ul className="text-sm">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#categories"
                      className="block px-4 py-2 hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Browse Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#deals"
                      className="block px-4 py-2 hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Special Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#restaurants"
                      className="block px-4 py-2 hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Restaurants
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/track"
                      className="block px-4 py-2 hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Track Order
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-muted text-red-500"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                        navigate("/login");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
