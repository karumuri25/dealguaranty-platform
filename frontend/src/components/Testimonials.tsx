function Testimonials() {
  const reviews = [
    {
      name: "Rohit Sharma",
      text: "Super fast booking and verified professionals. DealGuaranty saved me so much time.",
      bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    {
      name: "Priya Nair",
      text: "Transparent pricing and guaranteed slots. Loved the experience!",
      bg: "linear-gradient(135deg, #ec4899, #be185d)"
    },
    {
      name: "Amit Verma",
      text: "The best platform for home services. Reliable and easy to use.",
      bg: "linear-gradient(135deg, #22c55e, #15803d)"
    }
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 700 }}>
        What Our Customers Say
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
        {reviews.map((r) => (
          <div
            key={r.name}
            style={{
              width: "300px",
              padding: "26px",
              borderRadius: "16px",
              background: r.bg,
              color: "white",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
          >
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{r.text}</p>
            <p
              style={{
                marginTop: "16px",
                fontWeight: 700,
                fontSize: "17px",
                textAlign: "right"
              }}
            >
              — {r.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

