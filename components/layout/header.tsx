"use client";

import { Navbar } from "./navbar";

// Header is intentionally a thin wrapper around Navbar.
// This prevents duplicate navigation logic across Header/Navbar.
export function Header() {
  return <Navbar />;
}

export default Header;