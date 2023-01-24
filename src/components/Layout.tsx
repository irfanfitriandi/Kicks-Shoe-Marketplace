import React, { FC } from "react";

import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { NavbarForm } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export function LayoutForm({ children }: LayoutProps) {
  return (
    <div>
      <NavbarForm />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
