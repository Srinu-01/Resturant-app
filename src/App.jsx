// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import React from "react";
// Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Registration.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import TrackOrder from "./components/TrackOrder.jsx";

// Pages
import CustomerDashboard from "./pages/CustomerDashboard";
import McDonald from "./pages/mcdonald.jsx";
import KFC from "./pages/kfc.jsx";
import TexasChicken from "./pages/Texaschicken.jsx";
import DeliveryDashboard from "./pages/DeliveryDashboard/index.jsx";
import RestaurantDashboard from "./pages/RestaurantDashBoard/index.jsx";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <Router>
            <AppShell />
          </Router>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

function AppShell() {
  const location = useLocation();
  const hideChrome = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {!hideChrome && <Header />}

      <main className="flex-1">
        {/* Smoothly scrolls to #hash targets after navigation */}
        <ScrollToHash />

        <Routes>
          {/* Public */}
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track-order" element={<TrackOrder />} />

          {/* Protected */}
          <Route
            path="/customer"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/restaurant" element={<RestaurantDashboard />} />
          <Route
            path="/delivery"
            element={
              <ProtectedRoute allowedRoles={["delivery"]}>
                <DeliveryDashboard />
              </ProtectedRoute>
            }
          />

          {/* Public restaurant pages */}
          <Route path="/mcdonalds" element={<McDonald />} />
          <Route path="/kfc" element={<KFC />} />
          <Route path="/texaschicken" element={<TexasChicken />} />
        </Routes>
      </main>

      {!hideChrome && <Footer />}
    </div>
  );
}

function ScrollToHash() {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);
  return null;
}

export default App;