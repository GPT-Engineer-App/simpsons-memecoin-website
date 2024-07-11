import { NavLink } from "react-router-dom";
import { Twitter, Discord } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 bg-background border-t">
      <div className="container mx-auto text-center">
        <nav className="mb-4">
          <NavLink to="/" className="mx-2 text-muted-foreground hover:text-foreground">Home</NavLink>
          <NavLink to="/about" className="mx-2 text-muted-foreground hover:text-foreground">About</NavLink>
          <NavLink to="/roadmap" className="mx-2 text-muted-foreground hover:text-foreground">Roadmap</NavLink>
          <NavLink to="/contact" className="mx-2 text-muted-foreground hover:text-foreground">Contact</NavLink>
        </nav>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://discord.com" className="text-muted-foreground hover:text-foreground">
            <Discord className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;