import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import logo from "../../../public/assets/home/logo.png"; // Adjust the path to your logo

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative top-0 border-b-transparent shadow-lg">
      <nav className="flex py-12 justify-between items-center px-4 md:px-20">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="HirelyAI Logo" className="h-20" />
          </Link>
          <Link to="/" className="text-4xl font-medium text-underlay-1 hidden md:inline">
            HirelyAI
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-x-6 items-center">
          <Link to="/">Home</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
            <Button asChild>
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button onClick={toggleMenu} className="focus:outline-none">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full right-0 mt-2 w-full md:hidden bg-muted shadow-lg rounded`}
        >
          <div className="flex flex-col items-center p-4 space-y-4">
            <Link to="/" className="w-full text-center">
              Home
            </Link>
            <SignedIn>
              <UserButton className="w-full text-center" />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in" className="w-full text-center">
                Sign In
              </Link>
              <Button className="w-full">
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;