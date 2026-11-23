import { useState } from "react";
import Login from "./components/LoginForm/Login";

function App() {
  // the logged-in user lives HERE, in the parent
  const [user, setUser] = useState(null);

  function handleLogin(loggedInUser) {
    setUser(loggedInUser);
  }

  function handleLogout() {
    setUser(null);
  }

  // show the welcome screen OR the form
  if (user) {
    return (
      <div>
        <h1>Welcome, {user.email}! 👋</h1>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  return <Login onLogin={handleLogin} />;
}

export default App;