import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200 text-purple-900">
        <nav className="bg-purple-700 text-white p-4 shadow-md flex justify-center space-x-8 font-semibold">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="/camp" className="hover:text-purple-300 transition">Camp</Link>
          <Link href="/info" className="hover:text-purple-300 transition">Info</Link>
          <Link href="/about" className="hover:text-purple-300 transition">About</Link>
        </nav>

        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        <footer className="bg-purple-700 text-white p-6 flex flex-wrap justify-around gap-4 text-sm">
          <p className="max-w-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, cumque!
          </p>
          <p className="max-w-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, cumque!
          </p>
          <p className="max-w-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, cumque!
          </p>
          <p className="max-w-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, cumque!
          </p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;