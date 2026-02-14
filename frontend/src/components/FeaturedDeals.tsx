function FeaturedDeals() {
  const deals = [
    {
      title: "Home Cleaning – Flat ₹200 Off",
      bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    {
      title: "AC Service – Starting ₹499",
      bg: "linear-gradient(135deg, #22c55e, #15803d)"
    },
    {
      title: "Salon at Home – 20% Off",
      bg: "linear-gradient(135deg, #ec4899, #be185d)"
    },
    {
      title: "Car Wash – Guaranteed Slot",
      bg: "linear-gradient(135deg, #8b5cf6, #5b21b6)"
    }
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 700 }}>
        Featured Deals
      </h2>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px"
        }}
      >
        {deals.map((deal) => (
          <div
            key={deal.title}
            style={{
              width: "75%",
              padding: "26px",
              borderRadius: "16px",
              background: deal.bg,
              color: "white",
              fontSize: "18px",
              fontWeight: 600,
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              cursor: "pointer",
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
            {deal.title}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDeals;

