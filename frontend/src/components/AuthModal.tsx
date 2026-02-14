import { useState } from "react";

function AuthModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("login");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#0f172a",
          color: "white",
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Login / Signup
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 300
          }}
        >
          <div
            style={{
              width: "350px",
              padding: "30px",
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
            }}
          >
            <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
              {mode === "login" ? "Login" : "Create Account"}
            </h3>

            <input
              type="text"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                marginBottom: "12px"
              }}
            />

            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                marginBottom: "12px"
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(135deg, #2563eb, #22c55e)",
                color: "white",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              {mode === "login" ? "Login" : "Sign Up"}
            </button>

            <p
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              style={{
                marginTop: "14px",
                textAlign: "center",
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: 600
              }}
            >
              {mode === "login"
                ? "Create a new account"
                : "Already have an account? Login"}
            </p>

            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "#0f172a",
                color: "white",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthModal;

