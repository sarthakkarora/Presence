export default function HomePage() {
    // Example role check
    const userRole = 'employee'; // This would come from your auth system
  
    return (
      <div>
        {userRole === 'employee' ? (
          <div>
            <h2>Your Attendance</h2>
            {/* Employee-specific content */}
          </div>
        ) : (
          <div>
            <h2>All Employees Overview</h2>
            {/* Admin-specific content */}
          </div>
        )}
      </div>
    );
  }
  