import { useState } from "react";

function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 200 }}>
      {/* Chat Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #2563eb, #22c55e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "28px",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
        }}
      >
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div
          style={{
            width: "280px",
            padding: "20px",
            borderRadius: "16px",
            background: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            marginBottom: "12px"
          }}
        >
          <h3 style={{ marginBottom: "10px", fontSize: "18px", fontWeight: 700 }}>
            Need Help?
          </h3>

          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            Our support team typically replies within minutes.
          </p>

          <button
            style={{
              marginTop: "14px",
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
            Start Chat
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;

