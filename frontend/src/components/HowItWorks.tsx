function HowItWorks() {
  const steps = [
    {
      step: "Choose a service",
      icon: "🛠️",
      bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    {
      step: "Compare deals",
      icon: "💰",
      bg: "linear-gradient(135deg, #22c55e, #15803d)"
    },
    {
      step: "Book a guaranteed appointment",
      icon: "📅",
      bg: "linear-gradient(135deg, #ec4899, #be185d)"
    }
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 700 }}>
        How It Works
      </h2>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >
        {steps.map((item, index) => (
          <div
            key={index}
            style={{
              width: "240px",
              padding: "28px",
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.25s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: item.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
                margin: "0 auto 14px auto",
                color: "white"
              }}
            >
              {item.icon}
            </div>

            <p style={{ fontSize: "16px", fontWeight: 600 }}>{item.step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;

