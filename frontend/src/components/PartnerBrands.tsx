function PartnerBrands() {
  const brands = [
    "UrbanClean",
    "FixItPro",
    "FreshHome",
    "AutoShine",
    "BeautyHub"
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 700 }}>
        Trusted by Top Service Providers
      </h2>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        {brands.map((b) => (
          <div
            key={b}
            style={{
              padding: "16px 24px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              fontWeight: 700,
              fontSize: "18px",
              color: "#0f172a",
              cursor: "pointer",
              transition: "all 0.25s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.1)";
            }}
          >
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnerBrands;

