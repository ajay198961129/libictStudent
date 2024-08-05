import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input type="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
