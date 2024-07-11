import { NavLink } from "react-router-dom";
import { Package2 } from "lucide-react";
import { navItems } from "../App";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <NavLink to="/" className="flex items-center gap-2 font-semibold">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span>Memecoin</span>
      </NavLink>
      <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className="transition-colors text-muted-foreground hover:text-foreground">
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;