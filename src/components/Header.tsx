import { useState } from "react";
import Link from "next/link";
import {
  LogOut,
  Menu,
  MoveLeftIcon,
  ToggleLeft,
  User as UserIcon,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { User } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  token: string | null;
};

const Header = ({ token }: Props) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          ProductBuzz
        </Link>

        {isMobile && (
          <button onClick={toggleMenu} className="block md:hidden p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md z-50">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className="py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              {token && (
                <Link
                  href="/admin"
                  className="py-2 text-foreground/80 hover:text-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  Admin
                </Link>
              )}
              <div className="py-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}

        {!isMobile && (
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            {token && (
              <>
                <Link
                  href="/admin"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Admin
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button>
                      <UserIcon size={16} className="mr-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <LogOut /> Log Out
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
            <ThemeToggle />
          </nav>
        )}

        {isMobile && !isMenuOpen && <ThemeToggle />}
      </div>
    </header>
  );
};

export default Header;
