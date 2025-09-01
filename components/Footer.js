export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} AYDO - Association of Young Doctors of Optometry. 
        All rights reserved.
      </p>
    </footer>
  );
}
