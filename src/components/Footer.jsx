import {
  Apple,
  PlayCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl font-bold">
                Order<span className="text-primary">🍕</span>
              </span>
            </Link>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="gap-2 bg-card">
                <Apple className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="outline" className="gap-2 bg-card">
                <PlayCircle className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* Get Exclusive Deals */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Get Exclusive Deals in your Inbox
            </h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="youremail@gmail.com"
                className="bg-card"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
            <p className="text-xs text-secondary-foreground/70">
              We won't spam, read our{" "}
              <Link to="/privacy" className="underline">
                privacy policy
              </Link>
            </p>
            <div className="flex gap-3">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-primary" />
            </div>
          </div>

          {/* Legal Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-primary">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-primary">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/modern-slavery" className="hover:text-primary">
                  Modern Slavery Statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-primary">
                  Get help
                </Link>
              </li>
              <li>
                <Link to="/add-restaurant" className="hover:text-primary">
                  Add your restaurant
                </Link>
              </li>
              <li>
                <Link to="/signup-rider" className="hover:text-primary">
                  Sign up to deliver
                </Link>
              </li>
              <li>
                <Link to="/business-account" className="hover:text-primary">
                  Create a business account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>Order.UK Copyright 2024, All Rights Reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link to="/pricing" className="hover:text-primary">
              Pricing
            </Link>
            <Link to="/sitemap" className="hover:text-primary">
              Do not sell or share my personal information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
