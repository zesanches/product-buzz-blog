import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { User } from "@/contexts/AuthContext";

type LayoutProps = {
  children: ReactNode | ReactNode[];
  token?: string | null;
};

export default function Layout({ children, token = null }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header token={token} />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
