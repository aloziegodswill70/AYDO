// app/page.js
export default function HomePage() {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold text-primary-dark mb-4">
        Welcome to AYDO
      </h2>
      <p className="text-lg text-gray max-w-2xl mx-auto">
        The official platform for Young Doctors of Optometry in Nigeria.
        Register, pay your dues, and stay updated with the latest jobs,
        salaries, and developments.
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="/register"
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
        >
          Get Started
        </a>
        <a
          href="/dashboard"
          className="bg-gray-dark hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md"
        >
          Dashboard
        </a>
      </div>
    </section>
  );
}
