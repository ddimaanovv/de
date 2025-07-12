export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p>© {new Date().getFullYear()} Какой то сайдбар</p>
    </footer>
  );
}
