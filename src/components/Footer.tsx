import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Seatech
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for government e-marketplace solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/buyer-application" className="text-muted-foreground hover:text-primary transition-smooth">
                  Buyer Application
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=furniture" className="text-muted-foreground hover:text-primary transition-smooth">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/products?category=chairs" className="text-muted-foreground hover:text-primary transition-smooth">
                  Office Chairs
                </Link>
              </li>
              <li>
                <Link to="/products?category=plastic" className="text-muted-foreground hover:text-primary transition-smooth">
                  Plastic Items
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@seatech.gov</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Government District, Capital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Seatech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
