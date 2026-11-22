function Login() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="you@example.com" />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" placeholder="Enter your password" />

      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;