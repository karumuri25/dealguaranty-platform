function Footer() {
  return (
    <footer
      style={{
        padding: "30px 20px",
        marginTop: "80px",
        textAlign: "center",
        background: "#0f172a",
        color: "white",
        borderRadius: "20px 20px 0 0"
      }}
    >
      <p style={{ fontSize: "15px", opacity: 0.85 }}>
        © {new Date().getFullYear()} DealGuaranty
      </p>

      <div style={{ marginTop: "12px" }}>
        {["About", "Contact", "Terms", "Privacy"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              margin: "0 12px",
              color: "#38bdf8",
              fontWeight: 500,
              fontSize: "14px"
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

