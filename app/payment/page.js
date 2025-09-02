"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const type = searchParams.get("type");

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 text-center">
      <h1 className="text-2xl font-bold mb-4 text-primary-dark">
        Payment Simulation
      </h1>
      <p className="mb-6 text-gray">
        You are about to pay{" "}
        <span className="font-bold text-primary-dark">₦{amount}</span> for{" "}
        <span className="font-semibold">{type}</span>.
      </p>

      <button
        onClick={() => {
          alert(`Payment of ₦${amount} successful!`);
          // Redirect back with ?paid=true
          window.location.href = "/dashboard?paid=true";
        }}
        className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
      >
        Simulate Payment Success
      </button>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<p>Loading payment...</p>}>
      <PaymentContent />
    </Suspense>
  );
}
