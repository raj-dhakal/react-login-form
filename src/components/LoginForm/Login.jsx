import { useState } from "react";
import FormField from "../FormField/FormField";

const FIELDS = [
  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { id: "password", label: "Password", type: "password", placeholder: "Enter your password" },
];

function Login() {
  // 1️⃣ DATA
  const [formData, setFormData] = useState({ email: "", password: "" });

  // 2️⃣ ACTIONS
  function handleChange(event) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  }

  // 3️⃣ UI
  return (
    <form onSubmit={handleSubmit}>
      {FIELDS.map((field) => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          value={formData[field.id]}
          onChange={handleChange}
        />
      ))}

      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;