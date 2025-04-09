
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-pitch-blue to-pitch-green text-transparent bg-clip-text">
            PitchSwipe
          </span>
          <span className="text-pitch-navy font-semibold">Capital</span>
        </Link>
        
        {isHome ? (
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button className="bg-pitch-blue hover:bg-pitch-teal text-white" asChild>
              <Link to="/startup-signup">Sign Up</Link>
            </Button>
          </div>
        ) : (
          <Link to="/" className="text-pitch-blue hover:text-pitch-teal font-medium">
            Back to home
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
