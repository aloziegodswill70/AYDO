"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please log in first.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {session.user?.name}
      </h1>
      <p className="mb-6">You are now logged in with Google.</p>
      <button
        onClick={() => signOut()}
        className="bg-gray-dark hover:bg-primary-dark text-white px-6 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
