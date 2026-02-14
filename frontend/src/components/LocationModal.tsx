import { useState } from "react";

function LocationModal() {
  const [open, setOpen] = useState(false);
  const cities = ["Hyderabad", "Bangalore", "Chennai", "Mumbai", "Delhi", "Pune"];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "linear-gradient(135deg, #2563eb, #22c55e)",
          color: "white",
          fontWeight: 600,
          cursor: "pointer",
          marginLeft: "20px"
        }}
      >
        Select Location
      </button>

      {/* Modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 300
          }}
        >
          <div
            style={{
              width: "350px",
              padding: "30px",
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
            }}
          >
            <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
              Choose Your City
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#f1f5f9",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e2e8f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f1f5f9";
                  }}
                >
                  {city}
                </button>
              ))}
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(135deg, #2563eb, #22c55e)",
                color: "white",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LocationModal;

