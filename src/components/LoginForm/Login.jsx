import { useState } from "react";
import FormField from "../FormField/FormField";

function Login() {
  // 1️⃣ DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2️⃣ ACTIONS
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  }

  // 3️⃣ UI
  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;