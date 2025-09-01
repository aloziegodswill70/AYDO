"use client";

import { signIn } from "next-auth/react";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-primary-dark mb-4">
          Register with AYDO
        </h2>
        <p className="text-gray mb-6">
          As a young optometrist, register here to pay your dues and stay
          updated with jobs, salaries, and association news.
        </p>

        <button
          onClick={() =>
            signIn("google", { callbackUrl: "/login" })
          }
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
