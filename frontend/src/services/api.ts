const BASE_URL = "http://localhost:5050";

export async function apiGet(path: string) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}

