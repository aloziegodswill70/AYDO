import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata = {
  title: "AYDO - Association of Young Doctors of Optometry",
  description: "Official platform for young optometrists in Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-dark">
        <Providers>
          <Navbar />
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
