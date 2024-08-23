"use client";
export default function SignupPage() {
    const handleSignup = (e) => {
      e.preventDefault();
      // Handle signup logic here (e.g., call an API to create a new user)
    };
  
    return (
      <div className="signup-page">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    );
  }
  