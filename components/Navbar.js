"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

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

          {/* Show Dashboard only if logged in */}
          {session && (
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          )}

          {/* Logout button when logged in */}
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="hover:underline"
            >
              Logout
            </button>
          )}
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

            {session && (
              <Link href="/dashboard" className="hover:underline" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            )}

            {session && (
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  setIsOpen(false);
                }}
                className="hover:underline"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
