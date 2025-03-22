import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors before validation
    setErrors({
      username: "",
      email: "",
      password: "",
    });

    // Check for missing fields
    let hasError = false;
    if (!username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "Username is required." }));
      hasError = true;
    }
    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required." }));
      hasError = true;
    }
    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required." }));
      hasError = true;
    }

    // Further email validation (format check)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailPattern.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email address." }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // If no errors, proceed with registration
    console.log("User Registered:", { username, email, password });
    setErrors({
      username: "",
      email: "",
      password: "",
    });
    alert("Registration successful!");

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
