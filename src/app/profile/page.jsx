import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    // Fetch the user data from the backend or context/state management
    // Assuming you have an API endpoint /api/profile to get the user data
    async function fetchUserProfile() {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setUser({
          name: data.name,
          email: data.email,
          role: data.role,
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }

    fetchUserProfile();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    // You could send a POST/PUT request to /api/profile to update the user details
  };

  return (
    <div className="profile-page max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
            disabled
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
