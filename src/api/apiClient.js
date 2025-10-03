const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

export async function getResources() {
  const res = await fetch(`${API_BASE}/resources`);
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}
