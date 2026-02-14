function HeroSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "90px 20px",
        textAlign: "center",
        color: "white",
        background: "linear-gradient(135deg, #2563eb 0%, #22c55e 100%)",
        borderRadius: "0 0 24px 24px",
        boxShadow: "0 6px 24px rgba(0,0,0,0.18)"
      }}
    >
      <h1 style={{ fontSize: "46px", fontWeight: 700, marginBottom: "18px" }}>
        Find Local Services With Guaranteed Deals
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.95 }}>
        Book trusted service providers with confirmed appointments.
      </p>

      {/* BUTTONS */}
      <div style={{ marginTop: "35px" }}>
        <button
          style={{
            padding: "14px 32px",
            marginRight: "18px",
            borderRadius: "10px",
            border: "none",
            fontSize: "17px",
            fontWeight: 600,
            cursor: "pointer",
            background: "white",
            color: "#2563eb",
            boxShadow: "0 6px 16px rgba(255,255,255,0.35)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 8px 22px rgba(255,255,255,0.55)";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(255,255,255,0.35)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Book a Service
        </button>

        <button
          style={{
            padding: "14px 32px",
            borderRadius: "10px",
            border: "2px solid white",
            fontSize: "17px",
            fontWeight: 600,
            cursor: "pointer",
            background: "rgba(255,255,255,0.15)",
            color: "white",
            backdropFilter: "blur(4px)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.25)";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View Deals
        </button>
      </div>

      {/* ⭐ SEARCH BAR ⭐ */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <input
          type="text"
          placeholder="Search for services…"
          style={{
            width: "60%",
            padding: "16px 20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
          }}
        />
      </div>
      {/* ⭐ END SEARCH BAR ⭐ */}
    </section>
  );
}

export default HeroSection;

