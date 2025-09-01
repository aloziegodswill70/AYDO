"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-primary-dark mb-6">
          Login to AYDO
        </h2>
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
