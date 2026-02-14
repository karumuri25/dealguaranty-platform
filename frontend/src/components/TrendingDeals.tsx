import { useEffect, useState } from "react";

function TrendingDeals() {
  const deals = [
    "50% Off Home Cleaning",
    "AC Service ₹499",
    "Salon at Home – 20% Off",
    "Car Wash – Guaranteed Slot",
    "Electrician Visit ₹99"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % deals.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: 700 }}>
        Trending Deals
      </h2>

      <div
        style={{
          marginTop: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "70%",
            padding: "24px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
            color: "white",
            fontSize: "20px",
            fontWeight: 700,
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            transition: "all 0.4s ease"
          }}
        >
          {deals[index]}
        </div>
      </div>
    </section>
  );
}

export default TrendingDeals;

