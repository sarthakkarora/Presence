"use client";
export default function LoginPage() {
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic here (e.g., call an API to authenticate the user)
    };
  
    return (
      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    );
  }
  