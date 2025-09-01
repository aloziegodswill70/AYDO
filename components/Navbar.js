"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          AYDO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/register" className="hover:underline">
            Register
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/register" className="hover:underline" onClick={() => setIsOpen(false)}>
              Register
            </Link>
            <Link href="/dashboard" className="hover:underline" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
