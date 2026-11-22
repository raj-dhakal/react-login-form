import { useState } from "react";

function Login() {
  // 1️⃣ DATA: one state per input, both start empty
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 3️⃣ UI
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
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
