function AppPromo() {
  return (
    <section
      style={{
        padding: "70px 20px",
        marginTop: "40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #2563eb, #22c55e)",
        borderRadius: "20px",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
      }}
    >
      <h2 style={{ fontSize: "32px", fontWeight: 700 }}>
        Get the DealGuaranty App
      </h2>

      <p style={{ marginTop: "12px", fontSize: "18px", opacity: 0.95 }}>
        Book services faster with instant deals and guaranteed slots.
      </p>

      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            border: "none",
            background: "white",
            color: "#2563eb",
            fontWeight: 700,
            fontSize: "16px",
            cursor: "pointer",
            marginRight: "16px",
            boxShadow: "0 6px 16px rgba(255,255,255,0.35)"
          }}
        >
          Download for Android
        </button>

        <button
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            border: "2px solid white",
            background: "transparent",
            color: "white",
            fontWeight: 700,
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Download for iOS
        </button>
      </div>
    </section>
  );
}

export default AppPromo;

