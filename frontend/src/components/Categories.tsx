function Categories() {
  const categories = [
    {
      name: "Home Cleaning",
      icon: "🧹",
      bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    {
      name: "AC Repair",
      icon: "❄️",
      bg: "linear-gradient(135deg, #22c55e, #15803d)"
    },
    {
      name: "Plumbing",
      icon: "🔧",
      bg: "linear-gradient(135deg, #f97316, #c2410c)"
    },
    {
      name: "Salon & Beauty",
      icon: "💄",
      bg: "linear-gradient(135deg, #ec4899, #be185d)"
    },
    {
      name: "Car Wash",
      icon: "🚗",
      bg: "linear-gradient(135deg, #8b5cf6, #5b21b6)"
    },
    {
      name: "Electrician",
      icon: "💡",
      bg: "linear-gradient(135deg, #06b6d4, #0e7490)"
    },
    {
      name: "Tutors",
      icon: "📘",
      bg: "linear-gradient(135deg, #facc15, #ca8a04)"
    },
    {
      name: "More Services",
      icon: "✨",
      bg: "linear-gradient(135deg, #14b8a6, #0f766e)"
    }
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 700 }}>
        Service Categories
      </h2>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px"
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={{
              width: "160px",
              padding: "26px",
              borderRadius: "16px",
              background: cat.bg,
              color: "white",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease"
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
            <div style={{ fontSize: "38px" }}>{cat.icon}</div>
            <p style={{ marginTop: "12px", fontWeight: 600 }}>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;

