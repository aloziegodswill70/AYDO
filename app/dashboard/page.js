"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DashboardContent() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const [step, setStep] = useState("choose"); // choose | fresh-form | ydo-form | updates

  // ✅ If redirected back from payment success
  useEffect(() => {
    if (searchParams.get("paid") === "true") {
      setStep("updates");
    }
  }, [searchParams]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please login first.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
      {/* Welcome Section */}
      {step === "choose" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-dark mb-4">
            Welcome, {session.user?.name}
          </h1>
          <p className="text-gray mb-6">
            Please choose your registration category below:
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => setStep("fresh-form")}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
            >
              Register as Fresh Doctor
            </button>
            <button
              onClick={() => setStep("ydo-form")}
              className="bg-gray-dark hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
            >
              Register as YDO
            </button>
          </div>
        </div>
      )}

      {/* Fresh Doctor Form */}
      {step === "fresh-form" && <FreshDoctorForm />}

      {/* YDO Form */}
      {step === "ydo-form" && <YdoForm />}

      {/* Final Updates Dashboard */}
      {step === "updates" && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary-dark">
            AYDO Updates & Benefits
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray">
            <li>📢 Association news and announcements</li>
            <li>💼 Job opportunities for young doctors</li>
            <li>💰 Salary updates and discussions</li>
            <li>🤝 Networking and mentorship programs</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <DashboardContent />
    </Suspense>
  );
}

/* ------------------ SUB COMPONENTS ------------------- */

function FreshDoctorForm() {
  const [form, setForm] = useState({
    license: "",
    email: "",
    graduationYear: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form saved! Redirecting to ₦3,000 one-time payment...");
    window.location.href = "/payment?amount=3000&type=fresh";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto text-left"
    >
      <h2 className="text-xl font-bold text-primary-dark">
        Fresh Doctor Registration
      </h2>

      <input
        type="text"
        placeholder="License Number"
        value={form.license}
        onChange={(e) => setForm({ ...form, license: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Graduation Year"
        value={form.graduationYear}
        onChange={(e) => setForm({ ...form, graduationYear: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg"
      >
        Save & Pay ₦3,000
      </button>
    </form>
  );
}

function YdoForm() {
  const [form, setForm] = useState({
    license: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form saved! Redirecting to ₦2,000 payment...");
    window.location.href = "/payment?amount=2000&type=ydo";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto text-left"
    >
      <h2 className="text-xl font-bold text-primary-dark">YDO Registration</h2>

      <input
        type="text"
        placeholder="License Number"
        value={form.license}
        onChange={(e) => setForm({ ...form, license: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg"
      >
        Save & Pay ₦2,000
      </button>
    </form>
  );
}
