function StickyBookingBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "white",
        padding: "14px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 -4px 16px rgba(0,0,0,0.15)",
        zIndex: 150
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "16px" }}>
        Book a Service Now
      </div>

      <button
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "linear-gradient(135deg, #2563eb, #22c55e)",
          color: "white",
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export default StickyBookingBar;

