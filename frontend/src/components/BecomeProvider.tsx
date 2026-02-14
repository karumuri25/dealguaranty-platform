function BecomeProvider() {
  return (
    <section
      style={{
        padding: "70px 20px",
        marginTop: "40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
        borderRadius: "20px",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
      }}
    >
      <h2 style={{ fontSize: "32px", fontWeight: 700 }}>
        Become a Verified Provider
      </h2>

      <p style={{ marginTop: "12px", fontSize: "18px", opacity: 0.95 }}>
        Grow your business with guaranteed bookings and trusted customers.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 28px",
          borderRadius: "10px",
          border: "none",
          background: "white",
          color: "#5b21b6",
          fontWeight: 700,
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(255,255,255,0.35)"
        }}
      >
        Register as Provider
      </button>
    </section>
  );
}

export default BecomeProvider;

