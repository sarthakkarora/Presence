export default function ProfileLayout({ children }) {
    return (
      <div className="profile-layout flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <div className="font-bold text-lg">Attendance App</div>
            <ul className="flex space-x-4">
              <li>
                <a href="/home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/profile" className="hover:underline">Profile</a>
              </li>
              <li>
                <a href="/history" className="hover:underline">History</a>
              </li>
              <li>
                <a href="/map" className="hover:underline">Map</a>
              </li>
              <li>
                <a href="/logout" className="hover:underline">Logout</a>
              </li>
            </ul>
          </nav>
        </header>
  
        {/* Main Content */}
        <main className="container mx-auto flex-1 p-4">
          {children}
        </main>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Attendance App. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  